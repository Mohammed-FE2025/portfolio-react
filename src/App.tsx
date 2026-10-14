import { Route, Routes } from "react-router-dom"
import Nav from "./components/nav"
import About from "./pages/about"
import Hero from "./components/hero"
import Footer from "./components/footer"


function App() {


  return (
   <div className="flex min-h-screen flex-col">
     <Nav />
     <Routes>
       <Route path="/" element={<Hero />} />
       <Route path="/about" element={<About />} />
     </Routes>
     <Footer />
   </div>
  )
}




export default App
