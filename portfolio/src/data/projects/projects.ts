export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  technologies: string[];
  images: string[];
  link?: string;
  sourceCodeLink?: string;
  date: Date;
}

export const defaultProjects: Project[] = [
  // Manual.to for Odoo
  {
    title: 'Endoo intership project',
    longDescription: 'Coming soon',
    description: 'Manual.to for Odoo',
    features: ['Coming soon'],
    challenges: ['Coming soon'],
    technologies: ['Odoo', 'Python'],
    images: [],
    date: new Date('2026-05-22'),
  },
  // Fashion Portfolio: Annelies Annys
  {
    title: 'Annelies Annys Portfolio',
    description: 'A fashion portfolio website for fashion student Annelies Annys.',
    longDescription: 'Coming soon - A sleek portfolio to showcase fashion designs and creative projects.',
    features: ['Coming soon'],
    challenges: ['Coming soon'],
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS'],
    images: [
      '/images/Projects/AnneliesPortfolio/portfolio01.webp',
      '/images/Projects/AnneliesPortfolio/portfolio02.webp',
    ],
    link: 'https://anneliesannys.com',
    sourceCodeLink: 'https://github.com/brentvervaet/anneliesannys-portfolio',
    date: new Date('2025-11-01'),
  },

  //TuneWithMe Web App
  {
    title: 'TuneWithMeTEST',
    description:
      'A tuner web application that allows users to tune their instruments and keep a library of their favorite tunings and instruments.',
    longDescription:
      'TuneWithMe is a full-stack web application developed for an exam, but greatly extended with additional features beyond the initial scope. It serves as an all-in-one tuning platform, offering musicians a convenient way to explore various instrument tunings, use a built-in tuner, and even customize tunings to their preferences. The platform bridges the gap between fragmented tuning information found online and a clean, centralized user experience.',
    features: [
      'Instrument & tuning library',
      'Built-in tuner',
      'Custom tuning support',
      'Search functionality',
      'Dark mode',
      'Spotify integration',
      'Authentication',
      'Admin panel',
    ],
    challenges: [
      'Integrating the Spotify API -> Learned authentication flows, handled token refresh, and parsed external data.',
      'Creating a REST API and connecting to MySQL -> Followed best practices and tutorials on structuring REST endpoints and database queries.',
      'Designing and styling the frontend (first full-stack app) -> Used Tailwind and explored UI libraries for React; iterated based on testing.',
      'Implementing user authentication and admin roles -> Applied sessions or token-based auth to secure the app.',
    ],
    technologies: ['React', 'JavaScript', 'Vite', 'REST', 'MySQL'],
    images: [
      '/images/Projects/TuneWithMe/TuneWithMe01.webp',
      '/images/Projects/TuneWithMe/TuneWithMe02.webp',
      '/images/Projects/TuneWithMe/TuneWithMe03.webp',
      '/images/Projects/TuneWithMe/TuneWithMe04.webp',
      '/images/Projects/TuneWithMe/TuneWithMe05.webp',
      '/images/Projects/TuneWithMe/TuneWithMe06.webp',
      '/images/Projects/TuneWithMe/TuneWithMe07.webp',
    ],
    sourceCodeLink: 'https://github.com/brentvervaet/TuneWithMe.git',
    date: new Date('2024-12-10'),
  },

  // iOS App - RealDealMeal
  {
    title: 'RealDealMeal',
    description:
      'RealDealMeal: Discover, explore, and save your favorite recipes with ease! Designed for Mobile Application Development: iOS evaluation.',
    longDescription:
      'RealDealMeal is an innovative iOS app that allows users to quickly and easily discover, view, and save recipes. The app provides daily recommendations, random recipes, categories, and favorites management. All data is fetched via TheMealDB API, and the app is built with SwiftUI using the MVVM architecture, fully responsive on both iPhone and iPad.\n' +
      '\n' +
      'This app was developed as part of my iOS evaluation, demonstrating best practices for Swift coding, state management, REST API integration, navigation, and data persistence.',
    features: [
      'Discover Recipes: Browse all meals alphabetically or filter by categories.',
      'Recommended & Random Recipes: Daily suggestions and a “Random Recipe” button for inspiration.',
      'Favorites: Add meals to favorites and store them locally using @AppStorage.',
      'Meal Details: View ingredients, instructions, and images for each recipe.',
      'Share Recipes: Easily share your favorite recipes via the built-in share functionality.',
      'Adaptive UI: Supports multiple device sizes and both portrait and landscape orientations.',
      'Search: Quickly find recipes using the search functionality.',
    ],
    challenges: [
      'Handling optionals and null values from the API (e.g., missing thumbnails or instructions).',
      'Implementing async/await for multiple API calls and combining random and category-based results.',
      'Resolving duplicate IDs in ForEach in SwiftUI lists (e.g., with random meals).',
      'Applying the MVVM architecture to keep UI, state, and data separated.',
      'Integrating favorites persistence while ensuring thumbnails display correctly.',
    ],
    technologies: ['Swift', 'SwiftUI', 'REST', 'MVVM'],
    images: [
      '/images/Projects/iOS-app/iOS01.webp',
      '/images/Projects/iOS-app/iOS02.webp',
      '/images/Projects/iOS-app/iOS03.webp',
      '/images/Projects/iOS-app/iOS04.webp',
      '/images/Projects/iOS-app/iOS05.webp',
      // '/images/Projects/iOS-app/iOS06.png',
      // '/images/Projects/iOS-app/iOS07.png',
    ],
    sourceCodeLink: 'https://github.com/brentvervaet/RealDealMeal.git',
    date: new Date('2025-08-28'),
  },

  //IT-conference App
  {
    title: 'IT-conference App',
    description:
      'A Spring Boot app to manage IT conference events, speakers, and rooms. Users can view and favorite events; admins manage the content.',
    longDescription:
      'This web application was developed for an Enterprise Web Development exam and simulates the functionality of an IT conference platform. It offers role-based access for guests, users, and admins to interact with conference events. While not deployed, the application runs locally and demonstrates full-stack Java web development skills using Spring Boot and Thymeleaf.',
    features: ['Guest view', 'Login functionality', 'User favorites', 'Admin panel', 'Personalized greeting'],
    challenges: [
      'Styling with Tailwind inside Thymeleaf templates → Learned how to combine utility-first styling with server-side template.',
      'First-time use of Thymeleaf, Spring Boot, and JPA → Followed course materials and created small exercises to understand the ecosystem.',
      'Setting up and connecting to a MySQL database → Practiced entity-relation mapping and REST setup with persistence logic.',
    ],
    technologies: ['Java', 'Spring', 'Thymeleaf', 'MySQL', 'JPA', 'Hibernate', 'REST'],
    images: [
      '/images/Projects/ItConferenceApp/ITCONF01.webp',
      '/images/Projects/ItConferenceApp/ITCONF02.webp',
      '/images/Projects/ItConferenceApp/ITCONF03.webp',
      '/images/Projects/ItConferenceApp/ITCONF04.webp',
      '/images/Projects/ItConferenceApp/ITCONF05.webp',
    ],
    sourceCodeLink: 'git@github.com:brentvervaet/IT-conference-app.git',
    date: new Date('2025-05-10'),
  },

  // Vue.js Web App - Gamified Dashboard
  {
    title: 'Gamified Dashboard',
    description:
      'Gamified Dashboard: A modern Vue.js application featuring user profiles, XP progression, and achievement tracking with smooth animations! Designed for StriveCloud technical test for a possible internship.',
    longDescription:
      'The Gamified Dashboard is an interactive Vue.js web application that demonstrates modern frontend development practices. The app features a comprehensive user dashboard with profile management, XP progression tracking, and achievement unlocking mechanics. Built with Vue 3 Composition API, TypeScript, and Pinia for state management, it showcases responsive design with Bootstrap 5 and smooth user interactions.\n' +
      '\n' +
      'This application was developed as part of a technical test for StriveCloud for a possible internship, demonstrating best practices for Vue.js development, TypeScript integration, state management patterns, component architecture, and modern frontend tooling with Vite.',
    features: [
      'User Profile Management: Display user information with avatar, name, level, and XP progression.',
      'Interactive XP System: Add XP functionality with smooth progress animations and level-up celebrations.',
      'Achievement Tracking: Grid display of achievements with locked/unlocked states and XP rewards.',
      'Loading States: Professional skeleton components and loading indicators for better UX.',
      'Error Handling: Robust error management with retry functionality and user-friendly messages.',
      'Responsive Design: Mobile-first Bootstrap 5 implementation supporting all device sizes.',
      'Real-time Updates: Instant UI updates when gaining XP or unlocking achievements.',
      'Modern Architecture: Component-based structure with proper separation of concerns.',
    ],
    challenges: [
      'Implementing proper TypeScript interfaces and maintaining type safety throughout the application.',
      'Creating smooth XP progression animations and level-up celebrations with confetti effects.',
      'Building reusable skeleton loading components that match the actual content structure.',
      'Managing complex state with Pinia including loading states, error handling, and data normalization.',
      'Implementing responsive design patterns that work seamlessly across mobile and desktop.',
      'Handling asynchronous operations with proper error boundaries and retry mechanisms.',
      'Creating a scalable component architecture with proper props and event handling.',
    ],
    technologies: ['Vue', 'TypeScript', 'Bootstrap'],
    images: [
      '/images/Projects/GamifiedDashboard/dashboard01.webp',
      '/images/Projects/GamifiedDashboard/dashboard02.webp',
      '/images/Projects/GamifiedDashboard/dashboard03.webp',
      '/images/Projects/GamifiedDashboard/dashboard04.webp',
      '/images/Projects/GamifiedDashboard/dashboard05.webp',
      '/images/Projects/GamifiedDashboard/dashboard06.webp',
      '/images/Projects/GamifiedDashboard/dashboard07.webp',
      '/images/Projects/GamifiedDashboard/dashboard08.webp',
    ],
    sourceCodeLink: 'https://github.com/brentvervaet/FE-test-application.git',
    date: new Date('2025-09-24'),
  },
];
