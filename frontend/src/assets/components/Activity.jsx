import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Activity(props) {
    const id = props.prizeNumber

    const [activity, setActivity] = useState(null)
    const [activity_id, setActivityId] = useState(null)
    // const { id } = useParams();


    useEffect(() => {
        axios
            .get(`/activities/${id}`)
            .then((response) => {
                const activityFields = response.data[0].fields;
                const activityIds = response.data[0].pk;
                console.log(activityFields)
                console.log(activityIds)
                setActivity(activityFields)
                setActivityId(activityIds)

            })
    }, [])

    return (
        <div>
            {activity &&
                <div>
                    <h4>Heres Your Activity!</h4>
                    <h2>{activity.name}</h2>
                    <h3>{activity.description}</h3>
                    <br />
                    <p>These are the search terms I will pass into Google Maps:</p>
                    <h5>{activity.searchTerms}</h5>
                </div>
            }
            <div>
                {activity_id &&
                    <div>
                        {activity_id}
                    </div>
                }
            </div>
        </div>
    )
}



export default Activity