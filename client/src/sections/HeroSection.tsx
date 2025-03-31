import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Skeleton } from "@/components/ui/skeleton";

interface HeroSectionProps {
  name: string;
  role: string;
  bio: string;
  stats: {
    yearsExperience: number;
    companies: number;
    projects: number;
    achievements: number;
  };
  isLoading: boolean;
}

const HeroSection = ({ name, role, bio, stats, isLoading }: HeroSectionProps) => {
  const scrollToSection = useScrollToSection();

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-primary to-accent-600 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-2/3">
            {isLoading ? (
              <>
                <Skeleton className="h-12 w-3/4 mb-4 bg-white/20" />
                <Skeleton className="h-8 w-1/2 mb-6 bg-white/20" />
                <Skeleton className="h-24 w-full mb-8 bg-white/20" />
                <div className="flex flex-wrap gap-3">
                  <Skeleton className="h-12 w-32 bg-white/20" />
                  <Skeleton className="h-12 w-32 bg-white/20" />
                </div>
              </>
            ) : (
              <>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  {name}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-light mb-6">
                  {role}
                </h2>
                <p className="text-lg opacity-90 max-w-2xl mb-8">
                  {bio}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => scrollToSection('about')}
                    className="px-6 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md"
                  >
                    Contact Me
                  </Button>
                  <Button
                    onClick={() => scrollToSection('referrals')}
                    variant="outline"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors"
                  >
                    Request Referral
                  </Button>
                </div>
              </>
            )}
          </div>
          
          <div className="hidden lg:block lg:w-1/3 mt-8 lg:mt-0">
            {/* Stats Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {isLoading ? (
                  Array(4).fill(0).map((_, i) => (
                    <div key={i} className="text-center p-3">
                      <Skeleton className="h-8 w-12 mx-auto mb-1 bg-white/20" />
                      <Skeleton className="h-4 w-24 mx-auto bg-white/20" />
                    </div>
                  ))
                ) : (
                  <>
                    <div className="text-center p-3">
                      <div className="text-3xl font-bold">{stats.yearsExperience}+</div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Years Experience</div>
                    </div>
                    <div className="text-center p-3">
                      <div className="text-3xl font-bold">{stats.companies}</div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Companies</div>
                    </div>
                    <div className="text-center p-3">
                      <div className="text-3xl font-bold">{stats.projects}+</div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Projects</div>
                    </div>
                    <div className="text-center p-3">
                      <div className="text-3xl font-bold">{stats.achievements}+</div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Achievements</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
