import React from "react";
import { Education } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaExternalLinkAlt, FaGraduationCap } from "react-icons/fa";

interface EducationSectionProps {
  education: Education[];
  isLoading: boolean;
}

const EducationSection = ({ education, isLoading }: EducationSectionProps) => {
  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <Skeleton className="h-16 w-full" />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))
          ) : (
            education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow duration-300">
                <div className={`${index < 2 ? 'bg-gradient-to-r from-blue-600 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-blue-400'} text-white p-5`}>
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-md">
                      <FaGraduationCap className="text-lg" />
                    </span>
                    {edu.degree}
                  </h3>
                  <p className="opacity-90 ml-11">{edu.field}</p>
                </div>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-semibold text-gray-900 dark:text-white text-lg">{edu.institution}</div>
                    <div className="text-sm font-medium bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full">{edu.years}</div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 mb-4 border-l-4 border-blue-300 dark:border-blue-700 pl-3 py-1">
                    {/* Highlight only the words "Ramanujan Mathematics Olympiad" */}
                    {edu.description.split('Ramanujan Mathematics Olympiad').map((part, idx, arr) => {
                      // If it's the last part or there's only one part
                      if (idx === arr.length - 1) {
                        return <span key={idx}>{part}</span>;
                      }
                      // Otherwise, it's a part that's followed by "Ramanujan Mathematics Olympiad"
                      return (
                        <React.Fragment key={idx}>
                          {part}
                          <span className="bg-indigo-800 dark:bg-indigo-700 text-white font-semibold px-2 py-1 rounded">
                            Ramanujan Mathematics Olympiad
                          </span>
                        </React.Fragment>
                      );
                    })}
                  </p>
                  {edu.link && (
                    <a 
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center font-medium px-4 py-2 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
                    >
                      View Research <FaExternalLinkAlt className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
