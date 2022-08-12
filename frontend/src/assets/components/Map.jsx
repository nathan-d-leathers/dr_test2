import React from 'react';
// // import Hooks
import { useCallback, useState, useRef } from 'react'

// // import Google Maps
import {
    GoogleMap,
    useLoadScript,
} from "@react-google-maps/api"


// import for Geolocating and Search Bar suggestions
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete"


// // // import Combo Box for Search Results List
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox"

// // // Import Combobox CSS
import "@reach/combobox/styles.css";

// // Custom Map Styling
import mapStyles from '../../mapStyles';

// // import App related CSS
// import './App.css'



// Not Sure if Nessacary
import { clearSuggestions } from 'use-places-autocomplete';
// require('dotenv').config()

// import { Circle } from '@react-google-maps/api';
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


function Map() {

    // Variable to find a location in Google Places
    const libraries = ["places"]

    // Sizes the map
    const mapContainerStyle = {
        width: "700px",
        height: "700px",
    }

    // Adds a default center to map on load (Default: Code Platoon HQ, Chicago IL)
    const center = {
        lat: 41.879930,
        lng: -87.630710,
    }

    // customizes my Map style and widgets
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: true,
    }

    // hooks

    // script that loads Google Maps into App
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:
            // -=-= A D D   A P I   K E Y  T 0   B A C K E N D -=-=-=-=
            libraries,
    });

    // logic helpers

    function Locate({ panTo }) {
        return (
            <button className='locate'
                onClick={() => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            panTo({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            });
                        },
                        () => null
                    );
                }}
            >
                Geolocate
            </button>
        )
    }

    const mapRef = React.useRef();

    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(12);
    }, []);

    // Display message for rendering Map
    if (loadError) return "Error Loading Maps"
    if (!isLoaded) return "Loading Maps..."



    // actual HTML to be displayed on page
    return (
        <div>
            <Locate panTo={panTo} />
            <div className="App">
                <Search panTo={panTo} />
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={14}
                    center={center}
                    options={options}
                    onLoad={onMapLoad}
                >
                </GoogleMap>
            </div >
        </div>
    )
}

// function for Search Bar on Map (with Google auto complete for addresses)
function Search({ panTo }) {
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
    });

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
                        panTo({ lat, lng });
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

export default Map