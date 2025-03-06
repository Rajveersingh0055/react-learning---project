import React from 'react'
import avatar from '../assets/usericon.png'

function Header(props) {
 

  return (
    <header className="h-[65px] shadow-md flex justify-end items-center px-5 bg-[#dce6fd]">
      <img className="cursor-pointer" src={avatar} />
      <p className='cursor-pointer'>{props.userName}</p>
    </header>
  );
}

export default Header
