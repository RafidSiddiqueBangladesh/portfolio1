import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    nodejs,
    git,
    docker,
    threejs,
    ydb,
    fusion,
    sql,
    cpp,
    python,
    java,
    aws,
    csharp,
    dotnet,
    tripta
} from "../assets";

// Import achievement images
import achievement101 from "../assets/allpics/achievements/101.png";
import achievement102 from "../assets/allpics/achievements/102.png";
import achievement103 from "../assets/allpics/achievements/103.png";
import achievement104 from "../assets/allpics/achievements/104.jpg";
import achievement105 from "../assets/allpics/achievements/105.png";
import achievement106 from "../assets/allpics/achievements/106.png";
import achievement107 from "../assets/allpics/achievements/107.png";
import achievement108 from "../assets/allpics/achievements/108.png";
import achievement109 from "../assets/allpics/achievements/109.png";
import achievement110 from "../assets/allpics/achievements/110.png";

// Import project images
import project1 from "../assets/allpics/projects/1.png";
import project2 from "../assets/allpics/projects/2.png";
import project3 from "../assets/allpics/projects/3.png";
import project4 from "../assets/allpics/projects/4.png";
import project5 from "../assets/allpics/projects/5.png";
import project6 from "../assets/allpics/projects/6.png";
import project7 from "../assets/allpics/projects/7.png";
import project8 from "../assets/allpics/projects/8.png";
import project9 from "../assets/allpics/projects/9.png";
import project10 from "../assets/allpics/projects/10.png";
import project11 from "../assets/allpics/projects/11.png";
import project12 from "../assets/allpics/projects/12.png";
import project13 from "../assets/allpics/projects/13.png";
import project14 from "../assets/allpics/projects/14.png";
import project15 from "../assets/allpics/projects/15.png";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "awards",
        title: "Awards",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [

    {
        title: "Facebook",
        icon: mobile,
        source_code_link: "https://www.facebook.com/rafidsisddique",
    },
    {
        title: "GitHub",
        icon: mobile,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh",

    },
    {
        title: "LinkedIn",
        icon: backend,
        source_code_link: "https://www.linkedin.com/in/rafid-siddique-3131b9216/",
    },
    {
        title: "Resume",
        icon: creator,
        source_code_link: "https://drive.google.com/file/d/1XAiESDMxIwUHD4DedwRGOOYapJS9DbVG/view?usp=sharing",
    },
];

const technologies = [
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Dot Net",
        icon: dotnet,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "docker",
        icon: docker,
    },

];

const experiences = [
    {
        title: "Full Stack Developer (App & Web)",
        company_name: "AleehaTech",
        icon: tripta,
        iconBg: "#383E56",
        date: "Nov 2025 - Present",
        points: [
            "Worked on multiple full-stack software projects, including a React Native mobile application.",
            "Refactored state management from Redux Thunk to Redux Toolkit for better structure and performance.",
            "Collaborated closely with backend teams to integrate APIs and improve data flow.",
            "Worked with AWS services for deployment, backend integration, and infrastructure support.",
            "Restructured codebase to improve scalability, flexibility, and maintainability.",
            "Assisted in transitioning parts of the system toward a microservices-oriented architecture.",
            "Gained industry-level coding practices and system design experience under senior mentorship.",
        ],
    },
    {
        title: "Business Development Manager",
        company_name: "TriMindis",
        icon: ydb,
        iconBg: "#E6DEDD",
        date: "Jan 2025 - Present",
        points: [
            "Worked in a client-facing software services environment focused on B2B business development.",
            "Participated in telemarketing operations and learned high-conversion sales strategies.",
            "Analyzed conversion metrics across email marketing, ads, and telemarketing channels.",
            "Handled lead generation, email collection, client qualification, and meeting coordination.",
            "Used CRM and sales-support tools for client tracking and engagement.",
            "Gained practical exposure to product-market fit and customer requirement analysis.",
            "Learned pricing strategies and client handling practices in the Bangladeshi software market.",
        ],
    },
    {
        title: "Sales and Marketing Specialist",
        company_name: "Trimindias",
        icon: fusion,
        iconBg: "#FFFFFF",
        date: "Dec 2024 - Present",
        points: [
            "Worked at an early-stage, Grameen Accelerator–selected mental health startup.",
            "Planned and executed digital advertising and growth campaigns.",
            "Managed marketing operations and supported early-stage HR coordination.",
            "Implemented and monitored Google Analytics for user and campaign tracking.",
            "Worked on SEO and digital marketing strategies to improve online visibility.",
            "Supported outreach, partnerships, and go-to-market execution.",
            "Gained startup operations and leadership insights under direct mentorship.",
        ],
    },
    {
        title: "Freelance Digital Consultant",
        company_name: "Independent / Freelance",
        icon: creator,
        iconBg: "#383E56",
        date: "Jan 2020 - Present",
        points: [
            "Designed and deployed responsive websites for small businesses and individuals.",
            "Worked with CMS-based and custom web development solutions.",
            "Performed on-page SEO, keyword research, and basic technical SEO.",
            "Handled data entry, data cleanup, and structured spreadsheet management.",
            "Created basic to intermediate graphic designs for social media and branding.",
            "Delivered services via Fiverr, Upwork, and direct client engagements.",
            "Managed pricing, timelines, and client expectations across local and international projects.",
        ],
    },
    {
        title: "AI Data Contributor (Bangla Language)",
        company_name: "Outlier",
        icon: backend,
        iconBg: "#E6DEDD",
        date: "Apr 2025 - Oct 2025",
        points: [
            "Converted Bangla content into structured, high-quality datasets for AI training.",
            "Performed data entry, annotation, and validation to improve model accuracy.",
            "Standardized Bangla expressions and corrected grammatical inconsistencies.",
            "Reduced linguistic ambiguity for better AI language understanding.",
            "Ensured dataset quality aligned with AI training and evaluation standards.",
            "Contributed to improving Bangla language coverage in large language models.",
        ],
    },
    {
        title: "Script Evaluator & Academic Content Contributor (HSC Science)",
        company_name: "Chorcha",
        icon: web,
        iconBg: "#FFFFFF",
        date: "Mar 2025 - Sep 2025",
        points: [
            "Evaluated academic scripts for HSC Higher Math, Physics, Chemistry, and Biology.",
            "Reviewed solutions to ensure correctness, clarity, and syllabus alignment.",
            "Assisted in structured academic content creation and problem explanation.",
            "Maintained high-quality standards for technology-driven education materials.",
            "Supported the platform's mission to deliver reliable and scalable learning content.",
        ],
    },
    {
        title: "Software Engineer – Secure Systems & Device Compliance",
        company_name: "Anondopath (আনন্দপাঠ)",
        icon: nodejs,
        iconBg: "#383E56",
        date: "Feb 2025 - Jun 2025",
        points: [
            "Designed a backend-driven one-device–one-app enforcement system for Android.",
            "Prevented app cloning, unauthorized installations, and multi-device misuse.",
            "Avoided kernel-level modifications to preserve OEM updates and security patches.",
            "Implemented secure device binding and authorization logic via backend APIs.",
            "Refactored backend code to improve security, scalability, and compliance.",
            "Evaluated and rejected costly MDM solutions in favor of a scalable custom system.",
            "Contributed to a startup that later won 1st place in a regional startup competition.",
        ],
    },
    {
        title: "Question–Answer Evaluation Associate (Science)",
        company_name: "UDVASH",
        icon: reactjs,
        iconBg: "#E6DEDD",
        date: "May 2024 - Oct 2024",
        points: [
            "Qualified through subject exams and structured training before onboarding.",
            "Worked in question–answer evaluation and academic assessment workflows.",
            "Reviewed student responses for accuracy and conceptual correctness.",
            "Supported exam-oriented content validation under competitive standards.",
            "Maintained consistency, fairness, and accuracy in high-pressure evaluation systems.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "Rajshahi University of Engineering & Technology",
        name: "Engineer's Degree (Computer Science & Engineering)",
        designation: "Apr 2024 - Present",
    },
    {
        testimonial: "Saint Joseph Higher Secondary School & College, Dhaka",
        name: "HSC (Science)",
        designation: "Mar 2022 - Jun 2023",
    },
    {
        testimonial: "BB Boys School",
        name: "SSC",
        designation: "2016 - 2021",
    },
];

const projects = [
    {
        name: "ShopMap",
        description:
            "Track, compare, and save on products across multiple websites with ease. Get notified of price drops and uncover the best deals effortlessly. Your go-to tool for smarter online shopping",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Node",
                color: "pink-text-gradient",
            },
        ],
        image: project1,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/shopnearme",
        live_link: "https://shopnearmenow.netlify.app",
    },
    {
        name: "Farm",
        description:
            "Track, compare, and save on products across multiple websites with ease. Get notified of price drops and uncover the best deals effortlessly. Your go-to tool for smarter online shopping.",
        tags: [
            {
                name: "Next",
                color: "blue-text-gradient",
            },
            {
                name: " Data Scraping",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/farm",
        live_link: "https://farmbd.netlify.app/",
    },
    {
        name: "Extention HUb",
        description:
            "Top 5 extensions that can change the world buit by me ",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Chrome extensions",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: project3,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/extentionbyme",
        live_link: "https://extentionbyrafidsiddiquenow.netlify.app/",
    },
    {
        name: "Edu AR",
        description:
            "Ar and Vr enabled lab",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "three js",
                color: "pink-text-gradient",
            },
        ],
        image: project4,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/eduAR",
        live_link: "https://eduversebd.netlify.app/",
    },
    {
        name: "Add making with ai ",
        description:
            "A comprehensive add making   application with real-time collaboration features,ai content generation. Organize projects, assign tasks, set deadlines, and track progress in one place.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: project5,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/ad",
        live_link: "https://bdad.netlify.app/",
    },
    {
        name: "Sunbway Surf",
        description:
            "A web based game for alternative subway surf.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "three js",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: project6,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/gametwo",
        live_link: "https://sunbwaysurf.netlify.app/",
    },
    {
        name: "SocialGame ",
        description:
            "A simple game that is played on bangladeshi and world context",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "three js",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: project7,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/BUETGAMEJAM",
        live_link: "https://webgamecontextbd.netlify.app/",
    },
    {
        name: "HealthTracker",
        description:
            "Personal health and fitness tracking application. Monitor workouts, nutrition, and health metrics with beautiful charts and personalized recommendations.",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "pink-text-gradient",
            },
        ],
        image: project8,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/healthproject",
        live_link: "https://drive.google.com/drive/folders/1c8FcR5qeYeixgetTCTB9dr8D1aRgGkJT",
    },
    {
        name: "Collaborate",
        description:
            "Real-time video message collaboration and many more features.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "WebSockets",
                color: "green-text-gradient",
            },
            {
                name: "Monaco Editor",
                color: "pink-text-gradient",
            },
        ],
        image: project9,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/comute",
        live_link: "https://communiation.netlify.app/",
    },
    {
        name: "DigiCraft",
        description:
            "Online solution for managing and seling digital products",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Stripe",
                color: "green-text-gradient",
            },
            {
                name: "AWS S3",
                color: "pink-text-gradient",
            },
        ],
        image: project10,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/digicraft",
        live_link: "https://digicraftai.netlify.app/",
    },
    {
        name: "democracy BD",
        description:
            "A civic tect project in  Norway hackathone",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "vite ",
                color: "green-text-gradient",
            },
            {
                name: "GraphQL",
                color: "pink-text-gradient",
            },
        ],
        image: project11,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/citizen-shield-final-push",
        live_link: "https://democracybd.netlify.app/",
    },
    {
        name: "Job Ai ",
        description:
            "From learning to job all by Ai ,a learning anf job platform.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Web Speech API",
                color: "green-text-gradient",
            },
            {
                name: "AI Integration",
                color: "pink-text-gradient",
            },
        ],
        image: project12,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/jobforall",
        live_link: "https://jobforallbd.netlify.app/",
    },
    {
        name: "Express js serever & frontend",
        description:
            "Asimple express js server and react frontend project",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "express.js",
                color: "green-text-gradient",
            },
            {
                name: "Node.js",
                color: "pink-text-gradient",
            },
        ],
        image: project13,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/express-frontend",
        live_link: "https://expressfrontend.netlify.app/",
    },
    {
        name: "Home ai",
        description:
            "AI-powered home automation application with smart lighting, security, and energy management.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "AI",
                color: "green-text-gradient",
            },
            {
                name: "automation",
                color: "pink-text-gradient",
            },
        ],
        image: project14,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/homeai",
        live_link: "https://homeaiautomation.netlify.app/",
    },
    {
        name: "Health",
        description:
            "Comprehensive health  planning application with itinerary builder, hotel bookings,and local recommendations powered by AI.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Google Maps",
                color: "green-text-gradient",
            },
            {
                name: "Health API",
                color: "pink-text-gradient",
            },
        ],
        image: project15,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/health",
        live_link: "https://healthrafid.netlify.app/",
    },
    {
        name: "Jwelry3d",
        description:
            "Jwelry selling e-comerce fronetend.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Google Maps",
                color: "green-text-gradient",
            },
            {
                name: "Three js",
                color: "pink-text-gradient",
            },
        ],
        image: project15,
        source_code_link: "https://github.com/RafidSiddiqueBangladesh/3d",
        live_link: "https://3drafid.netlify.app/",
    },
];

const awards = [
    {
        id: 1,
        title: "Hackthaone Winner",
        issuer: "Green University",
        date: "2025",
        description: "Recognized for outstanding contributions in full-stack development and innovative problem-solving in real-world applications.",
        tags: [
            {
                name: "Full Stack",
                color: "blue-text-gradient",
            },
            {
                name: "Innovation in agritech",
                color: "pink-text-gradient",
            },
        ],
        image: achievement101,
        live_link: "https://www.linkedin.com/posts/rafid-siddique-3131b9216_my-very-first-hackathon-in-my-very-first-activity-7377780541582090240-Qkys?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ9pX8Br7vFuEJfQ-_9qlNwBw1IaXg1Er0",
    },
    {
        id: 2,
        title: "Hackathon Winner",
        issuer: "InnovateX",
        date: "2025",
        description: "Won fourth place for developing an innovative web application that solved real-world problems with cutting-edge technology.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Problem Solving",
                color: "green-text-gradient",
            },
        ],
        image: achievement102,
        live_link: "https://www.linkedin.com/posts/rafid-siddique-3131b9216_innovatex2025-hackathonjourney-ai-activity-7410340695250546688-e3Fz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ9pX8Br7vFuEJfQ-_9qlNwBw1IaXg1Er0",
    },
    {
        id: 3,
        title: "Excellence in Web Development",
        issuer: "Your Digital Buddies",
        date: "2025",
        description: "Awarded for exceptional performance and 40% improvement in mobile responsiveness across projects.",
        tags: [
            {
                name: "Responsive Design",
                color: "green-text-gradient",
            },
            {
                name: "Frontend",
                color: "pink-text-gradient",
            },
        ],
        image: achievement103,
        live_link: "https://www.linkedin.com/in/rafid-siddique-3131b9216/details/certifications/",
    },
    {
        id: 4,
        title: "Startup working Award",
        issuer: "Ar based stratup",
        date: "2025",
        description: "Recognized for writing clean, efficient code and maintaining best practices in software and kernal chaning and os development.",
        tags: [
            {
                name: "Code Quality",
                color: "blue-text-gradient",
            },
            {
                name: "Best Practices",
                color: "green-text-gradient",
            },
        ],
        image: achievement104,
        live_link: "https://www.linkedin.com/in/rafid-siddique-3131b9216/details/experience/",
    },
    {
        id: 5,
        title: "Innovation in client hunting and comunication",
        issuer: "Trimindis",
        date: "2025",
        description: "Awarded for client hunting and communication skills that led to acquiring 5 major clients, boosting company revenue by 25%.",
        tags: [
            {
                name: "telemarketing",
                color: "pink-text-gradient",
            },
            {
                name: "Optimization",
                color: "blue-text-gradient",
            },
        ],
        image: achievement105,
        live_link: "https://www.linkedin.com/in/rafid-siddique-3131b9216/details/experience/",
    },
    {
        id: 6,
        title: "datathone winner",
        issuer: "Cuet",
        date: "2025",
        description: "Our team fine tune a model make that mem undestanding and context of bd.",
        tags: [
            {
                name: "kaggle ",
                color: "green-text-gradient",
            },
            {
                name: "pytorch",
                color: "pink-text-gradient",
            },
        ],
        image: achievement106,
        live_link: "https://www.linkedin.com/posts/rafid-siddique-3131b9216_datathon-cuetcsefest2025-multimodalai-activity-7412080071513026561-n5hq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ9pX8Br7vFuEJfQ-_9qlNwBw1IaXg1Er0",
    },
    {
        id: 7,
        title: "daathone top 15",
        issuer: "North south university",
        date: "2025",
        description: "we were in top 15 .",
        tags: [
            {
                name: "keras",
                color: "blue-text-gradient",
            },
            {
                name: "CNN",
                color: "green-text-gradient",
            },
        ],
        image: achievement107,
        live_link: "https://www.linkedin.com/posts/rafid-siddique-3131b9216_datathon-csefest2025-datascience-activity-7411419118635085824-9XZb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ9pX8Br7vFuEJfQ-_9qlNwBw1IaXg1Er0",
    },
    {
        id: 8,
        title: "Technical Excellence",
        issuer: "Prime bank",
        date: "2025",
        description: "Recognized for mastering complex technical challenges and implementing scalable solutions.",
        tags: [
            {
                name: "performace",
                color: "pink-text-gradient",
            },
            {
                name: "Scalability",
                color: "blue-text-gradient",
            },
        ],
        image: achievement108,
        live_link: "https://www.linkedin.com/posts/rafid-siddique-3131b9216_i-recently-participated-in-the-event-engaging-activity-7395150991186227200-GQma?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ9pX8Br7vFuEJfQ-_9qlNwBw1IaXg1Er0",
    },
    {
        id: 9,
        title: "PCB Design certificate",
        issuer: "RUET robotics society",
        date: "2020",
        description: "certioficate for PCB design.",
        tags: [
            {
                name: "PCB design",
                color: "green-text-gradient",
            },
            {
                name: "EEE sensors",
                color: "pink-text-gradient",
            },
        ],
        image: achievement109,
        live_link: "https://www.linkedin.com/posts/rafid-siddique-3131b9216_i-am-really-excited-to-share-that-i-have-activity-7369619066946265089-gQBH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ9pX8Br7vFuEJfQ-_9qlNwBw1IaXg1Er0",
    },
    {
        id: 10,
        title: "solvio and dubai hackthaone participation",
        issuer: "Bd and Dubai univerrsity",
        date: "2025",
        description: "We were in top 50 in international hackathon where Havard MIT were winner.",
        tags: [
            {
                name: "Learning",
                color: "blue-text-gradient",
            },
            {
                name: "Growth",
                color: "green-text-gradient",
            },
        ],
        image: achievement110,
        live_link: "https://www.linkedin.com/posts/rafid-siddique-3131b9216_hackathonjourney-globalcompetition-ai-activity-7406052820841459712-f_wk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ9pX8Br7vFuEJfQ-_9qlNwBw1IaXg1Er0",
    },
];

export { services, technologies, experiences, testimonials, projects, awards };
