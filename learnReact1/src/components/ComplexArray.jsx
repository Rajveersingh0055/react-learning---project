import React from 'react'
import { useState } from 'react'
function ComplexArray() {
  const[ myFavoriteThings ,setMyFovoriteThings] = useState([]);
  const allFavoriteThings=[
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.
setMyFovoriteThings(prevThinks=>[...prevThinks,allFavoriteThings[prevThinks.length]]);

  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}

export default ComplexArray
