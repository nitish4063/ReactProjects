import React, {useContext, useState} from 'react'
import { UserContext } from '../context/Usercontext'

function Login() {
    const userState = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log(userState.name, username, password)
        userState.setUser({username, password})
    }

  return (
    <div>
        <h2>LOGIN</h2>
        <input 
            type='text' 
            placeholder='username'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
        ></input>
        <input 
            type='text' 
            placeholder='Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        ></input>
        <br></br>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login