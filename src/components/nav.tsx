const Nav = () => {
  return (
    <nav className="bg-blue-500 flex justify-between items-center p-10">
      <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
      <ul className="flex justify-between gap-4 ">
        <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
        <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
      </ul> 
    </nav>
  )
}

export default Nav