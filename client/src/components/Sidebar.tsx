import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import VisitorCounter from './VisitorCounter';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { ResumeData } from '@/types';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaProjectDiagram, FaFeatherAlt, FaLaptopCode, FaUserPlus } from 'react-icons/fa';
import { Github, Linkedin, PenSquare, Code } from 'lucide-react';

interface SidebarProps {
  resumeData: ResumeData;
  profileImage: string;
  visitorCount: number;
}

const Sidebar = ({ resumeData, profileImage, visitorCount }: SidebarProps) => {
  const scrollToSection = useScrollToSection();
  
  const navItems = [
    { id: 'about', label: 'About Me', icon: <FaUser className="w-5" /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase className="w-5" /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap className="w-5" /> },
    { id: 'skills', label: 'Skills', icon: <FaCode className="w-5" /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram className="w-5" /> },
    { id: 'blogs', label: 'Blogs', icon: <FaFeatherAlt className="w-5" /> },
    { id: 'coding', label: 'Coding Stats', icon: <FaLaptopCode className="w-5" /> },
    { id: 'referrals', label: 'Referrals', icon: <FaUserPlus className="w-5" /> },
  ];

  return (
    <nav className="fixed h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden lg:block shadow-sm transition-all duration-200">
      <div className="flex flex-col h-full">
        {/* Profile Summary */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt={resumeData.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-3xl text-gray-400">👤</span>
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold mt-4 text-center flex items-center justify-center">
            {resumeData.name || 'Loading...'} 
            <img src="/assets/indian-flag.svg" alt="Indian Flag" className="w-5 h-4 ml-2" />
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{resumeData.currentRole || 'Loading...'}</p>
          <div className="flex justify-center space-x-3 mt-3">
            {resumeData.socialLinks?.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 p-1"
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
              >
                {link.icon === 'github' && <Github size={18} />}
                {link.icon === 'linkedin' && <Linkedin size={18} />}
                {link.icon === 'pen-square' && <PenSquare size={18} />}
                {link.icon === 'code' && <Code size={18} />}
              </a>
            ))}
          </div>
        </div>
        
        {/* Nav Links */}
        <div className="py-4 flex-grow">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary-400"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Visitor Counter */}
        <VisitorCounter count={visitorCount} />
        
        {/* Theme Toggle */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
