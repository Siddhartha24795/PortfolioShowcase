import { Project } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, ArrowRight, Code, Cpu, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectsSectionProps {
  projects: Project[];
  isLoading: boolean;
}

const ProjectsSection = ({ projects, isLoading }: ProjectsSectionProps) => {
  // Function to get the appropriate icon based on project technologies
  const getProjectIcon = (technologies: string[]) => {
    const techLower = technologies.map(tech => tech.toLowerCase());
    if (techLower.some(tech => tech.includes('ai') || tech.includes('ml') || tech.includes('pytorch') || tech.includes('tensor'))) {
      return <BrainCircuit className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />;
    } else if (techLower.some(tech => tech.includes('c++') || tech.includes('embedded') || tech.includes('iot'))) {
      return <Cpu className="w-10 h-10 text-emerald-500 dark:text-emerald-400" />;
    } else {
      return <Code className="w-10 h-10 text-blue-500 dark:text-blue-400" />;
    }
  };

  // Function to get the card colors based on project type
  const getCardColors = (technologies: string[], index: number) => {
    const techLower = technologies.map(tech => tech.toLowerCase());
    
    // AI/ML projects
    if (techLower.some(tech => tech.includes('ai') || tech.includes('ml') || tech.includes('pytorch') || tech.includes('tensor'))) {
      return {
        gradient: "from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-900",
        border: "border-indigo-200 dark:border-indigo-800",
        header: "bg-indigo-50 dark:bg-indigo-900/30",
        accent: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
        link: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
      };
    } 
    // IoT/Hardware projects
    else if (techLower.some(tech => tech.includes('c++') || tech.includes('embedded') || tech.includes('iot'))) {
      return {
        gradient: "from-emerald-600 to-teal-600 dark:from-emerald-800 dark:to-teal-900",
        border: "border-emerald-200 dark:border-emerald-800", 
        header: "bg-emerald-50 dark:bg-emerald-900/30",
        accent: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
        link: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
      };
    } 
    // Web/Mobile projects
    else {
      return {
        gradient: "from-blue-600 to-cyan-600 dark:from-blue-800 dark:to-cyan-900",
        border: "border-blue-200 dark:border-blue-800",
        header: "bg-blue-50 dark:bg-blue-900/30",
        accent: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
        link: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
      };
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Notable Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(6).fill(0).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
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
            projects.map((project, index) => {
              const colors = getCardColors(project.technologies, index);
              const projectIcon = getProjectIcon(project.technologies);
              
              return (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${colors.border} border-2`}
                >
                  {/* Top colored bar */}
                  <div className={`h-2 w-full bg-gradient-to-r ${colors.gradient}`}></div>
                  
                  {/* Project image or fallback */}
                  <div className="relative">
                    <div className={`${colors.header} p-6 flex items-center justify-between`}>
                      <div className="flex items-center">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 shadow-sm ${colors.border} border`}>
                          {projectIcon}
                        </div>
                        <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      </div>
                    </div>
                    
                    {project.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          onError={(e) => {
                            // If image fails to load, add class to hide the image element
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.style.height = '0';
                          }}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Project content */}
                  <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-5 min-h-[4.5rem]">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className={colors.accent}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          className={`${colors.link} font-medium text-sm flex items-center transition-colors`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Demo <ExternalLink className="ml-1 w-3 h-3" />
                        </a>
                      )}
                      {project.repoLink && (
                        <a 
                          href={project.repoLink} 
                          className={`${colors.link} font-medium text-sm flex items-center transition-colors`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 w-4 h-4" /> Repository
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Siddhartha24795"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md"
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
