import { Experience } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaBriefcase } from "react-icons/fa";
import { CalendarClock } from "lucide-react";

interface ExperienceSectionProps {
  experiences: Experience[];
  isLoading: boolean;
}

const ExperienceSection = ({ experiences, isLoading }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="mb-8">
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-40 mb-1" />
                <Skeleton className="h-3 w-24 mb-4" />
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
            ))
          ) : (
            // Actual experience items
            experiences.map((experience, index) => (
              <div key={index} className="mb-10">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{experience.company}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.title}</p>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0">
                        <CalendarClock className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{experience.date}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {experience.description.map((desc, i) => (
                        <p key={i} className="text-gray-800 dark:text-gray-200">
                          {desc}
                        </p>
                      ))}
                    </div>
                    
                    {(experience.technologies && experience.technologies.length > 0) || experience.company === "IIT Dhanbad" ? (
                      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies ? (
                            experience.technologies.map((tech, i) => (
                              <span key={i} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                                {tech}
                              </span>
                            ))
                          ) : experience.company === "IIT Dhanbad" ? (
                            ["C++", "Python", "ML", "Deep Learning"].map((tech, i) => (
                              <span key={i} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                                {tech}
                              </span>
                            ))
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
