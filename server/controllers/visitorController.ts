import { Request, Response } from "express";
import { storage } from "../storage";

export const visitorController = {
  // Get the current visitor count
  getCount: async (req: Request, res: Response) => {
    try {
      const visitorCount = await storage.getVisitorCount();
      res.json(visitorCount);
    } catch (error) {
      console.error("Error getting visitor count:", error);
      res.status(500).json({ message: "Failed to get visitor count" });
    }
  },
  
  // Increment the visitor count
  incrementCount: async (req: Request, res: Response) => {
    try {
      const visitorCount = await storage.incrementVisitorCount();
      res.json(visitorCount);
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
      res.status(500).json({ message: "Failed to increment visitor count" });
    }
  },
};
