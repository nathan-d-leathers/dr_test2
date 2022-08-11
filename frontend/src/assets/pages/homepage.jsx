import ActivityWheel from "../components/ActivityWheel"


function Homepage() {

    return (
        <div className="homepage">
            <b><h1 id="title1">Welcome to</h1></b>
            <b><h1 id="title2">Date Roulette!</h1></b>
            <h1 id="subtitle">Click the Spin Button Below to Generate</h1>
            <h1 id="subtitle">an Activity for your Date Night!</h1>
            <ActivityWheel />

        </div>
    )
}

export default Homepage



// ##################################################################

// Problem lies with my roulette wheel dependencies

// ##################################################################