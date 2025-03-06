import React from 'react'
import { useState } from 'react';
function Pad(props) {
 const [isOn,setIson] = useState(false);
 
 const handleClick = () => setIson(prevState => !prevState);
  return (
    <div>
      <button
      onClick={handleClick}
        style={{ backgroundColor: props.color }}
        className={`pads h-[100px] w-[100px] border-3 border-white rounded-md cursor-pointer transition-opacity duration-300 ${
          isOn ? "opacity-100" : "opacity-10"
        }`}
      ></button>
    </div>
  );
}

export default Pad
