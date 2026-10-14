import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="flex flex-wrap items-center justify-between bg-[#012a4a] p-4">
      <h1 className="text-2xl font-bold text-[#A9D6E5] stroke-b-2 [-webkit-text-stroke:1px_black]">
        FrontEnd <span className="text-yellow-400 transition group-hover:text-red-400">Portfolio</span>
      </h1>

      <button
        type="button"
        className="rounded p-2 text-white hover:bg-gray-700 active:bg-gray-700 sm:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
          {isOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <ul
        id="nav-menu"
        className={`${isOpen ? "flex" : "hidden"} w-full flex-col items-center gap-2 pt-4 sm:flex sm:w-auto sm:flex-row sm:gap-x-6 sm:pt-0`}
      >
        <li><a href="#about" onClick={() => setIsOpen(false)} className="block text-white hover:text-gray-300 hover:bg-gray-700 active:bg-gray-700 active:text-gray-300 focus-visible:bg-gray-700 rounded-full px-5 py-2 ">About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)} className="block text-white hover:text-gray-300 hover:bg-gray-700 active:bg-gray-700 active:text-gray-300 focus-visible:bg-gray-700 rounded-full px-5 py-2">Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)} className="block text-white hover:text-gray-300 hover:bg-gray-700 active:bg-gray-700 active:text-gray-300 focus-visible:bg-gray-700 rounded-full px-5 py-2">Contact</a></li>
      </ul>
    </nav>
    
  )
}

export default Nav