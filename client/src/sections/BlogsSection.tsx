import { Blog } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaArrowRight, FaMedium } from "react-icons/fa";
import { PenSquare, BookOpen, Calendar, Monitor, Lightbulb } from "lucide-react";

interface BlogsSectionProps {
  blogs: Blog[];
  isLoading: boolean;
}

const BlogsSection = ({ blogs, isLoading }: BlogsSectionProps) => {
  // Function to get the blog category icon
  const getCategoryIcon = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('generative') || categoryLower.includes('ai')) {
      return <Lightbulb className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
    } else if (categoryLower.includes('deep') || categoryLower.includes('learning')) {
      return <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
    } else if (categoryLower.includes('vision') || categoryLower.includes('computer')) {
      return <Monitor className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
    } else {
      return <PenSquare className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
    }
  };

  // Function to determine category-specific colors
  const getCategoryColors = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('generative') || categoryLower.includes('ai')) {
      return {
        bg: "bg-amber-50 dark:bg-amber-900/20",
        text: "text-amber-800 dark:text-amber-300",
        border: "border-amber-200 dark:border-amber-800",
        headerBg: "from-amber-500 to-orange-500 dark:from-amber-700 dark:to-orange-700"
      };
    } else if (categoryLower.includes('deep') || categoryLower.includes('learning')) {
      return {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        text: "text-indigo-800 dark:text-indigo-300",
        border: "border-indigo-200 dark:border-indigo-800",
        headerBg: "from-indigo-500 to-purple-500 dark:from-indigo-700 dark:to-purple-700"
      };
    } else if (categoryLower.includes('vision') || categoryLower.includes('computer')) {
      return {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-800 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-800",
        headerBg: "from-blue-500 to-cyan-500 dark:from-blue-700 dark:to-cyan-700"
      };
    } else {
      return {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-800 dark:text-purple-300",
        border: "border-purple-200 dark:border-purple-800",
        headerBg: "from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700"
      };
    }
  };

  return (
    <section id="blogs" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Blogs & Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <Skeleton className="h-6 w-24 mr-2" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))
          ) : (
            // Actual blogs
            blogs.map((blog, index) => {
              const colors = getCategoryColors(blog.category);
              const categoryIcon = getCategoryIcon(blog.category);
              
              const catLower = blog.category.toLowerCase();
              return (
                <div 
                  key={index} 
                  className={`group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${colors.border} border border-opacity-70 dark:border-opacity-50`}
                >
                  {/* Category ribbon */}
                  <div className={`relative overflow-hidden`}>
                    <div className="absolute top-4 -left-12 transform -rotate-45 z-10">
                      <div className="py-1 px-12 text-white text-xs font-bold uppercase tracking-wider shadow-md"
                        style={{
                          background: catLower.includes('generative') || catLower.includes('ai')
                            ? 'linear-gradient(to right, #f59e0b, #d97706)'
                            : catLower.includes('deep') || catLower.includes('learning')
                              ? 'linear-gradient(to right, #6366f1, #8b5cf6)'
                              : catLower.includes('vision') || catLower.includes('computer')
                                ? 'linear-gradient(to right, #3b82f6, #06b6d4)'
                                : 'linear-gradient(to right, #8b5cf6, #ec4899)'
                        }}
                      >
                        {blog.category}
                      </div>
                    </div>
                    
                    {/* Blog image */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          // If image fails to load, add a gradient background instead
                          const target = e.currentTarget;
                          target.onerror = null; // Prevent infinite callback if fallback also fails
                          const parent = target.parentElement as HTMLElement;
                          
                          // Create a colorful gradient background based on category
                          parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br');
                          
                          // Apply the gradient colors via style property instead of class
                          const catLower = blog.category.toLowerCase();
                          if (catLower.includes('generative') || catLower.includes('ai')) {
                            parent.style.background = 'linear-gradient(to bottom right, #f59e0b, #d97706)';
                          } else if (catLower.includes('deep') || catLower.includes('learning')) {
                            parent.style.background = 'linear-gradient(to bottom right, #6366f1, #8b5cf6)';
                          } else if (catLower.includes('vision') || catLower.includes('computer')) {
                            parent.style.background = 'linear-gradient(to bottom right, #3b82f6, #06b6d4)';
                          } else {
                            parent.style.background = 'linear-gradient(to bottom right, #8b5cf6, #ec4899)';
                          }
                          
                          target.style.display = 'none';
                          
                          // Add title element
                          const titleDiv = document.createElement('div');
                          titleDiv.className = `text-center text-white font-bold px-6 py-4 text-lg`;
                          titleDiv.textContent = blog.title;
                          parent.appendChild(titleDiv);
                        }}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Date badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center ${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-medium`}>
                        <Calendar className="w-3 h-3 mr-1" />
                        {blog.date}
                      </div>
                      
                      <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center`}>
                        {categoryIcon}
                      </div>
                    </div>
                    
                    {/* Title and summary */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-3">
                      {blog.summary}
                    </p>
                    
                    {/* Read more link */}
                    <div className="flex justify-end mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                      <a 
                        href={blog.link} 
                        className={`${colors.text} hover:underline flex items-center text-sm font-medium transition-colors`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Article <FaArrowRight className="ml-1 text-xs transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://medium.com/@siddhartha-mishra" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-medium rounded-lg hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium className="mr-2 text-xl" />
            View All Articles on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
