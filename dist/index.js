// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
import multer from "multer";

// server/utils/resumeParser.ts
import fs from "fs";
import { PDFDocument } from "pdf-lib";
async function parseResumeFromPDF() {
  try {
    const pdfPath = "/home/runner/workspace/attached_assets/SiddharthaMishra_SamsungResearch_IITDhn_Resume.pdf";
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const numPages = pdfDoc.getPageCount();
    return {
      name: "Siddhartha Mishra",
      currentRole: "Staff Computer Vision Researcher (GenAI Team)",
      bio: "MS in Artificial Intelligence from IIT Dhanbad, currently working at Samsung Research on AR and Generative Image Dynamics. Expert in Computer Vision, Deep Learning, and AR technologies.",
      contactDetails: {
        email: "siddharthamishra24795@gmail.com",
        phone: "+91-7905118695, 8382095980",
        location: "Noida, India"
      },
      socialLinks: [
        { name: "GitHub", icon: "github", url: "https://github.com/Siddhartha24795" },
        { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/siddhartha-mishra/" },
        { name: "Medium", icon: "pen-square", url: "https://medium.com/@siddharthamishra" },
        { name: "GeeksforGeeks", icon: "code", url: "https://www.geeksforgeeks.org/user/siddharthamishra/" }
      ],
      education: [
        {
          degree: "Master of Technology",
          field: "Artificial Intelligence",
          institution: "IIT(ISM) Dhanbad",
          years: "2018-2020",
          description: "Specialized in Medical Image Processing Using Cycle GAN. Research focused on applying advanced AI techniques to medical imaging challenges.",
          link: "https://drive.google.com/file/d/1ih7XwT73iCwm2sFP1pZ9jq_52rubSdH4/view"
        },
        {
          degree: "Bachelor of Technology",
          field: "Computer Science & Engineering",
          institution: "KNIT Sultanpur",
          years: "2012-2016",
          description: "Completed undergraduate studies in Computer Science with a focus on software development and programming fundamentals. Served as Sports Secretary and lead organizer for technical festivals."
        },
        {
          degree: "Intermediate",
          field: "PCM - Mathematics",
          institution: "CBSE",
          years: "2010-2011",
          description: "Completed intermediate education with Physics, Chemistry, and Mathematics specialization in Varanasi."
        },
        {
          degree: "High School",
          field: "PCM - Mathematics",
          institution: "CBSE",
          years: "2008-2009",
          description: "Completed high school education with Physics, Chemistry, and Mathematics focus in Varanasi. Received 3rd Prize in Ramanujan Mathematics Olympiad (2010)."
        }
      ],
      workExperience: [
        {
          company: "Samsung Research",
          title: "Staff Computer Vision Researcher (GenAI Team)",
          date: "Sep 2023 - Present",
          description: [
            "Working on 'Generative Image dynamics' - generating seamlessly looping videos from single images. Reduced processing time from 17 seconds to 3 seconds.",
            "Developed AR features using ARCore and computer vision for height detection, dimension detection, live stickers, emoji, doodling, and touchless interactions."
          ],
          technologies: ["ARCore", "Computer Vision", "LLMs", "3D Modeling", "PyTorch"]
        },
        {
          company: "Qualcomm",
          title: "Sr. Software Engineer",
          date: "Mar 2021 - Aug 2023",
          description: [
            "Developed Object Detection and tracking plugins with trajectory prediction using colored bounding boxes in the AI-ML IoT Framework team.",
            "Created HAL implementations for wearables including display, wrist tilt, brightness, and orientation features. Applied ML techniques for tilt detection and health monitoring."
          ],
          technologies: ["C++", "Python", "TensorFlow Lite", "GStreamer", "HIDL"]
        },
        {
          company: "Amdocs",
          title: "Software Engineer (Billing & RTB Teams)",
          date: "Aug 2020 - Feb 2021",
          description: [
            "Developed APIs for billing systems and real-time billing. Implemented fraud detection and revenue forecasting features.",
            "Created optimization systems and established a rapid bug resolution environment with 24-hour turnaround."
          ],
          technologies: ["Java", "Python", "MySQL", "Machine Learning", "NLP"]
        },
        {
          company: "Other Experiences",
          title: "Various Roles",
          date: "2015 - 2020",
          description: [
            "**Guest Lecturer & Hackathon Judge** (Sept 2020 - Present): Mentoring competitive coding and data science programs.",
            "**Siemens Healthineers** (Intern, July 2019 - Feb 2020): Cholesterol prediction through eye images using ML and image processing.",
            "**Wheelseye Technology** (Sept 2017 - Dec 2017): Developed APIs for live tracking and route optimization with ML.",
            "**Scrum Technology** (June 2016 - Aug 2017): Full Stack Development with ML."
          ],
          technologies: ["Agile Methodology", "Scrum", "JIRA", "Kanban", "Sprint Planning", "Product Backlog", "Retrospectives"]
        }
      ],
      skills: {
        categories: [
          {
            name: "Artificial Intelligence",
            skills: [
              { name: "Deep Learning", level: "Expert" },
              { name: "Machine Learning", level: "Expert" },
              { name: "Computer Vision", level: "Expert" },
              { name: "Large Language Models", level: "Advanced" }
            ]
          },
          {
            name: "Programming",
            skills: [
              { name: "Python", level: "Expert" },
              { name: "C++", level: "Advanced" },
              { name: "Java", level: "Advanced" },
              { name: "JavaScript", level: "Intermediate" }
            ]
          },
          {
            name: "Frameworks & Tools",
            skills: [
              { name: "PyTorch", level: "Expert" },
              { name: "TensorFlow", level: "Advanced" },
              { name: "ARCore", level: "Expert" },
              { name: "Numpy/Pandas", level: "Expert" }
            ]
          }
        ],
        additionalSkills: [
          "Natural Language Processing",
          "Augmented Reality",
          "Image Processing",
          "SQL",
          "Android",
          "LangChain",
          "System Design",
          "Leadership",
          "Hardware Abstraction Layer",
          "Linux",
          "Shell Scripting",
          "Internet of Things (IoT)",
          "Agentic AI",
          "Quantization",
          "Pruning",
          "Distillation",
          "3D Modeling",
          "GStreamer",
          "Android Architecture",
          "C",
          "Git"
        ]
      },
      projects: [
        {
          title: "Generative Image Dynamics",
          description: "Generate seamlessly looping videos from a single image in just 3 seconds using spectral volume interpretation and modal bases approximation.",
          technologies: ["Computer Vision", "PyTorch", "Samsung"],
          image: "/images/projects/ai-project.png",
          demoLink: "#",
          repoLink: "#"
        },
        {
          title: "AR Touchless Doodling",
          description: "Augmented reality doodling in 3D space with precise depth perception and tracking using ARCore and computer vision techniques.",
          technologies: ["ARCore", "Computer Vision", "Android"],
          image: "/images/projects/web-project.png",
          demoLink: "#",
          repoLink: "#"
        },
        {
          title: "Object Detection & Tracking",
          description: "Real-time object detection with colored bounding boxes and trajectory prediction using TensorFlow Lite and ByteTrack for IoT applications.",
          technologies: ["TensorFlow Lite", "C++", "ByteTrack"],
          image: "/images/projects/ml-project.png",
          demoLink: "#",
          repoLink: "#"
        },
        {
          title: "Medical Image Processing Using Cycle GAN",
          description: "MTech research project using Cycle GAN for medical image processing and enhancement, with applications in diagnostic imaging.",
          technologies: ["GANs", "PyTorch", "Medical Imaging"],
          image: "/images/projects/ai-project.png",
          demoLink: "#",
          repoLink: "#"
        },
        {
          title: "Cholesterol Prediction through Eye Images",
          description: "Non-invasive cholesterol prediction using ML and image processing on eye images. Developed during internship at Siemens Healthineers.",
          technologies: ["Machine Learning", "Image Processing", "Python"],
          image: "/images/projects/ml-project.png",
          demoLink: "#",
          repoLink: "#"
        },
        {
          title: "Wearable HAL Development",
          description: "Hardware Abstraction Layer for smartwatches with ML-powered tilt detection and health monitoring features that increased battery life by 40%.",
          technologies: ["C++", "IoT", "HIDL"],
          image: "/images/projects/web-project.png",
          demoLink: "#",
          repoLink: "#"
        }
      ],
      blogs: [
        {
          title: "The Future of Generative AI in Augmented Reality",
          summary: "Exploring the intersection of generative models and AR technologies, with insights from recent Samsung Research projects.",
          category: "Generative AI",
          date: "Oct 15, 2023",
          image: "/images/blogs/gen-ai-ar.svg",
          link: "#"
        },
        {
          title: "Optimizing Deep Learning Models for Mobile Devices",
          summary: "A comprehensive guide to quantization, pruning, and distillation techniques for running ML models efficiently on resource-constrained devices.",
          category: "Deep Learning",
          date: "Sep 25, 2023",
          image: "/images/blogs/deep-learning-optimization.svg",
          link: "#"
        },
        {
          title: "Recent Advancements in Computer Vision for AR Applications",
          summary: "Analyzing how modern computer vision techniques are revolutionizing augmented reality experiences and enabling new interaction models.",
          category: "Computer Vision",
          date: "Aug 10, 2023",
          image: "/images/blogs/computer-vision-ar.svg",
          link: "#"
        }
      ],
      codingProfiles: [
        {
          name: "GitHub",
          link: "https://github.com/Siddhartha24795",
          stats: [
            { label: "Repositories", value: "24" },
            { label: "Contributions", value: "156" },
            { label: "Stars", value: "18" }
          ]
        },
        {
          name: "LeetCode",
          link: "https://leetcode.com/u/Siddhartha24795/",
          stats: [
            { label: "Problems Solved", value: "320+" },
            { label: "Acceptance Rate", value: "85%" },
            { label: "Contest Rating", value: "15" }
          ]
        },
        {
          name: "GeeksforGeeks",
          link: "https://www.geeksforgeeks.org/user/siddharthamishra/",
          stats: [
            { label: "Problems Solved", value: "450+" },
            { label: "Rank", value: "Expert", highlight: true }
          ]
        }
      ],
      achievements: [
        {
          title: "Top Ranker - GATE (4 times)",
          description: "Consistently ranked at the top in the Graduate Aptitude Test in Engineering in computer science."
        },
        {
          title: "Scientist Positions",
          description: "Secured positions at ISRO, BARC, NIELIT, DRDO, BDL, and Cabinet Secretariat."
        },
        {
          title: "Japan Hackathon 2021 - 2nd Prize",
          description: "Represented India and won second place in the international coding competition."
        },
        {
          title: "IMLEAP (Siemens Healthineers) - 2nd Prize",
          description: "Recognized for innovation in healthcare technology solutions."
        },
        {
          title: "Sports Achievements",
          description: "Captain of IIT Dhanbad Cricket Team, represented in Inter IIT (2018, 2019). Sports Secretary 2015-2016."
        }
      ],
      stats: {
        yearsExperience: 9,
        companies: 4,
        projects: 10,
        achievements: 5
      }
    };
  } catch (error) {
    console.error("Error parsing resume:", error);
    throw new Error("Failed to parse resume data");
  }
}

// server/utils/emailSender.ts
import nodemailer from "nodemailer";
async function sendReferralEmail(data) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER || "noreply@example.com",
      pass: process.env.EMAIL_PASS || "password"
    }
  });
  const htmlBody = `
    <h2>New Referral Request</h2>
    <p>A new referral request has been submitted with the following details:</p>
    
    <h3>Contact Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
    </ul>
    
    <h3>Referral Details:</h3>
    <ul>
      <li><strong>Target Company:</strong> ${data.company}</li>
      <li><strong>Position/Role:</strong> ${data.position}</li>
      <li><strong>Job Link:</strong> ${data.jobLink}</li>
    </ul>
    
    <h3>Message:</h3>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
    
    <h3>Resume Link:</h3>
    <p><a href="${data.resumeLink}" target="_blank">${data.resumeLink}</a></p>
  `;
  try {
    let info = await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_USER || "noreply@example.com"}>`,
      to: "siddhartha24795@gmail.com",
      subject: `New Referral Request: ${data.name} for ${data.position} at ${data.company}`,
      html: htmlBody
    });
    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email notification");
  }
}

// server/storage.ts
var MemStorage = class {
  users;
  visitorCount;
  visitorLastUpdated;
  referrals;
  currentId;
  currentReferralId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.visitorCount = 0;
    this.visitorLastUpdated = /* @__PURE__ */ new Date();
    this.referrals = /* @__PURE__ */ new Map();
    this.currentId = 1;
    this.currentReferralId = 1;
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Visitor counter methods
  async getVisitorCount() {
    return {
      count: this.visitorCount,
      lastUpdated: this.visitorLastUpdated.toISOString()
    };
  }
  async incrementVisitorCount() {
    this.visitorCount += 1;
    this.visitorLastUpdated = /* @__PURE__ */ new Date();
    return {
      count: this.visitorCount,
      lastUpdated: this.visitorLastUpdated.toISOString()
    };
  }
  // Referral methods
  async createReferral(referral) {
    const id = this.currentReferralId++;
    const newReferral = {
      ...referral,
      id,
      processed: false
    };
    this.referrals.set(id, newReferral);
    return { id };
  }
  async getReferral(id) {
    return this.referrals.get(id);
  }
  async listReferrals() {
    return Array.from(this.referrals.values());
  }
};
var storage = new MemStorage();

// server/controllers/referralController.ts
var referralController = {
  // Submit a referral request
  submitReferral: async (req, res) => {
    try {
      const { name, email, phone, company, position, jobLink, message, resumeLink, countryCode } = req.body;
      if (!name || !email || !company || !position || !resumeLink) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const referral = await storage.createReferral({
        name,
        email,
        phone: phone ? `${countryCode || "+91"} ${phone}` : "",
        company,
        position,
        jobLink: jobLink || "",
        message: message || "",
        resumeLink,
        submittedAt: /* @__PURE__ */ new Date()
      });
      await sendReferralEmail({
        name,
        email,
        phone: phone ? `${countryCode || "+91"} ${phone}` : "Not provided",
        company,
        position,
        jobLink: jobLink || "Not provided",
        message: message || "No message provided",
        resumeLink
      });
      res.status(201).json({
        message: "Referral request submitted successfully",
        referralId: referral.id
      });
    } catch (error) {
      console.error("Error submitting referral:", error);
      res.status(500).json({ message: "Failed to submit referral request" });
    }
  }
};

// server/controllers/visitorController.ts
var visitorController = {
  // Get the current visitor count
  getCount: async (req, res) => {
    try {
      const visitorCount = await storage.getVisitorCount();
      res.json(visitorCount);
    } catch (error) {
      console.error("Error getting visitor count:", error);
      res.status(500).json({ message: "Failed to get visitor count" });
    }
  },
  // Increment the visitor count
  incrementCount: async (req, res) => {
    try {
      const visitorCount = await storage.incrementVisitorCount();
      res.json(visitorCount);
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
      res.status(500).json({ message: "Failed to increment visitor count" });
    }
  }
};

// server/routes.ts
var upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
    // 5MB limit
  },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  }
});
async function registerRoutes(app2) {
  app2.get("/api/visitors/count", visitorController.getCount);
  app2.get("/api/visitors/increment", visitorController.incrementCount);
  app2.get("/api/resume", async (req, res) => {
    try {
      const resumeData = await parseResumeFromPDF();
      res.json(resumeData);
    } catch (error) {
      console.error("Error parsing resume:", error);
      res.status(500).json({ message: "Failed to parse resume data" });
    }
  });
  app2.get("/api/linkedin", (req, res) => {
    res.json({
      profileImage: "/assets/LinkedInPicture.jpeg",
      bio: "Staff Computer Vision Researcher at Samsung Research with expertise in AR and Generative AI",
      location: "Noida, India",
      currentPosition: "Staff Computer Vision Researcher",
      company: "Samsung Research"
    });
  });
  app2.post("/api/referrals", referralController.submitReferral);
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs2 from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs2.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs2.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
