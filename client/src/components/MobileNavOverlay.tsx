import { useRef, useEffect } from 'react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import VisitorCounter from './VisitorCounter';
import { ResumeData } from '@/types';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaProjectDiagram, FaFeatherAlt, FaLaptopCode, FaUserPlus } from 'react-icons/fa';
import { Github, Linkedin, PenSquare, Code } from 'lucide-react';

interface MobileNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  resumeData: ResumeData;
  profileImage: string;
  visitorCount: number;
}

const MobileNavOverlay = ({ 
  isOpen, 
  onClose, 
  resumeData, 
  profileImage,
  visitorCount 
}: MobileNavOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
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
  
  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && event.target === overlayRef.current) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <div 
      ref={overlayRef}
      className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className={`bg-white dark:bg-gray-800 w-64 h-full overflow-y-auto transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Profile Summary */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-primary">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt={resumeData.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-xl text-gray-400">👤</span>
              </div>
            )}
          </div>
          <h2 className="text-lg font-bold mt-3 text-center flex items-center justify-center">
            {resumeData.name || 'Loading...'}
            <img src="/assets/indian-flag.svg" alt="Indian Flag" className="w-5 h-4 ml-2" />
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">{resumeData.currentRole || 'Loading...'}</p>
          <div className="flex justify-center space-x-3 mt-2">
            {resumeData.socialLinks?.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 p-1"
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
              >
                {link.icon === 'github' && <Github size={16} />}
                {link.icon === 'linkedin' && <Linkedin size={16} />}
                {link.icon === 'pen-square' && <PenSquare size={16} />}
                {link.icon === 'code' && <Code size={16} />}
              </a>
            ))}
          </div>
        </div>
        
        {/* Mobile Nav Links */}
        <div className="py-2">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary-400"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
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
      </div>
    </div>
  );
};

export default MobileNavOverlay;
