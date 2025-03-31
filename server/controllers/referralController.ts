import { Request, Response } from "express";
import { sendReferralEmail } from "../utils/emailSender";
import { storage } from "../storage";

export const referralController = {
  // Submit a referral request
  submitReferral: async (req: Request, res: Response) => {
    try {
      // Check if resume file was uploaded
      if (!req.file) {
        return res.status(400).json({ message: "Resume file is required" });
      }
      
      const { name, email, phone, company, position, jobLink, message } = req.body;
      
      // Basic validation
      if (!name || !email || !company || !position) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Create the referral in storage
      const referral = await storage.createReferral({
        name,
        email,
        phone: phone || "",
        company,
        position,
        jobLink: jobLink || "",
        message: message || "",
        resumeFilename: req.file.originalname,
        resumeData: req.file.buffer,
        submittedAt: new Date(),
      });
      
      // Send email notification
      await sendReferralEmail({
        name,
        email,
        phone: phone || "Not provided",
        company,
        position,
        jobLink: jobLink || "Not provided",
        message: message || "No message provided",
        resumeFileName: req.file.originalname,
        resumeBuffer: req.file.buffer,
      });
      
      res.status(201).json({
        message: "Referral request submitted successfully",
        referralId: referral.id,
      });
    } catch (error) {
      console.error("Error submitting referral:", error);
      res.status(500).json({ message: "Failed to submit referral request" });
    }
  },
};
