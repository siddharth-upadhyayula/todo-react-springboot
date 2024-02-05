import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../security/AuthContext"

export default function LoginComponent() {

    const authContext = useAuth()
    
    const [username, setUsername] = useState('dummy')
    const [password, setPassword] = useState('dummy')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()

    function handleUsername(event) {
        setUsername(event.target.value)
    }
    
    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        if(authContext.login(username, password)){ 
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {showErrorMessage && <div className="errorMessage">Authentication failed</div>} 
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
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
   
}
