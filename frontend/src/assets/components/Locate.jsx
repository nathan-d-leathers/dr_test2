import homeheart from "../homeheart.png"

function Locate(props) {
    return (
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
    )
}

export default Locate