import { Project } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectsSectionProps {
  projects: Project[];
  isLoading: boolean;
}

const ProjectsSection = ({ projects, isLoading }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array(6).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-5">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Array(3).fill(0).map((_, i) => (
                      <Skeleton key={i} className="h-6 w-16" />
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual projects
            projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-lg">{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        className="text-primary-600 dark:text-primary-400 hover:underline text-sm flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    )}
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        className="text-primary-600 dark:text-primary-400 hover:underline text-sm flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-1" /> Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://github.com/siddhartha-mishra" 
            className="inline-flex items-center px-5 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
