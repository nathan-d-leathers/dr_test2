import React from "react";
import { Wheel } from "react-custom-roulette"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ActivityWheel() {

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

    let spinCount = 0;

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * wheeldata.length)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)
        console.log(prizeNumber)
        spinCount += 1;
    }

    return (
        <div>
            <div className='prizeWheelBox'>
                <p id="logo">DR</p>
                <Wheel
                    // id="prizeWheel"
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={wheeldata}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}
                    outerBorderWidth={12}
                    innerRadius={28}
                    innerBorderWidth={10}
                    innerBorderColor={'black'}
                    radiusLineWidth={2.5}
                    radiusLineColor={'goldenrod'}
                    fontSize={18}
                    perpendicularText={true}
                    textDistance={86}
                    spinDuration={0.75}
                />
            </div>
            <br />
            <button id="spinButton" onClick={
                handleSpinClick
            }>
                Spin the Wheel</button>
            <h3>Your Date Activity Tonight Shall Be...</h3>
            <p>Prize Number: {prizeNumber}</p>
            <br />
            <button id="accept">
                <Link to="activitymap">Accept</Link>
            </button>
            <button id="respin" onClick={handleSpinClick}>RE-SPIN</button>
            <br />
            <Link to="activities">Activities</Link>
            {/* <Link to="activities/prizeId">Activities</Link> */}

        </div>
    )

}

export default ActivityWheel