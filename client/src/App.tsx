import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import { useResumeData } from "@/hooks/useResumeData";
import { useLinkedInData } from "@/hooks/useLinkedInData";
import { useQuery } from "@tanstack/react-query";

function App() {
  const location = useLocation();
  
  // Parse resume data
  const { resumeData, isLoading: isResumeLoading } = useResumeData();
  
  // Get LinkedIn data
  const { linkedInData, isLoading: isLinkedInLoading } = useLinkedInData();
  
  // Increment visitor count on page load
  const { data: visitorData } = useQuery({
    queryKey: ["/api/visitors/increment"],
    staleTime: Infinity,
  });

  return (
    <>
      <Layout 
        resumeData={resumeData} 
        linkedInData={linkedInData}
        isDataLoading={isResumeLoading || isLinkedInLoading}
        visitorCount={visitorData?.count}
      />
      <Toaster />
    </>
  );
}

export default App;
