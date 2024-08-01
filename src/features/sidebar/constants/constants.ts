import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  explore,
  exploreFill,
  feedback,
  flag,
  flagFill,
  gaming,
  gamingFill,
  help,
  history,
  historyFill,
  home,
  homeFill,
  libFill,
  library,
  live,
  liveFill,
  settings,
  subscriptions,
  subscriptionsFill,
  thumbUp,
  thumbUpFill,
  watchLater,
  watchLaterFill,
  yourVideos,
  youtube,
  youtubeFill,
} from "@/assets";
import { SectionItemsProps, SidebarFooterProps, SidebarSectionProps } from "../types/types";

// SECTION 1

const section1: SidebarSectionProps = {
  items: [
    {
      text: "Home",
      icon: [home, homeFill],
      default: true,
    },
    {
      text: "Explore",
      icon: [explore, exploreFill],
    },
    {
      text: "Subscriptions",
      icon: [subscriptions, subscriptionsFill],
    },
  ],
};

// SECTION 2

const section2: SidebarSectionProps = {
  items: [
    {
      text: "Library",
      icon: [library, libFill],
    },
    {
      text: "History",
      icon: [history, historyFill],
    },
    {
      text: "Videos",
      icon: [yourVideos],
    },
    {
      text: "Watch Later",
      icon: [watchLater, watchLaterFill],
    },
    {
      text: "Liked Videos",
      icon: [thumbUp, thumbUpFill],
    },
    {
      text: "Settings",
      icon: [settings],
    },
    {
      text: "Reports",
      icon: [flag, flagFill],
    },
  ],
  showNumber: 5,
};

// SECTION 3: SUBSCRIPTIONS

const section3: SidebarSectionProps = {
  title: "Subscriptions",
  items: [
    {
      text: "Let's get Rusty",
      icon: [avatar1],
    },
    {
      text: "ckmobile",
      icon: [avatar2],
    },
    {
      text: "CS50",
      icon: [avatar3],
    },
    {
      text: "Neso Academy",
      icon: [avatar4],
    },
    {
      text: "Hallow: Prayer & Meditation",
      icon: [avatar5],
    },
    {
      text: "No Boilerplate",
      icon: [avatar6],
    },
    {
      text: "Code Academy",
      icon: [avatar7],
    },
  ],
  showNumber: 5,
};

// SECTION 4: MORE FROM YOUTUBE...

const section4: SidebarSectionProps = {
  title: "more from youtube",
  items: [
    {
      text: "Youtube Premium",
      icon: [youtube, youtubeFill],
    },
    {
      text: "Gaming",
      icon: [gaming, gamingFill],
    },
    {
      text: "Live",
      icon: [live, liveFill],
    },
  ],
};

// SECTION 5

const section5: SidebarSectionProps = {
    items: [
        {
            text: "Settings",
            icon: [settings],
        },
        {
            text: "Report history",
            icon: [flag, flagFill],
        },
        {
            text: "Help",
            icon: [help],
        },
        {
            text: "Send feedback",
            icon: [feedback],
        },
    ],
};

// FINAL SECTION: FOOTER

const footerSection: SidebarFooterProps[] = [
    {
        text: "About",
        link: "/",
    },
    {
        text: "Press",
        link: "/",
    },
    {
        text: "Copyright",
        link: "/",
    },
    {
        text: "Contact us",
        link: "/",
    },
    {
        text: "Creators",
        link: "/",
    },
    {
        text: "Advertise",
        link: "/",
    },
    {
        text: "Developers",
        link: "/",
    },
]

const footerSection2: SidebarFooterProps[] = [
    {
        text: "Terms",
        link: "#",
    },
    {
        text: "Privacy",
        link: "#",
    },
    {
        text: "Policy & Safety",
        link: "#",
    },
    {
        text: "How Youtube Works",
        link: "#",
    },
    {
        text: "Test new features",
        link: "#",
    },
]

const navbarItems: SectionItemsProps[] = [
    { text: "Home", icon: [home, homeFill] },
    { text: "Explore", icon: [explore, exploreFill] },
    {
      text: "Subscriptions",
      icon: [subscriptions, subscriptionsFill],
    },
    { text: "Library", icon: [library, libFill] },
]

const sidebarSections = [
    section1,
    section2,
    section3,
    section4,
    section5,
];

const sidebarFooter = [
    footerSection,
    footerSection2,
]

export { sidebarSections, sidebarFooter, navbarItems};
