import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ActivityList from "../pages/ActivityList";
// import { useNavigate } from "react-router-dom";

function Activity({ id, handleSpinClick }) {

    const [activity, setActivity] = useState(null)
    // const [activity_id, setActivityId] = useState(null)
    // const { id } = useParams();


    useEffect(() => {
        axios
            .get(`/activities/${id}`)
            .then((response) => {
                const activityFields = response.data[0].fields;
                // const activityIds = response.data[0].pk;
                console.log(activityFields)
                // console.log(activityIds)
                setActivity(activityFields)
                // setActivityId(activityIds)

            })
    }, [id])

    return (
        <div>
            {activity &&
                <div>
                    {/* <h4>Heres Your Activity!</h4> */}
                    <h1>{activity.name}</h1>
                    <h2>{activity.description}</h2>
                    {/* <br /> */}
                    <p>These are the search terms I will pass into Google Maps:</p>
                    <h5>{activity.keywords}</h5>
                </div>
            }
            <button id="accept">
                <Link to="activitymap">Accept</Link>
            </button>
            <button id="respin" onClick={handleSpinClick}>RE-SPIN</button>
            <br />
            {/* <div>
                {activity_id &&
                    <div>
                        {activity_id}
                    </div>
                }
            </div> */}
        </div>
    )
}



export default Activity