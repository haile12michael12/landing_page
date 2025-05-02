import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { newsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      const subscriber = await storage.addNewsletterSubscriber(validatedData);
      
      res.status(200).json({
        message: "Successfully subscribed to the newsletter",
        data: subscriber
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        message: "Failed to subscribe to the newsletter" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
