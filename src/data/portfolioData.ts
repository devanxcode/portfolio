import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Devanand M",
    handle: "devanxcode",
    role: "Aspiring Software Developer",
    location: "India",
    headline: "Aspiring software developer learning the MERN stack and building in public.",
    subheadline: "Grounding my skills in HTML, CSS, JavaScript, and Bootstrap, while actively learning React and Node.js.",
    statusText: "Learning MERN & building projects",
  },
  about: {
    paragraphs: [
      "I am a student and an aspiring software developer based in India. My journey started with the core building blocks of the web — mastering HTML, CSS, Bootstrap, and foundational JavaScript to build clean, responsive pages.",
      "Right now, I am actively expanding my skillset into full-stack development with the MERN stack (MongoDB, Express, React, and Node.js), along with practicing Python for logical problem solving.",
      "I believe in honest progress and learning in public — writing code consistently, understanding fundamentals thoroughly, and sharing my development milestones as I build real applications."
    ],
    coreValues: [
      {
        title: "Developer First",
        desc: "Programming is my primary focus and daily commitment to growing as an engineer."
      },
      {
        title: "Learning in Public",
        desc: "Sharing real progress and genuine milestones with no exaggerated claims."
      },
      {
        title: "Solid Foundations",
        desc: "Building strong fundamentals in HTML, CSS, and JS before diving into complex tools."
      }
    ]
  },
  skills: [
    {
      category: "Frontend",
      description: "Core markup, responsive styling frameworks, and modern interactive libraries.",
      skills: [
        { name: "HTML5", isLearning: false, note: "Semantic structure & accessibility" },
        { name: "CSS3", isLearning: false, note: "Flexbox, Grid & responsive design" },
        { name: "Bootstrap", isLearning: false, note: "Responsive grid & component design" },
        { name: "JavaScript", isLearning: false, note: "DOM, ES6+ & core programming" },
        { name: "React", isLearning: true, note: "Components, hooks & state" },
        { name: "Tailwind CSS", isLearning: true, note: "Utility-first styling" },
      ]
    },
    {
      category: "Backend",
      description: "Server-side runtimes and REST API routing logic.",
      skills: [
        { name: "Node.js", isLearning: true, note: "Backend runtime environment" },
        { name: "Express", isLearning: true, note: "Server routes & REST middleware" },
      ]
    },
    {
      category: "Database",
      description: "Database storage and schema management for web applications.",
      skills: [
        { name: "MongoDB", isLearning: true, note: "Document-based NoSQL database" },
      ]
    },
    {
      category: "Languages",
      description: "Programming languages used across client, server, and problem solving.",
      skills: [
        { name: "JavaScript", isLearning: false, note: "Client-side scripting & DOM logic" },
        { name: "Python", isLearning: true, note: "Problem solving & logic scripting" },
      ]
    }
  ],
  roadmap: {
    intro: "My learning roadmap from web foundations to full-stack engineering.",
    steps: [
      {
        step: 1,
        title: "HTML5, CSS3 & Bootstrap",
        tech: "HTML5, CSS3, Bootstrap 5",
        status: "completed",
        description: "Learned semantic document layout, CSS styling, flexbox/grid, and building responsive user interfaces using Bootstrap."
      },
      {
        step: 2,
        title: "JavaScript Fundamentals",
        tech: "JavaScript, ES6+, DOM Manipulation",
        status: "completed",
        description: "Practiced core programming logic, variables, loops, functions, array methods, and manipulating the Document Object Model (DOM)."
      },
      {
        step: 3,
        title: "Modern React Development",
        tech: "React, JSX, Component Architecture",
        status: "in-progress",
        description: "Currently learning component lifecycle, hooks (useState, useEffect), props, and creating interactive user interfaces."
      },
      {
        step: 4,
        title: "Backend with Node.js & Express",
        tech: "Node.js, Express, REST APIs",
        status: "in-progress",
        description: "Learning server setup, routing, request/response cycles, and building RESTful APIs to communicate with frontend clients."
      },
      {
        step: 5,
        title: "MongoDB & Full MERN Stack Apps",
        tech: "MongoDB, Full-Stack Integration",
        status: "planned",
        description: "Connecting database schemas with backend endpoints and React frontend into cohesive, deployed full-stack applications."
      }
    ],
    footerNote: "Active projects are currently in development and will be added here as they are completed."
  },
  /**
   * Projects list: Add your projects here when ready!
   * Example format:
   * {
   *   id: 'project-1',
   *   title: 'E-Commerce Store',
   *   description: 'Full-stack MERN application with cart, checkout, and auth.',
   *   tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
   *   githubUrl: 'https://github.com/devanxcode/repo-name',
   *   liveUrl: 'https://demo.vercel.app',
   *   status: 'completed',
   *   date: '2026'
   * }
   */
  projects: [
    {
      id: 'position-size-calculator',
      title: 'Position Size & Lot Calculator',
      description: 'A fast, distraction-free position size and lot calculator for traders. Calculates exact standard lots, risk capital, and pip values across Forex pairs and Gold with zero ads.',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'Risk Management'],
      githubUrl: 'https://github.com/devanxcode/Position-Size-Calculator',
      liveUrl: 'https://position-size-calculator-sigma.vercel.app',
      status: 'completed',
      date: '2026'
    }
  ],
  trading: {
    title: "Funded Trader • Malaysian SnR",
    badge: "Discretionary Trader",
    intro: "Outside of writing software, I trade evaluated capital with Funded Hive. I am purely a manual, discretionary price action trader specializing in Malaysian Support & Resistance (SnR) — zero automated bots or lagging indicators.",
    style: "Manual Discretionary Price Action",
    strategy: {
      name: "Malaysian SnR",
      type: "Horizontal Support & Resistance • Naked Price Action",
      description: "A disciplined, pure price action methodology focusing on key horizontal levels, structural retests (SBR & RBS), and multi-timeframe confirmation to execute high-probability, low-risk entries.",
      keyConcepts: [
        {
          label: "Horizontal SBR & RBS",
          detail: "Support Becomes Resistance (SBR) for short setups, and Resistance Becomes Support (RBS) for long setups at fresh key price barriers."
        },
        {
          label: "Multi-Timeframe Structure",
          detail: "Using High Timeframes (Daily, H4) to mark major structural zones and trends, paired with Lower Timeframes (H1, M15) for precise trigger confirmations."
        },
        {
          label: "Naked Price Action",
          detail: "Zero lagging indicators (no RSI, MACD, or moving averages). Decisions are based 100% on candlestick behavior, market structure, and fresh reaction levels."
        },
        {
          label: "Strict Invalidation & Position Sizing",
          detail: "Clear structural invalidation levels. Exact lot sizes and stop-loss distances are pre-calculated to never exceed 0.5%–1% capital risk."
        }
      ]
    },
    propFirm: {
      name: "Funded Hive",
      logoUrl: "https://funded.tradinghive.com/static/assets/media/logos/logo-new.svg?t=1789789759",
      inviteUrl: "https://funded.tradinghive.com/registration?invite=0qcC05rC1mfRuuIHMm3L35MJ2xLelLCDUOpzhzz8pAg&utm_source=invite&utm_medium=user_share&utm_campaign=user_invite",
      badge: "Prop Trading Firm",
      description: "Trading evaluated firm capital under strict daily drawdown rules, requiring disciplined execution and absolute risk management."
    },
    keyTakeaways: [
      {
        title: "Discretionary Execution",
        desc: "Trading manually based on verified chart patterns and human discipline rather than automated black-box algorithms."
      },
      {
        title: "Rigid Risk Architecture",
        desc: "Strict adherence to maximum drawdown parameters, capital preservation, and exact lot sizing."
      },
      {
        title: "Selective Patience",
        desc: "Waiting hours or days for clean Malaysian SnR key levels to form rather than forcing low-probability setups out of boredom."
      }
    ],
    disclaimer: "For personal interest sharing only; not financial advice, trade recommendations, or an investment solicitation. Capital is at risk."
  },
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/devanxcode",
      username: "devanxcode",
      iconName: "github",
      description: "Explore my code repositories, daily practice commits, and project work."
    },
    {
      label: "Email",
      url: "mailto:dexanxcode@gmail.com",
      username: "dexanxcode@gmail.com",
      iconName: "mail",
      description: "Direct channel for collaborations, opportunities, or questions."
    },
    {
      label: "Instagram",
      url: "https://instagram.com/devanxnd.fx",
      username: "@devanxnd.fx",
      iconName: "instagram",
      description: "Personal updates, student life, and day-to-day journey."
    }
  ],
  footer: {
    builtWith: "Built with React, TypeScript & Tailwind CSS",
    copyrightYear: new Date().getFullYear(),
  }
};
