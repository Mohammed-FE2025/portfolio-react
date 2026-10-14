const Footer = () => {
  return (
    <footer className="bg-[#012a4a] text-white py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer