import React from "react";
import { useState } from "react";

function Joke(props) {
  const [isShow, setIsShow] = useState(false);
 
/**
 * Toggles the visibility of the punchline by updating the isShow state.
 * It negates the current value of isShow, switching between true and false.
 */

  function toggleShow() {
    setIsShow(prevShow => !prevShow);
  }
  return (
    <div className="body m-[10px] font-sans bg-white-500">
      <div>
        {props.setup && <h3 className="setup font-bold">{props.setup}</h3>}
        {isShow ? <p className="punchline">{props.punchline}</p>: null}
       <button
          className="bg-violet-400 w-[090px] rounded-4xl p-0.5 m-0.5"
          onClick={toggleShow}
        >
         {isShow? "Hide" : 'Show'} Punchline
        </button>
      
        {/* <p> UpVote:{props.upvotes}   DownVote:{props.downvotes}</p>
        <p>Is its a punchline ?{props.isPun ? "Yes" : "No"}</p>
        <p> Comments:</p>
        <ul>
          {props.comments.map((comment) => (
            <li>{comment}</li>
          ))}
        </ul> */}
        <hr />
      </div>
    </div>
  );
}

export default Joke;

/** 
 * function App(){
  return (
    <>
      <Joke
        setup=" I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upvote={25}
        downvotes={3}
        isPun={true}
        comments={["Haha!", "So true!", "Good one!"]}
      />
      <Joke
        setup=" How did the hacker escape the police?"
        punchline="He just ransomware!"
        upvotes={25}
        downvotes={3}
        isPun={false}
        comments={["Haha!", "So true!", "Good one!"]}
      />
      <Joke
        setup=" Why don't pirates travel on mountain roads?"
        punchline=" Scurvy"
        upvotes={25}
        downvotes={3}
        isPun={false}
        comments={["Haha!", "So true!", "Good one!"]}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline=" Swarm."
        upvotes={25}
        downvotes={3}
        isPun={false}
        comments={["Haha!", "So true!", "Good one!"]}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        upvotes={25}
        downvotes={3}
        isPun={false}
        comments={["Haha!", "So true!", "Good one!"]}
      />
    </> */
