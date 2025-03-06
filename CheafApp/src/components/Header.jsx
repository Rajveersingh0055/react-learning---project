import React from 'react'
import cheafLogo from "../assets/chef-claude-icon.png";

function Header() {
  return (
    <div className="Cheafname bg-[#e9cbcb] flex items-center justify-center shadow-md h-[80px] gap-5">
      <img src={cheafLogo} className="image w-12" />
      <h1 className=" font-sans text-3xl font-bold">Cheaf Claude</h1>
    </div>
  );
}

export default Header
