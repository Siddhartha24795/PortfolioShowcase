import { Education } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaExternalLinkAlt, FaGraduationCap, FaUniversity, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

interface EducationSectionProps {
  education: Education[];
  isLoading: boolean;
}

const EducationSection = ({ education, isLoading }: EducationSectionProps) => {
  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        {isLoading ? (
          // Loading skeletons for timeline view
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-700"></div>
            
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-600 border-4 border-white dark:border-gray-800 z-10"></div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8 text-right'}`}>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
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
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-700"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative mb-16">
                {/* Timeline Node */}
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 -mt-3 w-12 h-12 rounded-full 
                    ${index < 2 ? 'bg-blue-600' : 'bg-blue-500'} 
                    border-4 border-white dark:border-gray-800 z-10 shadow-lg
                    flex items-center justify-center text-white`}
                >
                  <FaGraduationCap size={20} />
                </div>
                
                {/* Content Box - Alternating Left/Right */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className={`${index < 2 ? 'bg-gradient-to-r from-blue-600 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-blue-400'} text-white p-5`}>
                      <h3 className="text-xl font-bold flex items-center">
                        {edu.degree}
                      </h3>
                      <p className="opacity-90 mt-1 flex items-center">
                        <FaBookOpen className="mr-2" />
                        {edu.field}
                      </p>
                    </div>
                    
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20">
                      <div className="flex flex-col mb-4">
                        <div className="font-semibold text-gray-900 dark:text-white text-lg flex items-center">
                          <FaUniversity className="mr-2 text-blue-500" />
                          {edu.institution}
                        </div>
                        <div className="text-sm font-medium text-blue-700 dark:text-blue-200 mt-2 flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          {edu.years}
                        </div>
                      </div>
                      
                      <p className="text-gray-800 dark:text-gray-200 mb-4 border-l-4 border-blue-300 dark:border-blue-700 pl-3 py-1">
                        {edu.description}
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
                  
                  {/* Arrow pointer */}
                  <div 
                    className={`absolute top-4 ${index % 2 === 0 ? 'left-0 border-r-8' : 'right-0 border-l-8'} 
                      w-0 h-0 border-t-8 border-b-8 
                      ${index % 2 === 0 ? 'border-r-blue-600' : 'border-l-blue-600'}
                      border-t-transparent border-b-transparent`}>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Timeline End Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 rounded-full bg-blue-700 border-4 border-white dark:border-gray-800 z-10"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
