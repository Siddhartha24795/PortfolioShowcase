import { Experience } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { CalendarClock, CircleOff, CircleDotDashed, CheckCircle2 } from "lucide-react";

interface ExperienceSectionProps {
  experiences: Experience[];
  isLoading: boolean;
}

const ExperienceSection = ({ experiences, isLoading }: ExperienceSectionProps) => {
  const getTimelineDot = (index: number) => {
    if (index === 0) {
      return <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />;
    } else if (index === experiences.length - 1) {
      return <CircleOff className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    } else {
      return <CircleDotDashed className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };
  
  const getTimelineColor = (index: number) => {
    if (index === 0) {
      return "bg-gradient-to-b from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400";
    } else if (index === experiences.length - 1) {
      return "bg-gradient-to-t from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400";
    } else {
      return "bg-blue-500 dark:bg-blue-600";
    }
  };

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
        
        <div className="max-w-5xl mx-auto relative">
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
            <>
              {/* Timeline Line */}
              <div className="absolute left-[22px] top-0 h-full w-1 bg-blue-200 dark:bg-blue-800 z-0 md:left-1/2 md:ml-[-0.5px]"></div>
                
              {/* Experience Items */}
              {experiences.map((experience, index) => (
                <div key={index} className="relative z-10 mb-10 flex flex-col md:flex-row items-start">
                  {/* Timeline Marker - Mobile View (Left) */}
                  <div className="absolute left-0 top-6 flex items-center justify-center z-10 md:hidden">
                    {getTimelineDot(index)}
                  </div>
                  
                  {/* Timeline Connector - Only on non-last items */}
                  {index < experiences.length - 1 && (
                    <div className={`absolute left-[22px] top-12 bottom-[-40px] w-1 ${getTimelineColor(index)} z-0 md:hidden`}></div>
                  )}
                  
                  {/* Card */}
                  <div className={`ml-12 w-full md:w-[calc(50%-20px)] md:ml-0 ${index % 2 === 0 ? 'md:mr-[calc(50%+20px)]' : 'md:ml-[calc(50%+20px)]'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {/* Header with gradient */}
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 p-4 text-white">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold flex items-center">
                            <FaBuilding className="mr-2" />
                            {experience.company}
                          </h3>
                          <div className="flex items-center text-white/90 text-sm">
                            <CalendarClock className="w-4 h-4 mr-1" />
                            {experience.date}
                          </div>
                        </div>
                        <p className="text-white/90 mt-1 font-medium flex items-center">
                          <FaBriefcase className="mr-2" />
                          {experience.title}
                        </p>
                      </div>
                    
                      <div className="p-5">
                        <div className="space-y-3">
                          {experience.description.map((desc, i) => {
                            if (experience.company === "Other Experiences" && desc.includes("**")) {
                              // Parse the description with highlighted company names
                              return (
                                <p key={i} className="text-gray-800 dark:text-gray-200">
                                  {desc.split("**").map((part, partIndex) => {
                                    // Even indices are normal text, odd indices are company names to highlight
                                    return partIndex % 2 === 1 ? (
                                      <span key={partIndex} className="font-bold text-blue-700 dark:text-blue-300">
                                        {part}
                                      </span>
                                    ) : (
                                      part
                                    );
                                  })}
                                </p>
                              );
                            } else {
                              return (
                                <p key={i} className="text-gray-800 dark:text-gray-200">
                                  {desc}
                                </p>
                              );
                            }
                          })}
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
                  
                  {/* Timeline Marker - Desktop View (Center) */}
                  <div className="hidden md:flex absolute left-1/2 top-6 transform -translate-x-1/2 items-center justify-center z-10">
                    <div className="bg-white dark:bg-gray-900 p-1 rounded-full">
                      {getTimelineDot(index)}
                    </div>
                  </div>
                  
                  {/* Timeline Connector - Desktop View */}
                  {index < experiences.length - 1 && (
                    <div className={`hidden md:block absolute left-1/2 top-12 bottom-[-40px] w-1 ${getTimelineColor(index)} z-0 transform -translate-x-1/2`}></div>
                  )}
                  
                  {/* Timeline Date Label for Desktop */}
                  <div className={`hidden md:block absolute top-7 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900 px-2 py-1 rounded border border-blue-200 dark:border-blue-800 ${index % 2 === 0 ? 'left-[calc(50%+15px)]' : 'right-[calc(50%+15px)]'}`}>
                    {experience.date.split('–')[0].trim()}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
