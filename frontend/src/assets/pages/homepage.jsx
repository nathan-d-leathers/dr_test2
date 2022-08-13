import ActivityWheel from "../components/ActivityWheel"
// import Map from "../components/Map"


function Homepage(props) {

    return (
        <div className="homepage">
            <b><h1 id="title1">Welcome to</h1></b>
            <b><h1 id="title2">Date Roulette!</h1></b>
            <h1 id="subtitle">Click the Button Below to Generate</h1>
            <h1 id="subtitle">an Activity for your Date Night!</h1>
            <ActivityWheel
                wheeldata={props.wheeldata}
                mustSpin={props.mustSpin}
                prizeNumber={props.prizeNumber}
                handleSpinClick={props.handleSpinClick}
            />
        </div>
    )
}

export default Homepage