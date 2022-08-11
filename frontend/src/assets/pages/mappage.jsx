import Map from "../components/Map"

function Mappage() {
    // working default code
    return (
        <div className="mappage">
            <div id="mapTitle">Select the Location for your Date Below!</div>
            <div className="MapBox">
                <Map />
            </div>
            {/* Map page not loading, but not breaking my page*/}
        </div>
    )
}

export default Mappage