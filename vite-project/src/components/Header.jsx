import React from 'react'
import globeLogo from '../assets/globe.png'
function Header() {
  return (
    <header className="bg-[#F55A5A] flex items-center justify-center h-[55px] mb-11">
      <img className="w-[20px] mx-[7px]" src={globeLogo} alt="globe icon" />
      <h1 className="text-white text-[0.9rem] font-medium font-[Inter]">
        my travel journal.
      </h1>
    </header>
  );
}

export default Header
