import { useState } from "react";
import { Experience } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaBriefcase } from "react-icons/fa";

interface ExperienceSectionProps {
  experiences: Experience[];
  isLoading: boolean;
}

const ExperienceSection = ({ experiences, isLoading }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 ml-4 md:-ml-0.5 w-1 h-full bg-blue-300 dark:bg-blue-700"></div>
          
          {/* Timeline Items */}
          {isLoading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="relative pb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'mb-8 md:mb-0 md:pr-8 md:text-right' : 'pl-8 md:pl-0 md:pr-12 md:text-right order-2 md:order-1'}`}>
                    <Skeleton className="absolute w-10 h-10 rounded-full" />
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-40 mb-1" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'pl-8 md:pl-12' : 'mb-8 md:mb-0 md:pl-8 order-1 md:order-2'}`}>
                    <Skeleton className="md:hidden h-4 w-32 mb-2" />
                    <Skeleton className="h-32 w-full rounded-lg" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual experience items
            experiences.map((experience, index) => (
              <div key={index} className="relative pb-12">
                <div className="flex flex-col md:flex-row items-start">
                  {index % 2 === 0 ? (
                    // Left side (even items)
                    <>
                      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:text-right">
                        <div className="hidden md:block absolute right-0 top-0 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 z-10 md:translate-x-1/2"></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.company}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.title}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{experience.date}</p>
                      </div>
                      <div className="md:w-1/2 pl-8 md:pl-12 relative">
                        <div className="md:hidden absolute left-0 top-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 z-10 -translate-x-1/2"></div>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-lg shadow-md border border-blue-200 dark:border-blue-800">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white md:hidden">{experience.company}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium md:hidden mb-1">{experience.title}</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm md:hidden mb-3">{experience.date}</p>
                          
                          {experience.description.map((desc, i) => (
                            <p key={i} className="text-gray-800 dark:text-gray-200 mb-3">
                              {desc}
                            </p>
                          ))}
                          
                          {experience.technologies && (
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, i) => (
                                  <span key={i} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Right side (odd items)
                    <>
                      <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right order-2 md:order-1">
                        <div className="md:hidden absolute left-0 top-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 z-10 -translate-x-1/2"></div>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-lg shadow-md border border-blue-200 dark:border-blue-800">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white md:hidden">{experience.company}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium md:hidden mb-1">{experience.title}</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm md:hidden mb-3">{experience.date}</p>
                          
                          {experience.description.map((desc, i) => (
                            <p key={i} className="text-gray-800 dark:text-gray-200 mb-3">
                              {desc}
                            </p>
                          ))}
                          
                          {experience.technologies && experience.technologies.length > 0 ? (
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, i) => (
                                  <span key={i} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : experience.company === "IIT Dhanbad" ? (
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {["C++", "Python", "ML", "Deep Learning"].map((tech, i) => (
                                  <span key={i} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8 order-1 md:order-2">
                        <div className="hidden md:block absolute left-0 top-0 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 z-10 md:translate-x-1/2"></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.company}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.title}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{experience.date}</p>
                      </div>
                    </>
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

export default ExperienceSection;
