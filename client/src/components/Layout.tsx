import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import MobileNavOverlay from "./MobileNavOverlay";
import Footer from "./Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import EducationSection from "@/sections/EducationSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import BlogsSection from "@/sections/BlogsSection";
import CodingStatsSection from "@/sections/CodingStatsSection";
import ReferralSection from "@/sections/ReferralSection";
import { useMobile } from "@/hooks/use-mobile";
import { ResumeData, LinkedInData } from "@/types";

interface LayoutProps {
  resumeData: ResumeData;
  linkedInData: LinkedInData;
  isDataLoading: boolean;
  visitorCount?: number;
}

const Layout = ({ resumeData, linkedInData, isDataLoading, visitorCount = 0 }: LayoutProps) => {
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen">
      {/* Side Navigation for Desktop */}
      <Sidebar 
        resumeData={resumeData} 
        profileImage={linkedInData.profileImage} 
        visitorCount={visitorCount} 
      />
      
      {/* Mobile Header */}
      <MobileHeader 
        onMenuClick={toggleMobileMenu} 
        name={resumeData.name} 
      />
      
      {/* Mobile Navigation Overlay */}
      <MobileNavOverlay 
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        resumeData={resumeData}
        profileImage={linkedInData.profileImage}
        visitorCount={visitorCount}
      />
      
      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        <HeroSection
          name={resumeData.name}
          role={resumeData.currentRole}
          bio={resumeData.bio}
          stats={resumeData.stats}
          isLoading={isDataLoading}
        />
        
        <AboutSection
          name={resumeData.name}
          bio={resumeData.bio}
          contactDetails={resumeData.contactDetails}
          profileImage={linkedInData.profileImage}
          socialLinks={resumeData.socialLinks}
          isLoading={isDataLoading}
        />
        
        <ExperienceSection
          experiences={resumeData.workExperience}
          isLoading={isDataLoading}
        />
        
        <EducationSection
          education={resumeData.education}
          isLoading={isDataLoading}
        />
        
        <SkillsSection
          skills={resumeData.skills}
          isLoading={isDataLoading}
        />
        
        <ProjectsSection
          projects={resumeData.projects}
          isLoading={isDataLoading}
        />
        
        <BlogsSection
          blogs={resumeData.blogs}
          isLoading={isDataLoading}
        />
        
        <CodingStatsSection
          codingProfiles={resumeData.codingProfiles}
          achievements={resumeData.achievements}
          isLoading={isDataLoading}
        />
        
        <ReferralSection />
        
        <Footer
          name={resumeData.name}
          role={resumeData.currentRole}
          contactDetails={resumeData.contactDetails}
          socialLinks={resumeData.socialLinks}
          visitorCount={visitorCount}
        />
      </main>
    </div>
  );
};

export default Layout;
