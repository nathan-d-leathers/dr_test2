import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ActivityList from "../pages/ActivityList";
// import { useNavigate } from "react-router-dom";

function Activity({ id, handleSpinClick, activity, setActivity, showSpinResults }) {

    // const [activity, setActivity] = useState(null)
    // const [activity_id, setActivityId] = useState(null)
    // const { id } = useParams();


    useEffect(() => {
        axios
            .get(`/activities/${id}`)
            .then((response) => {
                const activityFields = response.data[0].fields;
                console.log(activityFields)
                setActivity(activityFields)

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