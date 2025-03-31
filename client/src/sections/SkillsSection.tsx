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
        return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300";
      case 1:
        return "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300";
      case 2:
        return "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300";
      default:
        return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300";
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
        return "bg-blue-600 dark:bg-blue-500";
      case 1:
        return "bg-indigo-600 dark:bg-indigo-500";
      case 2:
        return "bg-sky-600 dark:bg-sky-500";
      default:
        return "bg-blue-600 dark:bg-blue-500";
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
              <div key={categoryIndex} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-md p-6 border border-blue-100 dark:border-blue-800">
                <div className="flex items-center mb-5">
                  <div className={`w-12 h-12 rounded-full ${getCategoryColorClass(categoryIndex)} flex items-center justify-center border-2 border-white dark:border-gray-700 shadow-md`}>
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">{category.name}</h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
                        <div className={`${getProgressBarColor(categoryIndex)} h-3 rounded-full ${getProgressWidth(skill.level)} shadow-md transition-all duration-500 ease-in-out`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
          
          {/* Additional Skills */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-md p-6 md:col-span-3 border border-blue-100 dark:border-blue-800">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-3 border border-blue-200 dark:border-blue-700">
                <FaLayerGroup />
              </div>
              Additional Skills
            </h3>
            {isLoading ? (
              <div className="flex flex-wrap gap-3">
                {Array(20).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-24" />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {skills.additionalSkills.map((skill, index) => (
                  <span key={index} className="inline-block px-4 py-2 text-sm font-medium rounded-md bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-shadow">
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
