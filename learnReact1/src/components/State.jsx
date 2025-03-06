import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function State() {
    const [windowWirth,setWindowWirth] = useState(window.innerWidth);
   React.useEffect(() => {
  /**
   * Logs a message to the console when the window is resized and
   * updates the component's state with the new window width.
   */
     function watchWindowWidth() {
       console.log("Resized");
       setWindowWirth(window.innerWidth);
     }
     window.addEventListener("resize", watchWindowWidth);
     return function () {
       console.log("Cleaning up...");
       window.removeEventListener("resize", watchWindowWidth);
     };
   }, []);

  return (
    <div>
      <h1>Window width: {windowWirth}</h1>
    </div>
  );
}

export default State
{/*function handleCLick(){
  const randomNumber = Math.floor(Math.random()*Math.length);
  const  = allmemes[randomNumber].url;
  setAllMemes(prevMemes => ({
    ...prevMemes,
    imageUrl: url
  }))
}*/}