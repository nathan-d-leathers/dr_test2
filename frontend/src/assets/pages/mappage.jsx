import Map from "../components/Map"

function Mappage() {
    // working default code
    return (
        <div className="mappage">
            <div id="mapTitle">Select the Location for your Date Below!</div>
            <p>Use the Home icon in the top left corner to find the activity locations closest to you,</p>
            <p>or type an address in the search bar to get started.</p>
            <div>
                <Map />
            </div>
        </div>
    )
}

export default Mappage