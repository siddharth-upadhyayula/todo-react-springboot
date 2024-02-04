import { useParams, Link } from "react-router-dom"

export default function WelcomeComponent() {

    const {username} = useParams()
    console.log(username)

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Go to your todos - <Link to = '/todos'>Click here</Link>
            </div>
        </div>
    )  
}