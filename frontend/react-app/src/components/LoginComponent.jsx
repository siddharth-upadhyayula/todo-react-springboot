import { useState } from "react"

export default function LoginComponent() {
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function handleUsername(event) {
        console.log(event.target.value)
        setUsername(event.target.value)
    }
    
    function handlePassword(event) {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    return(
        <div className="Login">
          <div className="LoginForm">
            <div>
                <label>User Name</label>
                <input type="text" name="username" value={username} onChange={handleUsername}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handlePassword}/>
            </div>
            <div>
                <button type="button" name="login">login</button>
            </div>
          </div>
        </div>
    )
}