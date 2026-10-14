
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