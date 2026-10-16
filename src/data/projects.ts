import type { IconType } from "react-icons";
import {
  FaReact,
  FaCloudSun,
  FaTasks,
  FaUtensils,
  FaFilm,
  FaBlog,
} from "react-icons/fa";

export type Project = {
  title: string;
  description: string;
  link: string;
  icon: IconType;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Portfolio",
    description: "My React portfolio site.",
    link: "https://github.com/Mohammed-FE2025/portfolio-react",
    icon: FaReact,
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Weather App",
    description: "A weather application showing current weather.",
    link: "https://github.com/you/weather",
    icon: FaCloudSun,
    tags: ["React", "API", "CSS"],
  },
  {
    title: "Todo App",
    description: "A simple task manager.",
    link: "https://github.com/you/todo",
    icon: FaTasks,
    tags: ["React", "TypeScript", "Local Storage"],
  },
  {
    title: "Movie App",
    description: "A movie browsing application.",
    link: "https://github.com/you/movie-app",
    icon: FaFilm,
    tags: ["React", "API", "Tailwind"],
  },
  {
    title: "Blog App",
    description: "A personal blogging platform.",
    link: "https://github.com/you/blog",
    icon: FaBlog,
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Book a Table",
    description: "An online table reservation system.",
    link: "https://github.com/you/book-a-table",
    icon: FaUtensils,
    tags: ["React", "Forms", "Tailwind"],
  },
];