export const projects = [
  {
    id: 15,
    title: "Kaamsaz Platform",
    shortDescription: "Visual literacy-focused platform with multilingual support",
    longDescription: `A comprehensive platform built using the Flutter and Firebase, designed to enhance visual literacy through interactive features. 
                     It supports multiple languages, dynamic content creation, and user-generated media, allowing for personalized learning experiences.`,
    thumbnail: "/projects/kaamsaz/thumbnail.png",
    images: [
    ],
    category: "web",
    featured: false,
    tech: ["Flutter", "Firebase"],
    links: {
    
    },
    highlights: [
      "Integrated multilingual support (Urdu and English)",
      "Built role-based access control (RBAC) with Firebase",
      "Implemented interactive media features for enhanced learning",
      "Optimized platform performance for a smooth user experience"
    ],
    testimonial: {
      text: "Kaamsaz has revolutionized how we approach visual literacy in education.",
      author: "Hira Toheed Khan",
      position: "Client"
    }
  },
  {
    id: 14,
    title: "Pointrush Recreation App",
    shortDescription: "Recreation and exploration app with dynamic map features",
    longDescription: `A full-featured recreation platform built with the MERN stack and Next.js, designed for users to explore tracks, waypoints, and locations. 
                     The app supports real-time tracking, user-generated content, and a gamified experience for participants.`,
    thumbnail: "/pointrush-thumbnail.jpg",
    images: [
      "/pointrush-1.jpg",
      "/pointrush-2.jpg",
      "/pointrush-3.jpg"
    ],
    category: "web",
    featured: false,
    tech: ["MERN Stack", "Next.js", "Redux", "Firebase", "Map API"],
    links: {
      live: "https://pointrush.com",
      
      demo: "https://demo.pointrush.com"
    },
    highlights: [
      "Developed real-time map tracking and waypoint generation",
      "Integrated dynamic user roles with role-based content access",
      "Implemented gamification features for track completion",
      "Optimized app performance for seamless user experience"
    ],
    testimonial: {
      text: "Pointrush offers an engaging and exciting way to explore new places.",
      author: "Arjan Busger",
      position: "Explorer and Travel Blogger"
    }
  },
  {
    id: 12,
    title: "Restaurant Review Management System",
    shortDescription: "A system for restaurant reviews, ratings, and management",
    longDescription: `A web application built with the MERN stack that allows users to submit restaurant reviews, rate their experiences, 
                     and manage restaurant profiles. Features include search and filter options, as well as an admin dashboard for restaurant owners.`,
    thumbnail: "/projects/restaurant-1.png",
    images: [
      "/projects/restaurant-1.png",
      "/projects/restaurant-2.png",
      "/projects/restaurant-3.png"
    ],
    category: "web",
    featured: false,
    tech: ["MERN Stack", "Node.js", "MongoDB", "React"],
    links: {
      live: "https://restaurantreviews.com",
      
      demo: "https://demo.restaurantreviews.com"
    },
    highlights: [
      "Implemented user-friendly review submission and rating system",
      "Built dynamic search and filtering options for restaurant discovery",
      "Created an admin dashboard for restaurant management",
      "Enhanced user experience with responsive design"
    ],
    testimonial: {
      text: "This system has made it easier to discover quality restaurants.",
      author: "Ali Ahmed",
      position: "Restaurant Owner"
    }
  },

  {
    id: 9,
    title: "TikTok Video Downloader App",
    shortDescription: "Cross-platform app to download TikTok videos and audio",
    longDescription: `A mobile application developed with React Native that allows users to download TikTok videos with or without watermarks, 
                     extract audio, and manage downloaded content. The app supports both Android and iOS platforms.`,
    thumbnail: "/projects/tiktok/1.jpg",
    images: [
      "/projects/tiktok/2.jpg",
      "/projects/tiktok/3.jpg",
      "/projects/tiktok/4.jpg",
      "/projects/tiktok/5.jpg",
      "/projects/tiktok/6.jpg"
    ],
    category: "mobile",
    featured: false,
    tech: ["React Native", "Firebase", "Node.js"],
    links: {
      android: "https://play.google.com/store/apps/details?id=com.tiktok.downloader",
      ios: "https://apps.apple.com/app/id987654321",
      github: "https://github.com/rajafawady/tiktok-video-downloader"
    },
    highlights: [
      "Developed video downloading with and without watermark options",
      "Built audio extraction functionality for TikTok videos",
      "Integrated content management for downloaded videos",
      "Achieved high performance and smooth operation on both platforms"
    ],
    testimonial: {
      text: "A must-have app for TikTok users who love saving content.",
      author: "Ahmed Nawaz",
      position: "App User"
    }
  },
  {
    id: 8,
    title: "AquExpress",
    shortDescription: "Water tanks delivery platform with scheduling and instant delivery",
    longDescription: `A full-stack web application developed using Laravel for the purpose of water tank delivery. The app includes an admin panel and client-side functionality. 
                     Clients can schedule orders for specific dates and times, place instant delivery requests, and manage their orders. The admin panel provides features for managing orders, 
                     viewing monthly stats, and ensuring efficient operations.`,
    thumbnail: "/projects/aquexpress/1.png",
    images: [
      "/projects/aquexpress/2.png",
      "/projects/aquexpress/3.png",
      "/projects/aquexpress/4.png",
      "/projects/aquexpress/5.png",
    ],
    category: "web",
    featured: true,
    tech: ["PHP", "Laravel"],
    links: {
      live: "https://aquexpress.com",
    
    },
    highlights: [
      "Developed scheduling and instant delivery features",
      "Created an admin panel to manage orders and view stats",
      "Built automated order placement for scheduled deliveries",
      "Visualized monthly stats with dynamic graphs"
    ],
    testimonial: {
      text: "AquExpress has streamlined our water delivery operations effectively.",
      author: "Kashif Ali",
      position: "Business Owner"
    }
  },
  {
    id: 11,
    title: "CodeKnitters NSTP Website",
    shortDescription: "Company portfolio website showcasing brand and services",
    longDescription: `A responsive portfolio website developed with Next.js and TypeScript for CodeKnitters NSTP. 
                     The site features sleek design, dynamic content, and interactive elements to engage visitors while highlighting the company's services and commitment to quality.`,
    thumbnail: "/projects/codeknitters/1.png",
    images: [
      "/projects/codeknitters/2.png",
    ],
    category: "web",
    featured: false,
    tech: ["Next.js", "TypeScript"],
    links: {
      live: "https://codeknitters.com",
    
    },
    highlights: [
      "Developed with a focus on sleek and functional design",
      "Integrated dynamic content for seamless updates",
      "Optimized for responsiveness across all devices",
      "Implemented interactive features to enhance user engagement"
    ],
    testimonial: {
      text: "Our website perfectly represents our brand and the services we offer. It has impressed both clients and partners.",
      author: "Ahsan Ameen",
      position: "CEO, CodeKnitters NSTP"
    }
  },
  {
    id: 13,
    title: "Flutter Expense Tracker App",
    shortDescription: "A dynamic app for categorizing and managing expenses",
    longDescription: `A comprehensive expense tracker application built with Flutter and Dart, designed for efficient financial management. 
                     The app allows users to input and categorize expenses seamlessly while providing insightful graphical and tabular representations. 
                     Features include expense deletion functionality for greater user control.`,
    thumbnail: "/projects/expense-tracker/1.jpg",
    images: [
      "/projects/expense-tracker/1.jpg",
      "/projects/expense-tracker/2.jpg",
    ],
    category: "mobile",
    featured: false,
    tech: ["Flutter", "Dart"],
    links: {
      live: "https://expense-tracker-app.com",
      
    },
    highlights: [
      "Developed with intuitive categorization and input features",
      "Provided graphical and tabular expense insights for users",
      "Implemented expense deletion for efficient management",
      "Optimized for smooth performance across devices"
    ],
    testimonial: {
      text: "This app has revolutionized the way I manage my finances. Simple, efficient, and insightful!",
      author: "Sarah Ali",
      position: "Finance Enthusiast"
    }
  },
  {
    id: 7,
    title: "Flutter Meals App",
    shortDescription: "A cross-platform app to explore, filter, and save meals",
    longDescription: `A feature-rich mobile application built with Flutter and Dart, designed to help users discover a variety of meals. 
                     The app includes sorting by meal type, saving favorites, and filtering meals based on user preferences. 
                     Demonstrates expertise in smart state management with Flutter Riverpod for seamless functionality.`,
    thumbnail: "/projects/meals-app/1.jpg",
    images: [
      "/projects/meals-app/1.jpg",
      "/projects/meals-app/2.jpg",
      "/projects/meals-app/3.jpg",
      "/projects/meals-app/4.jpg",
      "/projects/meals-app/5.jpg",
      "/projects/meals-app/6.jpg"
    ],
    category: "mobile",
    featured: true,
    tech: ["Flutter", "Dart", "Riverpod"],
    links: {
      live: "https://flutter-meals-app.com",
      
    },
    highlights: [
      "Developed cross-platform compatibility for iOS and Android",
      "Implemented meal sorting by type for intuitive navigation",
      "Added functionality to save favorites and filter meals",
      "Leveraged Riverpod for efficient state management"
    ],
    testimonial: {
      text: "A perfect app for food enthusiasts to explore and save their favorite meals!",
      author: "Fatima Tariq",
      position: "Food Blogger"
    }
  },
  {
    id: 4,
    title: "CubeSat Mission PK Trailblazer APSCO",
    shortDescription: "Monitoring glaciers and predicting disasters in mountain ranges",
    longDescription: `Worked on the engineering model of a 3U CubeSat mission under APSCO. The mission aims to monitor glaciers 
                      and predict disasters in the Karakoram, Himalaya, and Hindu Kush ranges by tracking glacier dynamics, ice melt, 
                      and glacial lake formations at the height of 500km.`,
    thumbnail: "/projects/cubesat/1.png",
    images: [
      "/projects/cubesat/1.png"
    ],
    category: "research",
    featured: false,
    tech: ["Satellite Engineering", "APSCO"],
    links: {},
    highlights: [
      "Designed for monitoring glacier dynamics and ice melt",
      "Focused on disaster prediction for mountain ranges",
      "Collaborated on engineering models of the satellite",
    ],
    testimonial: null,
  },
  {
    id: 5,
    title: "Virtual Try-on Cart (AI/ML)",
    shortDescription: "E-commerce platform with virtual try-on and size recommendation feature",
    longDescription: `Developed an e-commerce store enabling users to virtually try dresses by uploading images. 
                      Features include size recommendations, image search, and advanced virtual try-on capabilities 
                      using computer vision models.`,
    thumbnail: "/projects/tryoncart/1.png",
    images: [
      "/projects/tryoncart/1.png",
      "/projects/tryoncart/2.png",
      "/projects/tryoncart/3.png",
      "/projects/tryoncart/4.png",
    ],
    category: "web",
    featured: false,
    tech: ["Next.js", "Node.js", "MongoDB", "HR VITON", "AI/ML"],
    links: {},
    highlights: [
      "Implemented virtual try-on with advanced models",
      "Achieved 85% expected accuracy in size estimation",
      "Enhanced shopping experience with image search functionality",
    ],
    testimonial: null,
  },
  {
    id: 1,
    title: "Internship Management System",
    shortDescription: "Streamlined management system for internships",
    longDescription: `Developed an Internship Management System for InoTech Solutions using PHP and MySQL. 
                      The system enables interns to check their application status, assigned department, and advisor. 
                      HR can manage applications, assign departments, and handle approvals or rejections.`,
    thumbnail: "/projects/internship/1.png",
    images: [],
    category: "web",
    featured: false,
    tech: ["PHP", "MySQL"],
    links: {
      live: "https://ims.inotechsoln.com/index.php",
    },
    highlights: [
      "Handled over 150 intern applications",
      "Reduced manual processing time by 40%",
      "Enabled streamlined management for HR and interns",
    ],
    testimonial: null,
  },
  {
    id: 3,
    title: "Fitness Management System",
    shortDescription: "Comprehensive fitness app with real-time features",
    longDescription: `Developed a Fitness Management System using React, Node.js, and Express.js. The app includes user cart management, 
                      seamless browsing, and Firebase integration for real-time data, managing 200+ daily transactions.`,
    thumbnail: "/projects/fitness-management/thumbnail.jpg",
    images: [],
    category: "web",
    featured: false,
    tech: ["React", "Node.js", "Firebase"],
    links: {},
    highlights: [
      "Developed checkout process and cart management",
      "Integrated real-time data with Firebase",
      "Streamlined user experience for fitness enthusiasts",
    ],
    testimonial: null,
  },
  {
    id: 2,
    title: "Face Recognition App (AI/ML)",
    shortDescription: "Facial analysis app for security and authentication",
    longDescription: `Built a face recognition app utilizing the Clarifai API for precise facial analysis in security and authentication. 
                      Enhanced machine learning accuracy to 95% across applications.`,
    thumbnail: "/projects/face/1.png",
    images: [],
    category: "mobile",
    featured: false,
    tech: ["Clarifai API", "Machine Learning"],
    links: {
      github: "https://github.com/MMuzammalAbbas/RoboFriends",
    },
    highlights: [
      "Integrated facial analysis for security purposes",
      "Enhanced ML accuracy to 95%",
      "Provided seamless user authentication features",
    ],
    testimonial: null,
  },
  {
    id: 6,
    title: "Food Ordering App",
    shortDescription: "Robust app for food ordering and real-time tracking",
    longDescription: `Developed a food ordering app including live order status, a robust checkout method, and categorized menu systems. 
                      Designed admin and customer interfaces with login authentication using Auth0.`,
    thumbnail: "/projects/food-ordering/hero.png",
    images: [
      "/projects/food-ordering/hero.png",
      "/projects/food-ordering/landing.png"
    ],
    category: "web",
    featured: false,
    tech: ["Vite", "Node.js", "Auth0", "React"],
    links: {
      github: "https://github.com/MMuzammalAbbas/food-order-web",
    },
    highlights: [
      "Developed live order tracking features",
      "Designed user-friendly admin and customer interfaces",
      "Streamlined checkout with advanced authentication",
    ],
    testimonial: null,
  },
  {
    id: 7,
    title: "MNIP Law Firm Consultancy Platform",
    shortDescription: "Comprehensive platform for legal consultancy and case management",
    longDescription: `Developed a robust consultancy platform for MNIP Law Firm to streamline client interactions, case management, and legal service delivery. 
                      The platform facilitates seamless communication between clients and legal experts, offering features such as appointment scheduling, case tracking, 
                      and a secure document upload system. Built with React, Tailwind CSS, Node.js, and Express.js, ensuring a responsive and scalable solution.`,
    thumbnail: "/projects/law/1.png",
    images: [
      "/projects/law/1.png",
      "/projects/law/2.png",
      "/projects/law/3.png",
      "/projects/law/4.png",
      "/projects/law/5.png",
    ],
    category: "web",
    featured: true,
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js"],
    links: {
      live: "https://mnip-lawfirm.com",
      github: "https://github.com/username/mnip-law-firm",
    },
    highlights: [
      "Developed a secure appointment scheduling and case tracking system",
      "Integrated secure document upload for confidential legal files",
      "Implemented user-friendly client and admin interfaces",
      "Optimized platform performance for scalability and reliability",
    ],
    testimonial: {
      text: "The MNIP platform has transformed our consultancy operations, providing a seamless experience for both clients and our team.",
      author: "Hamza Malik",
      position: "Managing Partner, MNIP Law Firm",
    },
  }
  
  
];
