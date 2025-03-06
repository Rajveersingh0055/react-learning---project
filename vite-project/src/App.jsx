import React from 'react'
import Header from './components/Header';
import Entery from './components/Entery';
import Joke from './components/Joke';
import JokesData from './components/JokesData';
import DataTravel from './components/DataTravel';

//   function App(){
//  const JokeElements =JokesData.map((joke)=>{
//   return <Joke
//    setup={joke.setup} 
//   punchline={joke.punchline} />;
  
//   });
//   return (
//     <>
//         {JokeElements}
      
//     </>
//   );
//   }

// function App() {
//   // const travel = DataTravel.map((Travel)=>{
//   //   return (
//   //     <Entery
//   //       key={Travel.id}
//   //       img={Travel.img}
//   //       title={Travel.title}
//   //       country={Travel.country}
//   //       googleMapsLink={Travel.googleMapsLink}
//   //       dates={Travel.dates}
//   //       text={Travel.text}
//   //     />
//   //   );
//   // })
//   const entryElements = DataTravel.map((entry) => {
//     return <Entery key={entry.id} Entery={entry} />;
//   });
    
// return (
//   <>
//     <Header />
//     {entryElements}
//   </>
// );
// }

function App() {
   const [messages, setMessages] = React.useState(["a","b","c"]);
  return (
    <>
      {messages.length > 0 ? (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}!
        </h1>
      ) : (
        <p>You're all caught up!</p>
      )}
    </>
  );
}

// function App(){
//   const ninjaTurtles = [
//     <h1>"Donatello"</h1>,
//     <h1>"Michaelangelo"</h1>,
//     <h1>"Rafael"</h1>,
//     <h1>"Leonardo"</h1>,
//   ];
//   return(<>
//     <p>{ninjaTurtles}</p>
//   </>)
// // }

export default App
