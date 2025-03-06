import React, { useEffect } from 'react'
import { useState } from 'react';
function Main() {

  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor", 
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  })

const [allmemes, setAllMemes] = useState([]);

useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) =>setAllMemes(data.data.memes));
}, [])

/**
 * Selects a random meme from the list of all memes and updates the current meme's image URL.
 * The function calculates a random index to fetch a random meme from the `allmemes` array.
 * It then updates the `meme` state with the new image URL.
 */

function handleCLick(){
  const randomIndex = Math.floor(Math.random() * allmemes.length);
  const randomMeme = allmemes[randomIndex];
  setMeme(prevMeme => ({
    ...prevMeme,
    imageUrl: randomMeme.url
  }))
}

  function handleChange(e){
    const {value} = e.currentTarget;
    setMeme(prevMeme => ({
      ...prevMeme,
      [e.target.name]: value
    }))
  }

  return (
    <main className="mx-auto p-9 max-w-[600px]">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label>
          Top Text
          <input
            onChange={handleChange}
            type="text"
            placeholder="One does not simply"
            className="col-span-1 mt-1 rounded border border-[#D5D4D8] px-1.5 min-h-[40px]"
            name="topText"
          />
        </label>

        <label>
          Bottom Text
          <input
            onChange={handleChange}
            type="text"
            placeholder="Walk into Mordor"
            className="col-span-1 mt-1 rounded border border-[#D5D4D8] px-1.5 min-h-[40px]"
            name="bottomText"
          />
        </label>
        <button
          onClick={handleCLick}
          className="col-span-2 rounded bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white border-none cursor-pointer min-h-[40px]"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className=" meme relative flex flex-col justify-center items-center meme">
        <img className=" max-w-full h-auto rounded-sm" src={meme.imageUrl} />
        <span
          className="
    absolute top-0 left-1/2 transform -translate-x-1/2 
    text-center my-4 px-2 font-impact text-2xl uppercase text-white tracking-wider
    [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_0_0_#000,0_-2px_0_#000,-2px_0_0_#000,2px_2px_5px_#000]
"
        >
          {meme.topText}
        </span>
        <span
          className="
    absolute bottom-0 left-1/2 transform -translate-x-1/2
    text-center my-4 px-2 font-impact text-2xl uppercase text-white tracking-wider
    [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_0_0_#000,0_-2px_0_#000,-2px_0_0_#000,2px_2px_5px_#000]
"
        >
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
}

export default Main
