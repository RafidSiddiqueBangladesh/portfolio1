export const translations = {
  en: {
    // Navbar
    navAbout: "About",
    navWork: "Work",
    navProjects: "Projects",
    navAwards: "Awards",
    navContact: "Contact",

    // Hero
    heroName: "Rafid",
    heroTitle: "Full Stack Developer",
    heroSubtitle: "I create beautiful, functional web applications",

    // About
    aboutSubtext: "Introduction",
    aboutHeading: "Overview.",
    aboutDescription: "Versatile Web Developer proficient in MERN stack, specializing in creating user-friendly web applications. Experienced in full stack development with a knack for enhancing mobile responsiveness. Excited to collaborate on impactful projects and contribute innovative solutions.",

    // Awards
    awardsSubtext: "Recognition",
    awardsHeading: "Awards & Achievements.",
    awardsDescription: "Throughout my career, I have been recognized for my contributions in web development, innovation, and technical excellence. These awards showcase my commitment to delivering quality solutions and continuous improvement in my craft.",

    // Work/Projects
    workSubtext: "My work",
    workHeading: "Projects.",
    workDescription: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",

    // Experience
    experienceSubtext: "What I have done so far",
    experienceHeading: "Work Experience.",

    // Contact
    contactHeading: "Get in touch.",
    contactSubheading: "Contact me",
    contactDescription: "I'm always open to new opportunities and collaborations. Feel free to reach out!",

    // Buttons
    viewCode: "View Code",
    viewLive: "View Live",
    sendMessage: "Send Message",
    theme: "Theme",
    language: "Language",
  },
  bn: {
    // Navbar
    navAbout: "পরিচয়",
    navWork: "কাজ",
    navProjects: "প্রকল্প",
    navAwards: "পুরস্কার",
    navContact: "যোগাযোগ",

    // Hero
    heroName: "রাফিদ",
    heroTitle: "ফুল স্ট্যাক ডেভেলপার",
    heroSubtitle: "আমি সুন্দর এবং কার্যকরী ওয়েব অ্যাপ্লিকেশন তৈরি করি",

    // About
    aboutSubtext: "পরিচয়",
    aboutHeading: "সংক্ষিপ্ত বর্ণনা।",
    aboutDescription: "বহুমুখী ওয়েব ডেভেলপার যিনি MERN স্ট্যাকে পারদর্শী এবং ব্যবহারকারী-বান্ধব ওয়েব অ্যাপ্লিকেশন তৈরিতে বিশেষজ্ঞ। সম্পূর্ণ স্ট্যাক উন্নয়নে অভিজ্ঞ এবং মোবাইল প্রতিক্রিয়াশীলতা উন্নত করতে দক্ষ। প্রভাবশালী প্রকল্পে সহযোগিতা এবং উদ্ভাবনী সমাধান অবদান রাখতে উৎসাহী।",

    // Awards
    awardsSubtext: "স্বীকৃতি",
    awardsHeading: "পুরস্কার এবং অর্জন।",
    awardsDescription: "আমার ক্যারিয়ার জুড়ে আমি ওয়েব উন্নয়ন, উদ্ভাবন এবং প্রযুক্তিগত উৎকর্ষতায় আমার অবদানের জন্য স্বীকৃত হয়েছি। এই পুরস্কারগুলি মানসম্পন্ন সমাধান সরবরাহ এবং আমার কাজে ক্রমাগত উন্নতির জন্য আমার প্রতিশ্রুতি প্রদর্শন করে।",

    // Work/Projects
    workSubtext: "আমার কাজ",
    workHeading: "প্রকল্প।",
    workDescription: "নিম্নলিখিত প্রকল্পগুলি আমার দক্ষতা এবং অভিজ্ঞতা প্রদর্শন করে। প্রতিটি প্রকল্প সংক্ষেপে বর্ণিত এবং কোড সংগ্রহস্থল ও লাইভ ডেমোতে লিঙ্ক রয়েছে। এটি জটিল সমস্যা সমাধান, বিভিন্ন প্রযুক্তির সাথে কাজ এবং প্রকল্প পরিচালনার ক্ষমতা প্রতিফলিত করে।",

    // Experience
    experienceSubtext: "আমি এ পর্যন্ত যা করেছি",
    experienceHeading: "কাজের অভিজ্ঞতা।",

    // Contact
    contactHeading: "যোগাযোগ করুন।",
    contactSubheading: "আমাকে যোগাযোগ করুন",
    contactDescription: "আমি সর্বদা নতুন সুযোগ এবং সহযোগিতার জন্য উন্মুক্ত। নির্দ্বিধায় আমাকে যোগাযোগ করুন!",

    // Buttons
    viewCode: "কোড দেখুন",
    viewLive: "লাইভ দেখুন",
    sendMessage: "বার্তা পাঠান",
    theme: "থিম",
    language: "ভাষা",
  },
};

export const getText = (key, language = 'en') => {
  return translations[language]?.[key] || translations.en[key];
};
