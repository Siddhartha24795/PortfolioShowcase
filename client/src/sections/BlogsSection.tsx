import { Blog } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { FaArrowRight } from "react-icons/fa";

interface BlogsSectionProps {
  blogs: Blog[];
  isLoading: boolean;
}

const BlogsSection = ({ blogs, isLoading }: BlogsSectionProps) => {
  return (
    <section id="blogs" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blogs & Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
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
            blogs.map((blog, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  {blog.image ? (
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-lg">{blog.title}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                      {blog.category}
                    </span>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{blog.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {blog.summary}
                  </p>
                  <a 
                    href={blog.link} 
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More <FaArrowRight className="ml-1 text-xs" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://medium.com/@siddhartha-mishra" 
            className="inline-flex items-center px-5 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-medium rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Articles on Medium <i className="fab fa-medium ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
