import React from 'react'
import { use } from 'react';
import { useState,useEffect  } from 'react'

function Fetch() {
    const [count,setCount] = useState(1 );
    const [starWarsData,setStarWarsData] =useState(null);
    
 useEffect(()=>{
    fetch(`https://swapi.dev/api/planets/${count}`)
    .then(res=>res.json())
    .then(data=>setStarWarsData(data))  
 },[count])
  return (
    <div>
    <h2>the count is {count}</h2>
    <button onClick={() => setCount(count + 1)}>Get next character</button>
    <pre>{JSON.stringify({starWarsData},null,2)}</pre>
    </div>
  )
}

export default Fetch
