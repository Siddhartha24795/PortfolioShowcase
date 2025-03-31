import { Project } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100 dark:border-gray-600">
                <div className="h-48 overflow-hidden relative">
                  {project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 flex items-center justify-center p-6">
                      <span className="text-blue-800 dark:text-blue-100 text-xl font-bold">{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-100 dark:border-gray-600">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm flex items-center transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    )}
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm flex items-center transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 w-4 h-4" /> Repository
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
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
