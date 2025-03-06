import React from 'react'
import { useState } from 'react';
function Yerneory() {

const [isGoingOut, setIsGoingOut] = useState(false);

 // 👈 Use ternary here
     // Remove the code below 👇 once your ternary is done
   function changeMind(){
     setIsGoingOut( pre=>!pre )}
  
  return (
    <div>
      <main>
        <h1 className="title">Do I feel like going out tonight?</h1>
        <button
          className="value"
          onClick={changeMind}
          aria-label={`curreunt answer is${isGoingOut ? "No" : "Yes"}`}
        >
          {isGoingOut === true ? "yes" : "no"}
        </button>
      </main>
    </div>
  );
}

export default Yerneory
