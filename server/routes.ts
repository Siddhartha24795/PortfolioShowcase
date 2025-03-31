import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import { parseResumeFromPDF } from "./utils/resumeParser";
import { referralController } from "./controllers/referralController";
import { visitorController } from "./controllers/visitorController";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (_req, file, cb) => {
    // Allow only PDFs
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/visitors/count", visitorController.getCount);
  app.get("/api/visitors/increment", visitorController.incrementCount);
  
  // Resume data endpoint
  app.get("/api/resume", async (req, res) => {
    try {
      const resumeData = await parseResumeFromPDF();
      res.json(resumeData);
    } catch (error) {
      console.error("Error parsing resume:", error);
      res.status(500).json({ message: "Failed to parse resume data" });
    }
  });
  
  // LinkedIn data endpoint (mocked)
  app.get("/api/linkedin", (req, res) => {
    // In a real implementation, this would fetch data from LinkedIn API
    res.json({
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Staff Computer Vision Researcher at Samsung Research with expertise in AR and Generative AI",
      location: "Noida, India",
      currentPosition: "Staff Computer Vision Researcher",
      company: "Samsung Research",
    });
  });
  
  // Referral form submission
  app.post("/api/referrals", upload.single("resume"), referralController.submitReferral);

  const httpServer = createServer(app);

  return httpServer;
}
