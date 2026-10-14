import heroImage from "../assets/man.jpg";

const Hero = () => {
  return (
    <section className="flex flex-1 items-center bg-[#012a4a] text-white py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            I am a FrontEnd Developer passionate about creating beautiful and functional web experiences.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a href="#projects" className="rounded-full bg-yellow-400 px-6 py-3 text-lg font-semibold text-[#012a4a] hover:bg-[#012a4a] active:bg-yellow-500 hover:text-white">
              View My Projects
            </a>
            <a href="#contact" className="rounded-full bg-yellow-400 px-6 py-3 text-lg font-semibold text-[#012a4a] hover:bg-[#012a4a] active:bg-yellow-500 hover:text-white">
              Contact Me
            </a>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Hero Image"
          className="mx-auto w-full max-w-md rounded-full shadow-lg md:order-last"
        />
      </div>
    </section>
  );
};

export default Hero;