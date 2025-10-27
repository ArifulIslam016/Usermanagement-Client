import React, { use, useState } from 'react';

const User = ({userPromise}) => {
    const usersFromBacend=use(userPromise)
    const [users,setusers]=useState(usersFromBacend)
    const handleSubmit=(e)=>{
  e.preventDefault()
  const name=e.target.name.value;
  const email=e.target.email.value;
  console.log(name,email)
  const nesuser={name,email}
  fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(nesuser)
  }).then(res=>res.json()).then(
    data=>{
    setusers(prev=>[...prev,data])
    }
  )
}
 
    return (
        <div>
            <div>
      <form onSubmit={handleSubmit}>
        <label>name</label><br />
        <input type="text" name="name" id="" /><br />
        <label>Email</label><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="Add User"  /><br />
      </form>
    </div>
            {
                users.map(user=>{
                    return<div key={user.id}>
                    <h6 >{user.name}</h6>
                        <p>{user.email}</p>
                    </div>
                })
            }
        </div>
    );
};

export default User;