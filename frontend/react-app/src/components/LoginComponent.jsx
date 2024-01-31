import { useState } from "react"


export default function LoginComponent() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    function handleUsername(event) {
        setUsername(event.target.value)
    }
    
    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        if(username==='dummy' && password==='dummy'){
        console.log('Success')
        setShowSuccessMessage(true)
        setShowErrorMessage(false)
        } else {
        console.log('Failed')
        setShowSuccessMessage(false)
        setShowErrorMessage(true)
        }
    }


    return(
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
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
                    <button type="button" name="login" onChange={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
   
}

