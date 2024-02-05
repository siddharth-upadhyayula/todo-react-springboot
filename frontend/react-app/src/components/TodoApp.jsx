
import { BrowserRouter, Route, Routes} from "react-router-dom"
import LogoutComponent from "./LogoutComponent"
import FooterComponent from "./FooterComponent"
import ErrorComponent from "./ErrorComponent"
import HeaderComponent from "./HeaderComponent"
import ListTodosComponent from "./ListTodosComponent"
import LoginComponent from "./LoginComponent"
import WelcomeComponent from "./WelcomeComponent"
import './TodoApp.css'
import AuthProvider, {useAuth } from "../security/AuthContext"


export default function TodoApp() {

    //const authContext = useContext(AuthContext)
    const authContext = useAuth()
      console.log(authContext.value)

    return (
        <div className="TodoApp">
            
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}></Route>
                        <Route path='/login' element={<LoginComponent/>}></Route>
                        <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                        
                        <Route path='/todos' element={<ListTodosComponent/>}></Route>
                        <Route path='/logout' element={<LogoutComponent/>}></Route>
                        <Route path='/*' element={<ErrorComponent/>}></Route>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}