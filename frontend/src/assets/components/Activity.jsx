import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Activity({ id, handleSpinClick, activity, setActivity, showSpinResults }) {

    useEffect(() => {
        axios
            .get(`/activities/${id}`)
            .then((response) => {
                const activityFields = response.data[0].fields;
                console.log(activityFields)
                setActivity(activityFields)
                // let keywords = response.data[0].fields.keywords
            })
    }, [id])

    return (
        <div>
            {showSpinResults && activity &&
                <div id="prizeBlock">
                    <p id="actTitle">-{activity.name}-</p>
                    <h2>{activity.description}</h2>
                    <p>These are the search terms I will pass into Google Maps:</p>
                    <h5>{activity.keywords}</h5>
                    <button id="accept">
                        <Link to="activitymap">Accept</Link>
                    </button>
                    <button id="respin" onClick={handleSpinClick}>RE-SPIN</button>
                </div>
            }
        </div>
    )
}



export default Activity