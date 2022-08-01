const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Samuel Bowale | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Samuel Bowale",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Samuel Bowale",
  logo_name: "Samuel Bowale",
  resumeLink: "assets/samuel_bowale_cv.html",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/bowalesamuel",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/rohankokkula01",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/rohan0301",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@rohankokkula",
    // },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/samuel-bowale-8a7382178/",
    },
    {
      siteName: "Medium",
      iconifyClassname: "simple-icons:medium",
      style: {
        color: "#fff",
      },
      profileLink: "https://medium.com/@bowalesamuel10",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos-aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "cib:redux",
          style: {
            color: "#764abc",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interfaces for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //     "⚡ Applying latest Design principles and experienced in product wireframing",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Photoshop",
    //       fontAwesomeClassname: "simple-icons:adobephotoshop",
    //       style: {
    //         color: "#2fa3f7",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/rohankokkula/TEATH",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "project-02.png",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Analyst",
        subtitle: "Block Hash Labs, Abuja",
        date: "December 2021 - present",
        content: [
          "Expanded and modified systems to strengthen workflow.",
          "Adept knowledge of the artificial intelligence field.",
          "Developed sophisticated machine learning models around audience modeling, behavior analysis, and optimization models.",
          "Worked alongside team members and leaders to identify analytical requirements and collect information tomeet customer and project demands.",
          "Managed lifecycle elements of ETL development, from robust testing to final deployment.",
          "Constructed deep learning models and scalable machine learning systems. ",
          "Gathered web information usingsocial media sources.",
        ],
      },
      {
        title: "Frontend Developer",
        subtitle: "Gallery of code, Abuja",
        date: "Aug 2020 - Dec 2021",
        content: [
          "Implementing web design and development principles to build stable software.",
          "Bringing mock-ups to life using HTML, CSS, and JavaScript.",
          "Collaborating closely with the team to support projects during all phases of delivery.",
          "Building websites and apps that are responsive and usable. Communicating technical issues in anunderstandable manner to the team and clients.",
          "Identifying innovative ideas and proof of concepts according to project requirements.",
          "Providing guidance and troubleshooting support to clients.",
          "Maintaining an organized workflow using a project management tool (like GitHub).",
          "Testing to identify bugs and technical issues before and after deploying. Document bug reports, tickets, andany code changes",
        ],
      },
      {
        title: "Data Analyst",
        subtitle: "Seismium LLC, Maryland, USA",
        date: "Dec 2019 - Oct 2021",
        content: [
          "Built data models and maps to generate meaningful insights from customer data, boosting successful salesefforts",
          "Generated reports detailing findings and recommendations",
          "Designed and developed schema data models",
        ],
      },
      // {
      //   title: "Summer Analytics Participant",
      //   subtitle: "IIT Guwahati",
      //   date: "April 2020 - June 2020",
      //   content: [
      //     "Learnt & applied various Machine Learning libraries",
      //     "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
      //     "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
      //     "Ranked 85 out of 1500+ students for overall performance.",
      //   ],
      // },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "B.Eng in Electrical Engineering",
          subtitle: "Landmark University, Omu-aran",
          date: "2013 - 2018",
          content: ["CGPA: 4.11/5.00"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        // {
        //   title: "Ranks",
        //   content: [
        //     "#135/854 in Summer Analytics Kaggle Competition by IITG",
        //     "#113/5064 in CV-NLP Hackathon by HackerEarth",
        //   ],
        // },
        // {
        //   title: "Achievements",
        //   content: [
        //     "Designing Team Head at ACM-VIT",
        //     "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
        //     "Tableau Analyst & Consumer Badge by Tableau Official",
        //   ],
        // },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Pump fault prediction",
          subtitle: "Machine learning",
          content: [
            "Data agggregation of lots of datasets",
            "Used SVM, Random forest, Decision Trees",
            "Time series analysis of the data to identify seasonal faults",
            "Evaluation of models to identify the best",
          ],
        },
        {
          title: "Electrical power consumption forecasting",
          subtitle: "Machine learning",
          content: [
            "Data agggregation of lots of datasets",
            "Used fbprophet, xgboost, ARIMA",
            "Time series analysis of the data",
            "Evaluation of models to identify the best",
          ],
        },
        {
          title: "Web scraping",
          subtitle: "web scraping for SEISMIUM LLC",
          content: [
            "Scraped redfin.com",
            "Scraped real estate data",
            "cleaned the data to export a clean dataset",
          ],
        },
        {
          title: "Mobile Application development",
          subtitle: "KeyedIn",
          content: ["Created the artisan side of the Keyedin apps"],
        },
        {
          title: "Astro Africa Website",
          subtitle: "astroafrica.site",
          content: [
            "Built a UI interface for the company",
            "Handled user and admin websites",
            "connected them to the backend",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    // {
    //   title: "Tableau Analyst",
    //   subtitle: "Tableau",
    //   logo_path: "tabana-01.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
    //   alt_name: "Tableau",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Consumer",
    //   subtitle: "Tableau",
    //   logo_path: "tabcon-01.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
    //   alt_name: "Tableau",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Problem solving",
    //   subtitle: "HackerRank",
    //   logo_path: "problem-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Python",
    //   subtitle: "HackerRank",
    //   logo_path: "python-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Certificate of Merit",
    //   subtitle: "Summer Analytics | IIT Guwahati",
    //   logo_path: "iitg-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "IITG",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Desktop Qualified Associate",
    //   subtitle: "SimpliLearn",
    //   logo_path: "simplilearn-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Simplilearn",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Question Generation using Transformers",
    //   subtitle: "Udemy",
    //   logo_path: "udemy-01.png",
    //   certificate_link:
    //     "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
    //   alt_name: "Udemy",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "Stanford University",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Visualization",
    //   subtitle: "University of Michigan",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "University of Michigan",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Scientist Career Track",
    //   subtitle: "DataCamp",
    //   logo_path: "datacamp-01.png",
    //   certificate_link:
    //     "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
    //   alt_name: "DataCamp",
    //   color_code: "#000000",
    // },
    // {
    //   title: "PowerBI Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "You can message me, I will reply within 24 hours. I can help you with ML, AI, ReactJS, Selenium, QA and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Abuja, FCT, Nigeria. 900108",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234 8038324766",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/bowalesamuel",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/samuel-bowale-8a7382178/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/rohanalytics",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:bowalesamuel10@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/deybea/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
