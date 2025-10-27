
import { use, useState } from 'react'
import './App.css'
import User from './Components/User'
const userPromise=fetch('http://localhost:5000/users').then(res=>res.json())


function App() {

// const handleSubmit=(e)=>{
//   e.preventDefault()
//   const name=e.target.name.value;
//   const email=e.target.email.value;
//   console.log(name,email)
//   const nesuser={name,email}
//   fetch('http://localhost:5000/users',{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify(nesuser)
//   }).then(res=>res.json()).then(
//     data=>{
//      setUserPromise(prev=>[...prev,data])
//     }
//   )
// }

  return (
    <>
    {/* <div>
      <form onSubmit={handleSubmit}>
        <label>name</label><br />
        <input type="text" name="name" id="" /><br />
        <label>Email</label><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="Add User"  /><br />
      </form>
    </div> */}
    <h1>Users</h1>
        <User userPromise={userPromise}></User>
    </>
  )
}

export default App
