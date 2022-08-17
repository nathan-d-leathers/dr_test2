import React from "react";
import { Wheel } from "react-custom-roulette";
import pointer from "../pointer.webp"

function ActivityWheel(props) {

    return (
        <div>
            <div className='prizeWheelBox'>
                <p id="logo">DR</p>
                <img src={pointer} id="pointer" />
                <Wheel
                    mustStartSpinning={props.mustSpin}
                    prizeNumber={props.prizeNumber}
                    data={props.wheeldata}
                    onStopSpinning={props.onStopSpinning}
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
                props.handleSpinClick
            }>
                Spin the Wheel</button>
            <h3>Your Date Activity Tonight Shall Be...</h3>
        </div >
    )

}

export default ActivityWheel

