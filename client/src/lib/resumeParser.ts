import { ResumeData } from "@/types";

// This function simulates parsing a PDF resume by returning hardcoded data extracted from the PDF
// In a real implementation, you would use a library like pdf-lib or pdf.js to extract text from the PDF
export const parseResume = async (): Promise<ResumeData> => {
  // Normally we would extract this data from the PDF, but we're hardcoding it for this example
  
  // Extracted from the PDF
  return {
    name: "Siddhartha Mishra",
    currentRole: "Staff Computer Vision Researcher (AR Core Team)",
    bio: "MS in Artificial Intelligence from IIT Dhanbad, currently working at Samsung Research on AR and Generative Image Dynamics. Expert in Computer Vision, Deep Learning, and AR technologies.",
    contactDetails: {
      email: "siddharthamishra24795@gmail.com",
      phone: "+91-7905118695, 8382095980",
      location: "Noida, India",
    },
    socialLinks: [
      { name: "GitHub", icon: "fa-github", url: "https://github.com/siddhartha-mishra" },
      { name: "LinkedIn", icon: "fa-linkedin", url: "https://www.linkedin.com/in/siddhartha-mishra/" },
      { name: "Medium", icon: "fa-medium", url: "https://medium.com/@siddhartha-mishra" },
      { name: "LeetCode", icon: "fa-code", url: "https://leetcode.com/siddhartha-mishra/" },
    ],
    education: [
      {
        degree: "Master of Technology",
        field: "Artificial Intelligence",
        institution: "IIT(ISM) Dhanbad",
        years: "2018-2020",
        description: "Specialized in Medical Image Processing Using Cycle GAN. Research focused on applying advanced AI techniques to medical imaging challenges.",
        link: "#",
      },
      {
        degree: "Bachelor of Technology",
        field: "Computer Science & Engineering",
        institution: "KNIT Sultanpur",
        years: "2012-2016",
        description: "Completed undergraduate studies in Computer Science with a focus on software development and programming fundamentals. Served as Sports Secretary and lead organizer for technical festivals.",
      },
      {
        degree: "Intermediate",
        field: "PCM - Mathematics",
        institution: "CBSE",
        years: "2010-2011",
        description: "Completed intermediate education with Physics, Chemistry, and Mathematics specialization in Varanasi.",
      },
      {
        degree: "High School",
        field: "PCM - Mathematics",
        institution: "CBSE",
        years: "2008-2009",
        description: "Completed high school education with Physics, Chemistry, and Mathematics focus in Varanasi. Received 3rd Prize in Ramanujan Mathematics Olympiad (2010).",
      },
    ],
    workExperience: [
      {
        company: "Samsung Research",
        title: "Staff Computer Vision Researcher (AR Core Team)",
        date: "Sep 2023 - Present",
        description: [
          "Working on 'Generative Image dynamics' - generating seamlessly looping videos from single images. Reduced processing time from 17 seconds to 3 seconds.",
          "Developed AR features using ARCore and computer vision for height detection, dimension detection, live stickers, emoji, doodling, and touchless interactions."
        ],
        technologies: ["ARCore", "Computer Vision", "LLMs", "3D Modeling", "PyTorch"],
      },
      {
        company: "Qualcomm",
        title: "Sr. Software Engineer",
        date: "Mar 2021 - Aug 2023",
        description: [
          "Developed Object Detection and tracking plugins with trajectory prediction using colored bounding boxes in the AI-ML IoT Framework team.",
          "Created HAL implementations for wearables including display, wrist tilt, brightness, and orientation features. Applied ML techniques for tilt detection and health monitoring."
        ],
        technologies: ["C++", "Python", "TensorFlow Lite", "GStreamer", "HIDL"],
      },
      {
        company: "Amdocs",
        title: "Software Engineer (Billing & RTB Teams)",
        date: "Aug 2020 - Feb 2021",
        description: [
          "Developed APIs for billing systems and real-time billing. Implemented fraud detection and revenue forecasting features.",
          "Created optimization systems and established a rapid bug resolution environment with 24-hour turnaround."
        ],
        technologies: ["Java", "Python", "MySQL", "Machine Learning", "NLP"],
      },
      {
        company: "Other Experiences",
        title: "Various Roles",
        date: "2015 - 2020",
        description: [
          "Guest Lecturer & Hackathon Judge (Sept 2020 - Present): Mentoring competitive coding and data science programs.",
          "Siemens Healthineers (Intern, July 2019 - Feb 2020): Cholesterol prediction through eye images using ML and image processing.",
          "Wheelseye Technology (Sept 2017 - Dec 2017): Developed APIs for live tracking and route optimization with ML."
        ],
        technologies: [],
      },
    ],
    skills: {
      categories: [
        {
          name: "Artificial Intelligence",
          skills: [
            { name: "Deep Learning", level: "Expert" },
            { name: "Machine Learning", level: "Expert" },
            { name: "Computer Vision", level: "Expert" },
            { name: "Large Language Models", level: "Advanced" },
          ],
        },
        {
          name: "Programming",
          skills: [
            { name: "Python", level: "Expert" },
            { name: "C++", level: "Advanced" },
            { name: "Java", level: "Advanced" },
            { name: "JavaScript", level: "Intermediate" },
          ],
        },
        {
          name: "Frameworks & Tools",
          skills: [
            { name: "PyTorch", level: "Expert" },
            { name: "TensorFlow", level: "Advanced" },
            { name: "ARCore", level: "Expert" },
            { name: "Numpy/Pandas", level: "Expert" },
          ],
        },
      ],
      additionalSkills: [
        "Natural Language Processing",
        "Augmented Reality",
        "Image Processing",
        "SQL",
        "Android",
        "LangChain",
        "System Design",
        "Leadership",
        "Hardware Abstraction Layer",
        "Linux",
        "Shell Scripting",
        "Internet of Things (IoT)",
        "Agentic AI",
        "Quantization",
        "Pruning",
        "Distillation",
        "3D Modeling",
        "GStreamer",
        "Android Architecture",
        "C",
        "Git",
      ],
    },
    projects: [
      {
        title: "Generative Image Dynamics",
        description: "Generate seamlessly looping videos from a single image in just 3 seconds using spectral volume interpretation and modal bases approximation.",
        technologies: ["Computer Vision", "PyTorch", "Samsung"],
        image: "https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        demoLink: "#",
        repoLink: "#",
      },
      {
        title: "AR Touchless Doodling",
        description: "Augmented reality doodling in 3D space with precise depth perception and tracking using ARCore and computer vision techniques.",
        technologies: ["ARCore", "Computer Vision", "Android"],
        image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        demoLink: "#",
        repoLink: "#",
      },
      {
        title: "Object Detection & Tracking",
        description: "Real-time object detection with colored bounding boxes and trajectory prediction using TensorFlow Lite and ByteTrack for IoT applications.",
        technologies: ["TensorFlow Lite", "C++", "ByteTrack"],
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        demoLink: "#",
        repoLink: "#",
      },
      {
        title: "Medical Image Processing Using Cycle GAN",
        description: "MTech research project using Cycle GAN for medical image processing and enhancement, with applications in diagnostic imaging.",
        technologies: ["GANs", "PyTorch", "Medical Imaging"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        demoLink: "#",
        repoLink: "#",
      },
      {
        title: "Cholesterol Prediction through Eye Images",
        description: "Non-invasive cholesterol prediction using ML and image processing on eye images. Developed during internship at Siemens Healthineers.",
        technologies: ["Machine Learning", "Image Processing", "Python"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        demoLink: "#",
        repoLink: "#",
      },
      {
        title: "Wearable HAL Development",
        description: "Hardware Abstraction Layer for smartwatches with ML-powered tilt detection and health monitoring features that increased battery life by 40%.",
        technologies: ["C++", "IoT", "HIDL"],
        image: "https://images.unsplash.com/photo-1611746869696-b0dbda4b2c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        demoLink: "#",
        repoLink: "#",
      },
    ],
    blogs: [
      {
        title: "The Future of Generative AI in Augmented Reality",
        summary: "Exploring the intersection of generative models and AR technologies, with insights from recent Samsung Research projects.",
        category: "Generative AI",
        date: "Oct 15, 2023",
        image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        link: "#",
      },
      {
        title: "Optimizing Deep Learning Models for Mobile Devices",
        summary: "A comprehensive guide to quantization, pruning, and distillation techniques for running ML models efficiently on resource-constrained devices.",
        category: "Deep Learning",
        date: "Sep 25, 2023",
        image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        link: "#",
      },
      {
        title: "Recent Advancements in Computer Vision for AR Applications",
        summary: "Analyzing how modern computer vision techniques are revolutionizing augmented reality experiences and enabling new interaction models.",
        category: "Computer Vision",
        date: "Aug 10, 2023",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        link: "#",
      },
    ],
    codingProfiles: [
      {
        name: "GitHub",
        link: "https://github.com/siddhartha-mishra",
        stats: [
          { label: "Repositories", value: "24" },
          { label: "Contributions", value: "156" },
          { label: "Stars", value: "18" },
        ],
      },
      {
        name: "LeetCode",
        link: "https://leetcode.com/siddhartha-mishra",
        stats: [
          { label: "Problems Solved", value: "320+" },
          { label: "Acceptance Rate", value: "85%" },
          { label: "Contest Rating", value: "15" },
        ],
      },
      {
        name: "GeeksforGeeks",
        link: "https://geeksforgeeks.org/user/siddhartha-mishra",
        stats: [
          { label: "Problems Solved", value: "450+" },
          { label: "Rank", value: "Expert", highlight: true },
        ],
      },
    ],
    achievements: [
      {
        title: "Top Ranker - GATE (4 times)",
        description: "Consistently ranked at the top in the Graduate Aptitude Test in Engineering in computer science.",
      },
      {
        title: "Scientist Positions",
        description: "Secured positions at ISRO, BARC, NIELIT, DRDO, BDL, and Cabinet Secretariat.",
      },
      {
        title: "Japan Hackathon 2021 - 2nd Prize",
        description: "Represented India and won second place in the international coding competition.",
      },
      {
        title: "IMLEAP (Siemens Healthineers) - 2nd Prize",
        description: "Recognized for innovation in healthcare technology solutions.",
      },
      {
        title: "Sports Achievements",
        description: "Captain of IIT Dhanbad Cricket Team, represented in Inter IIT (2018, 2019). Sports Secretary 2015-2016.",
      },
    ],
    stats: {
      yearsExperience: 5,
      companies: 4,
      projects: 10,
      achievements: 5,
    },
  };
};
