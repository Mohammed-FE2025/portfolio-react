import { Route, Routes } from "react-router-dom"
import Nav from "./components/nav"
import About from "./pages/about"
import Hero from "./components/hero"
import Footer from "./components/footer"
import Projects from "./pages/projects"
import Contact from "./components/contact"


function App() {


  return (
   <div className="flex min-h-screen flex-col">
     <Nav />
     <Routes>
       <Route path="/" element={<Hero />} />
       <Route path="/about" element={<About />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
   </div>
  )
}




export default App
