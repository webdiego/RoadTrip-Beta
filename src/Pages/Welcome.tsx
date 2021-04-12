import Home from'./Home'
import { ChangeEvent, useState } from "react";

function Welcome() {
  const [toggle,setToggle]=useState<boolean>(false)
  const[ user,setUser] =useState<string>('')
   
   const UserName =(e:ChangeEvent<HTMLInputElement> )=>{
    // let User = e.target.value.slice(0,1).toUpperCase()
    setUser(e.target.value)
    console.log(typeof user)
   }

  const hideWelcome= ()=>{
  setToggle(!toggle)
  }

  return (
    <div>
      <h2>Welcome to</h2>
      <h1>RoadTrip</h1>
      <label >Insert Your Name</label>
      <input type="text" value={user} onChange={(e)=>UserName(e)}/>
      <h1>{user}</h1>
      <button onClick={hideWelcome}>👍</button>
      {toggle && 
      
      <Home />
      }
    </div>
  )
}

export default Welcome
