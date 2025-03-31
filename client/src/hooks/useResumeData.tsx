import { useState, useEffect } from "react";
import { ResumeData } from "@/types";
import { parseResume } from "@/lib/resumeParser";

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "",
    currentRole: "",
    bio: "",
    contactDetails: {
      email: "",
      phone: "",
      location: "",
    },
    education: [],
    workExperience: [],
    skills: {
      categories: [],
      additionalSkills: [],
    },
    projects: [],
    blogs: [],
    codingProfiles: [],
    achievements: [],
    socialLinks: [],
    stats: {
      yearsExperience: 0,
      companies: 0,
      projects: 0,
      achievements: 0,
    },
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        // Fetch parsed resume data from API
        const response = await fetch("/api/resume");
        
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        console.error("Error fetching resume data:", err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
        
        // Fall back to parsed local data
        try {
          const parsedData = await parseResume();
          setResumeData(parsedData);
        } catch (parseErr) {
          console.error("Error parsing resume:", parseErr);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchResumeData();
  }, []);
  
  return { resumeData, isLoading, error };
};
