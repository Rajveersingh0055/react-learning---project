import React from 'react'
import { useState } from 'react'
import Yerneory from './components/Yerneory';
import ComplexArray from './components/ComplexArray';
import ComplexOject from './components/ComplexOject';
import Form from './components/Form';
import Count from './components/Count';
import PassingData from "./components/PassingData"
import Sound from './components/Sound';
import Fetch from './components/Fetch';
import State from './components/State';
import { use } from 'react';


function App() {
  const [show, setShow] = useState(true);
  function toggle(){
    setShow(prevShow => !prevShow)
  }
    return (
      <main className="container bg-blue-300">
        <button  onClick={toggle} className='p-3 rounded-3xl bg-purple-400 '>Toggle Window Tracker</button>
    {show &&<State />}
      </main>
    );
}

//function App() {
//  const [count, setCount] = React.useState(0);

//  function add() {
//    setCount((prevCount) => prevCount + 1);
//  }

//  function subtract() {
//    setCount((prevCount) => prevCount - 1);
//  }



//  return (
//    <main className="container h-screen flex-col justify-center items-center">
//      <div className="counter flex  mt-[40px] items-end ">
//        <button
//          className="minus w-[50px] h-[50px]  cursor-pointer border-none text-[1.5rem] p-3.5 rounded-[50%] bg-[#737373]"
//          onClick={subtract}
//          aria-label="Decrease count"
//        >
//          -
//        </button>
//        <Count Count={count}/>
//     {/* <h2 className="count bg-white h-[100px] w-[100px] rounded-[50%] text-[3rem] flex items-center justify-center">{count}</h2> */}
   

//        <button
//          className="plus mr-[-20px] w-[50px] h-[50px]  cursor-pointer border-none text-[1.5rem] p-3.5 rounded-[50%] bg-[#737373]"
//          onClick={add}
//          aria-label="Increase count"
//        >
//          +
//        </button>
//      </div>
//    </main>
 //);

//  function App(){
//    return(
//     <>
//       <Sound/>
//     </>
//    )
//  }


export default App
