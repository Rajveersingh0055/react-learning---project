import React from 'react'
import Body from './Body'
import Header from './Header'

function PassingData() {
     const [userName, setUserName] = React.useState("Joe");
   return(
<>
<Header userName={userName}/>
    <Body userName={userName}/>

</>
      )}
export default PassingData
