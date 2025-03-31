import { CodingProfile, Achievement } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaCode, FaTrophy, FaGithub, FaExternalLinkAlt, FaLaptopCode, FaAward, FaFlask, FaCodeBranch, FaMedal, FaRunning } from "react-icons/fa";

interface CodingStatsSectionProps {
  codingProfiles: CodingProfile[];
  achievements: Achievement[];
  isLoading: boolean;
}

const CodingStatsSection = ({ codingProfiles, achievements, isLoading }: CodingStatsSectionProps) => {
  // Map achievement title to icon
  const getAchievementIcon = (title: string) => {
    if (title.includes("GATE")) return <FaAward />;
    if (title.includes("Scientist")) return <FaFlask />;
    if (title.includes("Hackathon")) return <FaCodeBranch />;
    if (title.includes("IMLEAP") || title.includes("Prize")) return <FaMedal />;
    if (title.includes("Sports")) return <FaRunning />;
    return <FaTrophy />;
  };

  return (
    <section id="coding" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Coding Stats & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coding Stats */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <FaCode className="text-primary mr-2" /> Coding Profiles
            </h3>
            
            <div className="space-y-6">
              {isLoading ? (
                // Loading skeletons
                Array(3).fill(0).map((_, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                    <div className="flex items-center mb-4">
                      <Skeleton className="h-6 w-6 mr-3 rounded-full" />
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-4 w-20 ml-auto" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
                          <Skeleton className="h-6 w-12 mx-auto mb-1" />
                          <Skeleton className="h-3 w-16 mx-auto" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                // Actual coding profiles
                codingProfiles.map((profile, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                    <div className="flex items-center mb-4">
                      {profile.name === "GitHub" ? <FaGithub className="text-xl mr-3" /> : 
                       profile.name === "LeetCode" ? <FaCode className="text-xl mr-3" /> : 
                       <FaLaptopCode className="text-xl mr-3" />}
                      <h4 className="font-bold">{profile.name}</h4>
                      <a 
                        href={profile.link} 
                        className="ml-auto text-xs text-primary-600 dark:text-primary-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Profile
                      </a>
                    </div>
                    <div className={`grid grid-cols-${profile.stats.length} gap-2 text-center`}>
                      {profile.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
                          <div className={`text-lg font-bold text-gray-900 dark:text-white ${stat.highlight ? 'text-green-600 dark:text-green-400' : ''}`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <FaTrophy className="text-primary mr-2" /> Key Achievements
            </h3>
            
            <div className="space-y-4">
              {isLoading ? (
                // Loading skeletons
                Array(5).fill(0).map((_, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <div className="flex">
                      <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
                      <div className="ml-4">
                        <Skeleton className="h-5 w-40 mb-1" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Actual achievements
                achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                        {getAchievementIcon(achievement.title)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-900 dark:text-white">{achievement.title}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStatsSection;
