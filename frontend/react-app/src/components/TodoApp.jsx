import { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router-dom"

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    
                    <Route path='/todos' element={<ListTodosComponent/>}></Route>
                    <Route path='/*' element={<ErrorComponent/>}></Route>
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
        navigate(`/welcome/${username}`)
        } else {
        console.log('Failed')
        setShowSuccessMessage(false)
        setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
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

    const {username} = useParams()
    console.log(username)

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
        </div>
    )  
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}

function ListTodosComponent() {
    const todos = {id:1, description: 'Learn AWS'}
    return (
        <div className="ListTodosComponent">
            <h1>Things you want to do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{todos.id}</td>
                            <td>{todos.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}