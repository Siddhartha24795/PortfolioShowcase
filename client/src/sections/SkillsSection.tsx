import { SkillCategory } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaBrain, FaCode, FaLayerGroup } from "react-icons/fa";

interface SkillsSectionProps {
  skills: {
    categories: SkillCategory[];
    additionalSkills: string[];
  };
  isLoading: boolean;
}

const SkillsSection = ({ skills, isLoading }: SkillsSectionProps) => {
  // Map icon based on category name
  const getCategoryIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'artificial intelligence':
        return <FaBrain />;
      case 'programming':
        return <FaCode />;
      case 'frameworks & tools':
        return <FaLayerGroup />;
      default:
        return <FaCode />;
    }
  };

  // Map category to background color
  const getCategoryColorClass = (index: number) => {
    switch (index % 3) {
      case 0:
        return "bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400";
      case 1:
        return "bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400";
      case 2:
        return "bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400";
      default:
        return "bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400";
    }
  };

  // Map skill level to progress width
  const getProgressWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return "w-[95%]";
      case 'advanced':
        return "w-[85%]";
      case 'intermediate':
        return "w-[70%]";
      case 'beginner':
        return "w-[50%]";
      default:
        return "w-[75%]";
    }
  };

  // Map category to bar color
  const getProgressBarColor = (index: number) => {
    switch (index % 3) {
      case 0:
        return "bg-primary-600";
      case 1:
        return "bg-secondary-600";
      case 2:
        return "bg-accent-600";
      default:
        return "bg-primary-600";
    }
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons for skill categories
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="h-6 w-40 ml-3" />
                </div>
                <div className="space-y-4">
                  {Array(4).fill(0).map((_, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Actual skill categories
            skills.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full ${getCategoryColorClass(categoryIndex)} flex items-center justify-center`}>
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="text-xl font-bold ml-3">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className={`${getProgressBarColor(categoryIndex)} h-2 rounded-full ${getProgressWidth(skill.level)}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
          
          {/* Additional Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:col-span-3">
            <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
            {isLoading ? (
              <div className="flex flex-wrap gap-2">
                {Array(20).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-24" />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {skills.additionalSkills.map((skill, index) => (
                  <span key={index} className="inline-block px-3 py-1 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
