import { ContactDetails, SocialLink } from "@/types";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

interface AboutSectionProps {
  name: string;
  bio: string;
  contactDetails: ContactDetails;
  profileImage: string;
  socialLinks: SocialLink[];
  isLoading: boolean;
}

const AboutSection = ({ 
  name, 
  bio, 
  contactDetails, 
  profileImage, 
  socialLinks, 
  isLoading 
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex justify-center">
            {isLoading ? (
              <Skeleton className="relative w-64 h-64 rounded-xl" />
            ) : (
              <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-5xl text-gray-400">👤</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              </div>
            )}
          </div>
          
          <div className="md:w-2/3">
            {isLoading ? (
              <>
                <Skeleton className="h-6 w-48 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Skeleton className="h-5 w-40 mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-5 w-20 mb-2" />
                    <div className="flex space-x-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Who I Am</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I am a {name}, specializing in Augmented Reality and Generative AI technologies. With a Master's degree in Artificial Intelligence from IIT Dhanbad, I bring a strong academic foundation to my professional work.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {bio}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Throughout my career, I've led development teams, mentored junior engineers, and contributed to cutting-edge research in AI and AR. I'm passionate about bridging the gap between theoretical AI advancements and practical applications that enhance user experiences.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Contact Details</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FaEnvelope className="mt-1 text-primary w-5" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{contactDetails.email}</span>
                      </li>
                      <li className="flex items-start">
                        <FaPhone className="mt-1 text-primary w-5" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{contactDetails.phone}</span>
                      </li>
                      <li className="flex items-start">
                        <FaMapMarkerAlt className="mt-1 text-primary w-5" />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{contactDetails.location}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Connect</h4>
                    <div className="flex space-x-3">
                      {socialLinks.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url} 
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fab ${link.icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
