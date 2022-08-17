import { Link } from "react-router-dom";

function Homepage(props) {

    return (
        <div class="signupFrom">
            <h1 id="welcome">Welcome to Date Roullete</h1>
            <h2>Sign Up or Log In Below</h2>
            <button id="signup">
                <a href="#/signup">Sign Up</a>
            </button>
            <button id="login">
                <a href="#/login">Log In</a>
            </button>
            <button id="logout" onClick={props.logOut}>Log Out</button>
            <br />
            <button id="towheelpage">
                <Link to="wheelpage">Lets Plan a Date!</Link>
            </button>
        </div>
    )
}

export default Homepage
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// trying to import business data

// const [businesses, setBusinesses] = useState([])
// const getBusinessData = () => {

//     axios.get('/yelpAPI/')
//         .then((response) => {
//             console.log("great success!")
//             setBusinesses(response.data.businesses)
//         }
//         ), []
// }

{/* <button onclick={getBusinessData}>Get Coffeeshops</button>
            <div>
                <ul>
                    {businesses.map((business) => {
                        <li>{business.name}</li>
                    })}
                </ul>
            </div> */}

// 
// useEffect(() => {
//     axios
//         .get('/activities')
//         .then((response) => {
//             const activities = response.data;
//             setActivities(activities.map((activity) => activity.fields))
//             const activityIds = (activities.map((activity) => activity.pk))
//             console.log(activityIds)
//             setActivityId(activityIds)

//         })
// }, [])