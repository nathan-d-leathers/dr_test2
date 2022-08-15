import ActivityWheel from "../components/ActivityWheel"
import { useCallback, useState, useRef } from 'react'
import Activity from "../components/Activity";
import { Link } from "react-router-dom"

function Wheelpage(props) {


    const wheeldata = [
        // 38 options, ordered in the style of traditional american roulette wheels
        { option: '28', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '9', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '26', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '30', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '11', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '7', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '20', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '32', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '17', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '5', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '22', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '34', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '15', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '3', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '24', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '36', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '13', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '1', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '00', style: { backgroundColor: 'green', textColor: 'black' } },
        { option: '27', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '10', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '25', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '29', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '12', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '8', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '19', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '31', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '18', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '6', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '21', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '33', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '16', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '4', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '23', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '35', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '14', style: { backgroundColor: 'red', textColor: 'black' } },
        { option: '2', style: { backgroundColor: 'black', textColor: 'white' } },
        { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    ]

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(null);
    const [showSpinResults, setShowSpinResults] = useState(false);

    const handleSpinClick = () => {
        setShowSpinResults(false)
        const newPrizeNumber = Math.floor(Math.random() * wheeldata.length)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)
        console.log(prizeNumber)
    }

    const onStopSpinning = () => {
        setMustSpin(false)
        setShowSpinResults(true)
    }

    return (
        <div className="wheelpage">
            <b><h1 id="title1">Welcome to</h1></b>
            <b><h1 id="title2">Date Roulette!</h1></b>
            <h1 id="subtitle">Click the Button Below to Generate</h1>
            <h1 id="subtitle">an Activity for your Date Night!</h1>
            <ActivityWheel
                wheeldata={wheeldata}
                mustSpin={mustSpin}
                prizeNumber={prizeNumber}
                handleSpinClick={handleSpinClick}
                onStopSpinning={onStopSpinning}
            />
            {prizeNumber &&
                <Activity id={prizeNumber}
                    handleSpinClick={handleSpinClick}
                    activity={props.activity}
                    setActivity={props.setActivity}
                    showSpinResults={showSpinResults}
                />
            }
            <div>
                <button id="homebutton">
                    <Link to="/">Home</Link>
                </button>
                <button id="logout" onClick={props.logOut}>Log Out</button>
            </div>
        </div>
    )
}

export default Wheelpage