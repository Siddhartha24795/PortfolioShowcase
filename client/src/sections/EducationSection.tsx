import { Education } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaExternalLinkAlt } from "react-icons/fa";

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
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <div className={`${index < 2 ? 'bg-primary-600' : 'bg-secondary-600'} text-white p-4`}>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="opacity-90">{edu.field}</p>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium text-gray-900 dark:text-white">{edu.institution}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{edu.years}</div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {edu.description}
                  </p>
                  {edu.link && (
                    <a 
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-primary-600 dark:text-primary-400 hover:underline text-sm inline-flex items-center"
                    >
                      View Research <FaExternalLinkAlt className="ml-1 text-xs" />
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
