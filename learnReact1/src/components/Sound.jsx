import React from 'react'
import padsData from './pads';
import { useState } from 'react';
import Pad from './Pad';

function Sound() {
  const [pads, setPads] = useState(padsData);
  const buttonElements = pads.map((pad)=>(
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ));
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="pad-container grid grid-cols-4 grid-rows-2 gap-2 ">
        {buttonElements}
      </div>
    </main>
  );
}

export default Sound
