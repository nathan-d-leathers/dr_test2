import homeheart from "../homeheart.png"
import { Circle, Marker } from "@react-google-maps/api"

function Locate(props) {
    return (
        <div>
            <img id="house" src={homeheart} alt="Geolocate"
                onClick={() => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            props.panTo({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            });
                        },
                        () => null
                    );
                }}
            />
            {/* {props.center && <Marker
                position={props.center}
            // icon={houseicon}
            // how to resize?
            />}
            <Circle center={props.center} radius={2200} /> */}
            {/* still no luck getting my panTo to give me a marker and circle */}
        </div>
    )
}

export default Locate