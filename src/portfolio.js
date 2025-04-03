/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 700 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Vishnu Raja",
  title: "Hi all, I'm Vishnu",
  subTitle: emoji(
    "NLP Research and Development 🤖 + Full Stack Developer 💻. I also like developing games 🎮, organizing events 🎉, playing music 🎵, reading books 📚 and sports 🏏🏸"
  ),
  resumeLink:
    "https://docs.google.com/document/d/185jl9C46xOZ3hTDH5XyVaLBbfQ0gdfhDFrdXN_bIiBw/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VishnuRaja98",
  linkedin: "https://www.linkedin.com/in/vishnu-raja-637ba8183/",
  gmail: "vishnu1234raja@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I can do",
  subTitle: "Can code well and turn ideas into reality",
  skills: [
    emoji(
      "⚡ Analyse datasets and create Machine Learning Pipelines"
    ),
    emoji("⚡ Fullstack Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Research Natural Language and develop related Applications "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AL/ML",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Research",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JS Frameworks",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL,NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Game Dev",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "DevOps",
      fontAwesomeClassname: "fab fa-docker"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/sbuLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "GPA 3.96 Working on a Thesis + 1 research paper for ACL",
      descBullets: [
        "Machine Learning, Computer Vision, Natural Language Processing, Reinforcement Learning, Distributed Systems, Computational Geometry, Hybrid Systems"
      ]
    },
    {
      schoolName: "Pune Institute of Computer Technology",
      logo: require("./assets/images/pictLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2016 - May 2020",
      desc: "Ranked top 10% in the program. GPA 8.76/10",
      descBullets: [" Data Structures and Algorithms, OOP, Computer Graphics, AI, High Performance Computing"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "99%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "80%"
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "90%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "70%"
    },
    {
      Stack: "Distributed Systems",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Team Lead",
      company: "Vaultize Systems",
      companylogo: require("./assets/images/vaultizeLogo.jfif"),
      date: "Sep 2022 – Jul 2023",
      desc: "Pune, India",
      descBullets: [
        "Led a team of 5 to implement changes to a Digital Rights Management Platform.",
        "Built a Natural Language Understanding (NLU) pipeline for semantic file search using descriptive prompts.",
        "Designed and developed a new File Organization system with advanced features for reducing file retrieval time."
      ]
    },
    {
      role: "Fullstack Dev, Data Scientist",
      company: "ElasticRun",
      companylogo: require("./assets/images/erLogo.png"),
      date: "Aug 2022 – Sep 2022",
      desc: "Pune, India",
      descBullets: [
        "Developed scalable backend systems (Python/Flask), frontend PWAs (Angular/Svelte), Docker and Kubernetes",
        "Built a customer Credit Score calculator and a product Recommendation Engine",
        "Automated reconciliation of 2,000+ transaction discrepancies and performed root cause analysis (RCA).",
        "Participated in the full SDLC including code review, source controls management on GitLab, Unit and A/B testing.",
      ]
    },
    {
      role: "Paid Teaching Assistant",
      company: "Stony Brook Univeristy",
      companylogo: require("./assets/images/sbuLogo.png"),
      date: "Sep 2024 – Dec 2024",
      desc: "Stony Brook, NY",
      descBullets: [
        "Assisted in teaching and grading for a graduate-level course on computational geometry, covering topics such as convex hulls and Voronoi diagrams while helping students implement algorithms using Python and C++.",
      ]
    },
    {
      role: "Game Engineer Intern",
      company: "TopGolf",
      companylogo: require("./assets/images/topgolfLogo.png"),
      date: "Jun 2024 – Aug 2024",
      desc: "San Francisco, CA",
      descBullets: [
        "Designed and developed a VueJS admin page to configure branding for the WGT TopGolf Mobile game.",
        "Migrated 3 legacy admin pages from C# to VueJS, enhancing user experience while reducing page load time.",
        "Used Perforce for source control for Unity game files."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Ador Powertron",
      companylogo: require("./assets/images/adorLogo.jfif"),
      date: "Aug 2019 – Oct 2019",
      desc: "Pune, India",
      descBullets: [
        "Worked on a ‘Ador Harmony: Fixed Speed Enforcement’ project. As a part of it - I developed web application using .NET MVC and worked on the SDK of the camera used in the project.",
        "Created a portal to view and work on the captured images and data from a speed enforcement camera."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research",
  // subtitle: "",
  projects: [
    {
      image: require("./assets/images/methodology.png"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      // image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-9342289706",
  email_address: "vishnu1234raja@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
