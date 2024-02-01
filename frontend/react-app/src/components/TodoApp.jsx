import { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                </Routes>
      </BrowserRouter>
        </div>
    )
}


function LoginComponent() {
    
    const [username, setUsername] = useState('dummy')
    const [password, setPassword] = useState('dummy')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()

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
        navigate('/welcome')
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
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
   
}

function WelcomeComponent() {
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}