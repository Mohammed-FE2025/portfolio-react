import heroImage from "../assets/man.jpg";
import { Link } from "react-router-dom";

const projects = [
  { title: "Portfolio", description: "My React portfolio site.", link: "https://github.com/you/portfolio" },
  { title: "Weather App", description: "Fetches live weather data.", link: "https://github.com/you/weather" },
  { title: "Todo App", description: "A simple task manager.", link: "https://github.com/you/todo" },
];

const Hero = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-[#012a4a] text-white py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            I am a FrontEnd Developer passionate about creating beautiful and functional web experiences.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link to="/projects" className="rounded-full bg-yellow-400 px-6 py-3 text-lg font-semibold text-[#012a4a] hover:bg-[#012a4a] active:bg-yellow-500 hover:text-white">
              View My Projects
            </Link>
            <Link to="/contact" className="rounded-full bg-yellow-400 px-6 py-3 text-lg font-semibold text-[#012a4a] hover:bg-[#012a4a] active:bg-yellow-500 hover:text-white">
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
    {projects.map((project) => (
      <div key={project.title} className="rounded-xl bg-white/10 p-6">
        <h3 className="text-2xl font-bold text-yellow-400">{project.title}</h3>
        <p className="mt-2">{project.description}</p>
        <img
          src={project.title === "Portfolio" ? "src/assets/man.jpg" : project.title === "Weather App" ? "src/assets/weather.jpg" : "src/assets/todo.jpg"}
          alt={project.title}
          className="mt-4 w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />  
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block rounded-full bg-yellow-400 px-4 py-2 font-semibold text-[#012a4a] hover:bg-[#012a4a] hover:text-white"
        >
          View
        </a>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Hero;