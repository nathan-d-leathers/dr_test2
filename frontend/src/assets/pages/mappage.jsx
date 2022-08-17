import Map from "../components/Map"
import { Link } from "react-router-dom"
import home from "../home.png"

function Mappage(props) {

    return (
        <div className="mappage">
            <Link to="/">
                <img src={home} id="homebutton" />
            </Link>
            <br />
            <div id="mapTitle">Select the Location for your Date Below!</div>
            <p>Use the Home icon in the top left corner to find the activity locations closest to you,</p>
            <p>or type an address in the search bar to get started.</p>
            <div>
                <Map
                    getYelpData={props.getYelpData}
                    businessLocations={props.businessLocations}
                />
            </div>
        </div>
    )
}

export default Mappage
