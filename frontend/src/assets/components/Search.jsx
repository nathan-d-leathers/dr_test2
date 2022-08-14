// import for Geolocating and Search Bar suggestions
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete"

// import Combo Box for Search Results List
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox"

// Import Combobox CSS
import "@reach/combobox/styles.css";

// Import for Clearing Search Bar (kinda buggey import, keeping import separate)
import { clearSuggestions } from 'use-places-autocomplete';

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function Search(props) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 41.879930, lng: () => -87.630710 },
            // radius is in meters (this will show 5km)
            radius: 5 * 1000
        },
    })


    return (
        <div className='search'>
            <Combobox
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();
                    try {
                        const results = await getGeocode({ address });
                        const { lat, lng } = await getLatLng(results[0]);
                        console.log({ lat, lng });
                        props.panTo({ lat, lng });
                    } catch (error) {
                        console.log("error!")
                    }

                }}
            >
                <ComboboxInput value={value} onChange={(e) => {
                    setValue(e.target.value)
                }}
                    disabled={!ready}
                    placeholder="Enter an address"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status == "OK" && data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}



export default Search