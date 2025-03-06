import React from 'react'
import trollFace from '../assets/troll-Face.png'

function Header() {
return (
  <header className="flex items-center h-[65px] bg-gradient-to-r from-[#672280] to-[#A626D3] text-white p-5">
    <img src={trollFace} className="h-full mr-1.5" />
    <h1 className="text-xl mr-auto">Meme Generator</h1>
  </header>
);
}
export default Header
