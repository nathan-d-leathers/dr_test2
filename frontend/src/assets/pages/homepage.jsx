import { Link } from "react-router-dom";
import Wheelpage from "./wheelpage"
import { useState } from "react"
// import loveheart from "../loveheart.png"

function Homepage(props) {
    const [businesses, setBusinesses] = useState([])
    const getBusinessData = () => {

        axios.get('/yelpAPI/')
            .then((response) => {
                console.log("great success!")
                setBusinesses(response.data.businesses)
            }
            ), []
    }

    return (
        <div class="signupFrom">
            <h1 id="welcome">Welcome to Date Roullete</h1>
            <h2>Sign Up or Log In Below</h2>
            {/* <form onSubmit={props.submitSignupForm}>
                <input type="email" name="email" defaultValue="enter your email" />
                <br />
                <input type="password" name="password" defaultValue="enter a password" />
                <br />
                <input type="submit" />
                <br />
            </form> */}
            <button id="signup"
                user={props.user}
                setUser={props.setUser}
            >
                <a href="#/signup">Sign Up</a>
            </button>
            <button id="login"
                user={props.user}
                setUser={props.setUser}
            >
                <a href="#/login">Log In</a>
            </button>
            {/* <button id="logout" onClick={props.logOut}>Log Out</button> */}
            <br />
            <button id="towheelpage">
                <Link to="wheelpage">Lets Plan a Date!</Link>
            </button>
            {/* <button onclick={getBusinessData}>Get Coffeeshops</button>
            <div>
                <ul>
                    {businesses.map((business) => {
                        <li>{business.name}</li>
                    })}
                </ul>
            </div> */}
        </div>
    )
}

export default Homepage