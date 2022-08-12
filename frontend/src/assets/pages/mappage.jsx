import Map from "../components/Map"

function Mappage() {
    // working default code
    return (
        <div className="mappage">
            <div id="mapTitle">Select the Location for your Date Below!</div>
            <p>Use the icon in the top right corner to find the activity locations closest to you,</p>
            <p>or type an address in the search bar to get started.</p>
            <div className="MapBox">
                <Map />
            </div>
            {/* Map page not loading, but not breaking my page*/}
        </div>
    )
}

export default Mappage