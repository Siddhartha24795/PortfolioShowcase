import { Request, Response } from "express";
import { sendReferralEmail } from "../utils/emailSender";
import { storage } from "../storage";

export const referralController = {
  // Submit a referral request
  submitReferral: async (req: Request, res: Response) => {
    try {
      const { name, email, phone, company, position, jobLink, message, resumeLink, countryCode } = req.body;
      
      // Basic validation
      if (!name || !email || !company || !position || !resumeLink) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Create the referral in storage
      const referral = await storage.createReferral({
        name,
        email,
        phone: phone ? `${countryCode || '+91'} ${phone}` : "",
        company,
        position,
        jobLink: jobLink || "",
        message: message || "",
        resumeLink,
        submittedAt: new Date(),
      });
      
      // Send email notification
      await sendReferralEmail({
        name,
        email,
        phone: phone ? `${countryCode || '+91'} ${phone}` : "Not provided",
        company,
        position,
        jobLink: jobLink || "Not provided",
        message: message || "No message provided",
        resumeLink,
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
