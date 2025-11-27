import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white/80 backdrop-blur-sm border-b border-[#E0EEF7] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#2A6073]">TeStSkill</h1>
            </div>
            <div className="hidden md:flex items-center text-[17px] font-semibold space-x-8">
              <a href="#home" className="text-[#6B7C8F] hover:font-bold hover:text-[#2A6073] transition-colors">Home</a>
              <a href="#topics" className="text-[#6B7C8F] hover:font-bold hover:text-[#2A6073] transition-colors">Topics</a>
              <a href="#about" className="text-[#6B7C8F] hover:font-bold hover:text-[#2A6073] transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
