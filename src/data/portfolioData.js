export const portfolioData = {
  personal: {
    name: "Alex Rivera",
    role: "Senior Software Engineer",
    location: "San Francisco, CA",
    email: "alex@rivera.dev",
    headlineTitle: "Hi, I'm Alex Rivera",
    headlineSubtitle: "Senior Software Engineer building scalable, elegant web experiences.",
    bio: "I design and engineer performant full-stack applications with a focus on clean architecture, thoughtful UX, and maintainable code. Over 8 years turning complex problems into simple, reliable products.",
    status: {
      isAvailable: true,
      text: "Available for new opportunities"
    },
    portraitUrl: "/hero-portrait.jpg",
    aboutPortraitUrl: "/about-portrait.jpg",
  },
  
  navigation: {
    links: [
      { id: "home", label: "Home", href: "#home" },
      { id: "about", label: "About", href: "#about" },
      { id: "projects", label: "Projects", href: "#projects" },
      { id: "skills", label: "Skills", href: "#skills" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    resumeUrl: "#resume",
  },

  about: {
    badge: "About Me",
    heading: "Building thoughtful software, one commit at a time.",
    intro: "I'm Alex, a software engineer with over 8 years of experience designing and shipping scalable web applications. My work sits at the intersection of clean architecture and delightful user experience, and I care deeply about writing maintainable code that teams can build on for years.",
    paragraphs: [
      {
        title: "Background & Education.",
        content: "I earned my B.S. in Computer Science from the University of California, Berkeley, where I first fell in love with distributed systems and human-centered design. Since then I've spent my career bridging the gap between robust backend engineering and polished frontends."
      },
      {
        title: "Career Journey.",
        content: "From an early startup engineer wearing many hats to leading platform teams at scale, my journey has been about growth, mentorship, and shipping products that matter. Today I focus on developer experience, performance, and building teams that ship with confidence."
      }
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "University of California, Berkeley",
        period: "2012 – 2016",
        icon: "graduation"
      },
      {
        degree: "AWS Certified Solutions Architect",
        institution: "Amazon Web Services",
        period: "2020",
        icon: "award"
      }
    ]
  },

  journey: {
    title: "My Journey",
    experiences: [
      {
        period: "2021 – Present",
        role: "Senior Software Engineer",
        company: "Stripe",
        description: "Leading a platform team building payment infrastructure serving millions of transactions daily."
      },
      {
        period: "2018 – 2021",
        role: "Full-Stack Engineer",
        company: "Airbnb",
        description: "Built host-facing tools and internal design systems used across dozens of product teams."
      },
      {
        period: "2016 – 2018",
        role: "Software Engineer",
        company: "Early-stage Startup",
        description: "Wore many hats shipping the first version of a SaaS product from zero to launch."
      }
    ],
    milestones: [
      {
        period: "2023",
        role: "Architecture Scaling",
        company: "Platform Scale",
        description: "Architected event-driven microservices processing 100M+ real-time events per day."
      },
      {
        period: "2021",
        role: "Design System Lead",
        company: "Core UI Kit",
        description: "Standardized 50+ reusable components across 12 product teams, cutting delivery time by 30%."
      },
      {
        period: "2019",
        role: "Open Source Creator",
        company: "Community",
        description: "Created developer tooling libraries with over 15k GitHub stars and 200k monthly downloads."
      }
    ]
  },

  stats: [
    {
      id: "projects",
      title: "40+ Projects",
      subtitle: "Delivered",
      type: "light",
      position: "top-right"
    },
    {
      id: "experience",
      title: "8+ Years",
      subtitle: "Experience",
      type: "dark",
      position: "bottom-left"
    }
  ],

  socials: [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: "github"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: "twitter"
    },
    {
      name: "Website",
      href: "https://alexrivera.dev",
      icon: "globe"
    }
  ],

  actions: {
    primary: {
      label: "View Projects",
      href: "#projects"
    },
    secondary: {
      label: "Contact Me",
      href: "#contact"
    }
  }
};
