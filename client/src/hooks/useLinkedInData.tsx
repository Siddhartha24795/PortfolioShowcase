import { useState, useEffect } from "react";
import { LinkedInData } from "@/types";

export const useLinkedInData = () => {
  const [linkedInData, setLinkedInData] = useState<LinkedInData>({
    profileImage: "",
    bio: "",
    location: "",
    currentPosition: "",
    company: "",
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchLinkedInData = async () => {
      try {
        // In a real implementation, this would use LinkedIn OAuth API
        // For now, we're using a placeholder image
        const response = await fetch("/api/linkedin");
        
        if (!response.ok) {
          throw new Error("Failed to fetch LinkedIn data");
        }
        
        const data = await response.json();
        setLinkedInData(data);
      } catch (err) {
        console.error("Error fetching LinkedIn data:", err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
        
        // Fallback profile image
        setLinkedInData({
          profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
          bio: "",
          location: "",
          currentPosition: "",
          company: "",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLinkedInData();
  }, []);
  
  return { linkedInData, isLoading, error };
};
