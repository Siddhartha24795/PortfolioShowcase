import { ContactDetails, SocialLink } from "@/types";
import { FaUser, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Globe, Github, Linkedin, PenSquare, Code, Mail, Phone, MapPin, Link, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface AboutSectionProps {
  name: string;
  bio: string;
  contactDetails: ContactDetails;
  profileImage: string;
  socialLinks: SocialLink[];
  isLoading: boolean;
}

const AboutSection = ({ 
  name, 
  bio, 
  contactDetails, 
  profileImage, 
  socialLinks, 
  isLoading 
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex justify-center">
            {isLoading ? (
              <Skeleton className="relative w-64 h-64 rounded-xl" />
            ) : (
              <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-5xl text-gray-400">👤</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              </div>
            )}
          </div>
          
          <div className="md:w-2/3">
            {isLoading ? (
              <>
                <Skeleton className="h-6 w-48 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Skeleton className="h-5 w-40 mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-5 w-20 mb-2" />
                    <div className="flex space-x-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                  I am {name}, an AI researcher with <span className="font-semibold text-blue-700 dark:text-blue-300">9+ years of experience</span>, specializing in <span className="font-semibold text-blue-700 dark:text-blue-300">Generative AI</span>, <span className="font-semibold text-blue-700 dark:text-blue-300">LLMs</span>, <span className="font-semibold text-blue-700 dark:text-blue-300">Diffusion Models</span>, <span className="font-semibold text-blue-700 dark:text-blue-300">GANs</span>, and <span className="font-semibold text-blue-700 dark:text-blue-300">Agentic AI</span>. Since 2018, I've worked across <span className="font-semibold text-blue-700 dark:text-blue-300">GANs</span> to <span className="font-semibold text-blue-700 dark:text-blue-300">LLM</span>-driven autonomous AI, optimizing on-device deployment with quantization, pruning, and distillation.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
                  Leading the <span className="font-semibold text-blue-700 dark:text-blue-300">GenAI team</span>, I focus on real-time generative image dynamics, enabling seamless interactions on mobile and embedded devices. Experienced in <span className="font-semibold text-blue-700 dark:text-blue-300">TFLite</span>, <span className="font-semibold text-blue-700 dark:text-blue-300">PyTorch Lite</span>, GStreamer, OpenGL, and <span className="font-semibold text-blue-700 dark:text-blue-300">LLM</span>-based applications with <span className="font-semibold text-blue-700 dark:text-blue-300">RAG</span>, vector databases, and multimodal AI.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
                  Passionate about Vibe Coding—blending creativity and engineering for immersive <span className="font-semibold text-blue-700 dark:text-blue-300">AI experiences</span>. With a Master's degree in Artificial Intelligence from IIT Dhanbad, I bridge the gap between theoretical AI advancements and practical applications that enhance user experiences.
                </p>
                
                {/* Resume Download Section */}
                <div className="mb-6 flex justify-center">
                  <a 
                    href="/assets/SiddharthaMishra_SamsungResearch_IITDhn_Resume.pdf" 
                    download="SiddharthaMishra_Resume.pdf"
                    className="group"
                  >
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md flex items-center gap-2 transition-all transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-800"
                    >
                      <FileText className="w-5 h-5 group-hover:animate-pulse" />
                      <span>Download Resume</span>
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                    </Button>
                  </a>
                </div>
                
                <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20 shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-4 text-lg flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2 border border-blue-200 dark:border-blue-700">
                          <FaUser className="w-4 h-4" />
                        </div>
                        Contact Details
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-200 dark:border-blue-700">
                            <Mail className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                          </div>
                          <span className="ml-3 text-gray-700 dark:text-gray-300 break-all pt-2">{contactDetails.email}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-200 dark:border-blue-700">
                            <Phone className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                          </div>
                          <span className="ml-3 text-gray-700 dark:text-gray-300 pt-2">{contactDetails.phone}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-200 dark:border-blue-700">
                            <MapPin className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                          </div>
                          <span className="ml-3 text-gray-700 dark:text-gray-300 pt-2">{contactDetails.location}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-4 text-lg flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2 border border-blue-200 dark:border-blue-700">
                          <Globe className="w-4 h-4" />
                        </div>
                        Connect
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {socialLinks.map((link, index) => {
                          let url = link.url;
                          if (link.icon === 'github') {
                            url = "https://github.com/Siddhartha24795";
                          }
                          if (link.icon === 'code') {
                            url = "https://www.geeksforgeeks.org/user/siddharthamishra/";
                          }
                          return (
                            <a 
                              key={index}
                              href={url} 
                              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors border border-blue-200 dark:border-blue-700"
                              target="_blank"
                              rel="noopener noreferrer"
                              title={link.name}
                            >
                              {link.icon === 'github' && <Github size={20} />}
                              {link.icon === 'linkedin' && <Linkedin size={20} />}
                              {link.icon === 'pen-square' && <PenSquare size={20} />}
                              {link.icon === 'code' && <Code size={20} />}
                            </a>
                          );
                        })}
                        <a 
                          href="https://leetcode.com/u/Siddhartha24795/" 
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors border border-blue-200 dark:border-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="LeetCode"
                        >
                          <SiLeetcode size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
