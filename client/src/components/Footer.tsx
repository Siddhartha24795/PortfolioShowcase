import VisitorCounter from './VisitorCounter';
import { SocialLink, ContactDetails } from '@/types';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface FooterProps {
  name: string;
  role: string;
  contactDetails: ContactDetails;
  socialLinks: SocialLink[];
  visitorCount: number;
}

const Footer = ({ name, role, contactDetails, socialLinks, visitorCount }: FooterProps) => {
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'referrals', label: 'Request Referral' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{name || 'Loading...'}</h3>
            <p className="text-gray-400 mb-4">MS in Artificial Intelligence (IIT Dhanbad)</p>
            <p className="text-gray-400">{role || 'Loading...'}</p>
            
            <div className="mt-6 flex space-x-4">
              {socialLinks?.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab ${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 text-primary w-5" />
                <span className="ml-2 text-gray-400">{contactDetails?.email || 'Loading...'}</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 text-primary w-5" />
                <span className="ml-2 text-gray-400">{contactDetails?.phone || 'Loading...'}</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 text-primary w-5" />
                <span className="ml-2 text-gray-400">{contactDetails?.location || 'Loading...'}</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <div className="text-sm text-gray-400 flex items-center">
                <span>Visitors:</span>
                <span className="ml-1 font-bold">{visitorCount ? visitorCount.toLocaleString() : "..."}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p className="mt-2">Website design created with React.js and TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
