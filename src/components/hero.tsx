import heroImage from "../assets/man.jpg";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaCloudSun,
  FaTasks,
  FaUtensils,
  FaFilm,
  FaBlog,
} from "react-icons/fa";  

const projects = [
  { title: "Portfolio", description: "My React portfolio site.", link: "https://github.com/you/portfolio", icon: FaReact },
  { title: "Weather App", description: "Fetches live weather data.", link: "https://github.com/you/weather",  icon: FaCloudSun, },
  { title: "Todo App", description: "A simple task manager.", link: "https://github.com/you/todo", icon: FaTasks },
  { title: "Movie App", description: "A movie browsing application.", link: "https://github.com/you/new-project", icon: FaFilm },
  { title: "Blog App", description: "A personal blogging platform.", link: "https://github.com/you/blog", icon: FaBlog },
  { title: "Book a Table", description: "An online table reservation system.", link: "https://github.com/you/book-a-table", icon: FaUtensils }
];

const Hero = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-[#013A63] text-white py-20 border-t-4 border-yellow-400 border-b-4 border-yellow-400">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            I am a FrontEnd Developer passionate about creating beautiful and functional web experiences.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link to="/projects" className="rounded-full bg-yellow-400 px-6 py-3 text-lg font-semibold text-[#012a4a] hover:bg-transparent active:bg-yellow-500 hover:text-white">
              View My Projects
            </Link>
            <Link to="/contact" className="rounded-full bg-yellow-400 px-6 py-3 text-lg font-semibold text-[#012a4a] hover:bg-transparent active:bg-yellow-500 hover:text-white">
              Contact Me
            </Link>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Hero Image"
          className="mx-auto w-96 h-96 max-w-md rounded-full object-cover shadow-lg md:order-last border-4 border-white"
        />
      </div>
   <div className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
  <h2 className="text-center text-3xl font-bold sm:text-4xl">Projects</h2>

  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {projects.map((project) => {
  const Icon = project.icon;

  return (
    <div key={project.title} className="rounded-xl bg-white/10 p-6 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-yellow-400">{project.title}</h3>
      <p className="mt-2">{project.description}</p>

      <div className="mt-6 flex justify-center">
        <Icon
          aria-hidden="true"
          className="text-7xl text-yellow-400 transition-transform duration-300 hover:scale-110"
        />
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-full bg-yellow-400 px-4 py-2 font-semibold text-[#012a4a] hover:bg-[#012a4a] hover:text-white"
      >
        View
      </a>
    </div>
  );
})}
  </div>
</div>
    </section>
  );
};

export default Hero;