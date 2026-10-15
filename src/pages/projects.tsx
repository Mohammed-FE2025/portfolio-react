
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="flex flex-1 items-center bg-[#012a4a] text-white py-20 flex-col">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Here are some of the projects I have worked on.
          </p>
          <div className="mt-8 flex flex-row items-center gap-4 sm:flex-row sm:justify-center ">
            <img
              src="src/assets/weather.jpg"
              alt="Project 1"
              className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="src/assets/todo.jpg"
              alt="Project 2"
              className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="src/assets/man.jpg"
              alt="Project 3"
              className="w-64 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="mt-6 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-[#012a4a] hover:bg-[#012a4a] hover:text-white "
      >
        Back to Home
      </Link>
    </section>
  );
};

export default Projects;