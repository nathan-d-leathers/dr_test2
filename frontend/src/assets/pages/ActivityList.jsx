import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function ActivityList() {

    const [activities, setActivities] = useState([])
    const [prizeIds, setActivityId] = useState([])
    let navigate = useNavigate()
    let listNums = prizeIds.map((prizeId) =>
        <li onClick={(prizeId) => handleActivityClick(prizeId)}>{prizeId}</li>
    )

    useEffect(() => {
        axios
            .get('/activities')
            .then((response) => {
                const activities = response.data;
                // console.log(activities)
                setActivities(activities.map((activity) => activity.fields))
                const activityIds = (activities.map((activity) => activity.pk))
                // prizeNums.push(...activityIds)
                console.log(activityIds)
                setActivityId(activityIds)

            })
    }, [])

    const handleActivityClick = (prizeId) => {
        console.log('handle activity click, Activity ID: ', prizeId);
        navigate(`/activities/${prize_id}`)
    }

    return (
        <div>
            <div>
                <h4>Here's my List of Activities</h4>
                {activities.map(({ name, description, keywords }) => <div onClick={(name) => handleActivityClick(activity_id)}>
                    <p>Name: {name}</p>
                    <p>Description: {description}</p>
                    <br />
                    <p>Search Terms: {keywords}</p>
                    <hr />
                </div>
                )}
                <div>
                    <ul>{listNums}</ul>
                </div>
            </div>
        </div>
    )
}


export default ActivityList