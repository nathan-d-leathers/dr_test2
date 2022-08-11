// import React from 'react';
// // // import Hooks
// import { useCallback, useState, useRef } from 'react'

// // // import Google Maps
// import {
//     GoogleMap,
//     useLoadScript,
//     // Marker,
//     // InfoWindow, only needed for marker location
// } from "@react-google-maps/api"


// // import for Geolocating and Search Bar suggestions
// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
// } from "use-places-autocomplete"

// // // // import Combo Box for Search Results List
// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption
// } from "@reach/combobox"

// // // // Import Combobox CSS
// import "@reach/combobox/styles.css";

// // // Custom Map Styling
// import mapStyles from './mapStyles';

// // // import App related CSS
// import './App.css'



// Not Sure if Nessacary
// import { ClearSuggestions } from 'use-places-autocomplete'; not working/supported?
// require('dotenv').config()

// import { Circle } from '@react-google-maps/api';
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// function Mappage() {

//     //  working  default code

//     return (
//         <div className="mappage">
//             <h4>Youve arrived at the map page</h4>
//         </div>
//     )
    //     // Variable to find a location in Google Places
    //     const libraries = ["places"]

    //     // Sizes the map
    //     const mapContainerStyle = {
    //         width: "100vw",
    //         height: "100vh",
    //     }

    //     // Adds a default center to map on load (Default: Code Platoon HQ, Chicago IL)
    //     const center = {
    //         lat: 41.879930,
    //         lng: -87.630710,
    //     }

    //     // customizes my Map style and widgets
    //     const options = {
    //         styles: mapStyles,
    //         disableDefaultUI: true,
    //         zoomControl: true,
    //         scaleControl: true,
    //     }





    //     // hooks

    //     // for random event ID button
    //     //   const [num, setNum] = useState(0);

    //     // for settign a map marker
    //     const [markers, setMarkers] = useState([])
    //     // for selecting a spot on map
    //     const [selected, setSelected] = useState(null)


    //     // script that loads Google Maps into App
    //     const { isLoaded, loadError } = useLoadScript({
    //         googleMapsApiKey: "AIzaSyDJoyNs_BRc2WOkSw9gmxvbGC-B_P2CWlY",

    //         // -=-= A D D   A P I   K E Y  T 0   B A C K E N D -=-=-=-=

    //         libraries,
    //     })

    //     // logic helpers


    //     // gets random number between min (inclusive) and max (inclusive) for date event id
    //     // function randomNumberInRange(min, max) {
    //     //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //     // }

    //     // // Button logic for my random event spinner
    //     // const handleClick = () => {
    //     //     setNum(randomNumberInRange(1, 10));
    //     // };


    //     // Set Marker logic that prevents multiple renderings
    //     const onMapClick = useCallback((event) => {
    //         setMarkers((current) => [
    //             ...current,
    //             {
    //                 lat: event.latlng.lat(),
    //                 lng: event.latlng.lng(),
    //                 // time: new Date(),
    //             }
    //         ])
    //     }, [])


    //     // finds location on map and repositions center
    //     function Locate({ reposition }) {
    //         return <button className="locate" onClick={() => {
    //             navigator.geolocation.getCurrentPosition((position) => {
    //                 reposition({
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude,
    //                 });
    //             }, () => null);
    //         }}>Use My Location
    //             {/* <img src="../assets/heart_logo.png" alt='Home-Locate Me' /> */}
    //         </button>
    //     }


    //     const mapRef = useRef();
    //     const onMapLoad = useCallback((map) => {
    //         mapRef.current = map
    //     }, [])

    //     // respostion map center over address entered
    //     const reposition = useCallback(({ lat, lng }) => {
    //         mapRef.current.reposition({ lat, lng });
    //         mapRef.current.setZoom(15);
    //     }, [])

    //     // Display message for rendering Map
    //     if (loadError) return "Error Loading Maps"
    //     if (!isLoaded) return "Loading Maps..."



    //     // actual HTML to be displayed on page
    //     return (
    //         <div className="App">
    //             <h1>Welcome to Date Roulette!</h1>
    //             <h2>Click the Button to Generate a Plan for your Date Night!</h2>
    //             <button onClick={handleClick}>Spin the Wheel</button>
    //             <p>This Event ID is {num}</p>
    //             <ChooseEvent number={num} />
    //             <br></br>
    //             <button>Accept Event</button>
    //             <button onClick={handleClick}>Respin</button>
    //             <hr />
    //             <GoogleMap mapContainerStyle={mapContainerStyle}
    //                 zoom={14}
    //                 center={center}
    //                 options={options}
    //                 onLoad={onMapLoad}
    //             // onCLick={onMapClick}
    //             // old way below?
    //             // onClick={(event) => {
    //             //   setMarkers(current => [...current, {
    //             //     // problrem with latlng
    //             //     lat: event.latlng.lat(),
    //             //     lng: event.latlng.lng(),
    //             //     time: new Date(),
    //             //   },
    //             //   ]);
    //             // }}
    //             >
    //                 {/* {markers.map((marker) => (
    //               < Marker
    //                 key={marker.time.toISOString()}
    //                 position={{ lat: marker.lat, lng: marker.lng }}
    //                 onClick={() => {
    //                   setSelected(marker);
    //                 }}
    //                 icon={{
    //                   url: `../assets/heart_logo.png`,
    //                   origin: new window.google.maps.Point(0, 0),
    //                   anchor: new window.google.maps.Point(15, 15),
    //                   scaledSize: new window.google.maps.Size(30, 30),
    //                 }}
    //               />
    //             ))} */}
    //               />
    //                 {/* <Circle center={center} radius={1000} /> */}
    //             </GoogleMap>
    //             <hr />
    //             <Search reposition={reposition} />
    //             <Locate reposition={reposition} />
    //             <br />
    //         </div >
    //     )
    // }

    // // // function for Search Bar on Map (with Google auto complete for addresses)
    // function Search(reposition) {
    //     const { ready, value,
    //         suggestions: { status, data },
    //         setValue,
    //     } = usePlacesAutocomplete({
    //         requestOptions: {
    //             location: { lat: () => 32.715736, lng: () => -117.161087 },
    //             // radius is in meters (this will show 5km)
    //             radius: 5 * 1000
    //         }
    //     })

    //     return (
    //         <div className='search'>
    //             <Combobox aria-label="Location Suggestions"
    //                 onSelect={async (address) => {
    //                     setValue(address, false);
    //                     // clearSuggestion();
    //                     // not working
    //                     try {
    //                         const results = await getGeocode({ address });
    //                         const { lat, lng } = await getLatLng(results[0]);
    //                         console.log({ lat, lng });
    //                         // Error Here: Code retrieves correct lat,lng but will not use repostion function
    //                         reposition({ lat, lng });
    //                     } catch (error) {
    //                         console.log("error!")
    //                         // console.log(address)
    //                     }

    //                 }}
    //             >
    //                 <ComboboxInput value={value} onChange={(e) => {
    //                     setValue(e.target.value)
    //                 }}
    //                     disabled={!ready}
    //                     placeholder="Enter an address"
    //                 />
    //                 <ComboboxPopover>
    //                     <ComboboxList>
    //                         {status == "OK" && data.map(({ id, description }) => (
    //                             <ComboboxOption key={id} value={description} />
    //                         ))}
    //                     </ComboboxList>
    //                 </ComboboxPopover>
    //             </Combobox>
    //         </div>
    //     )
    // }




    // export default Mappage

    // working default code
    // return (
    //     <div className="mappage">
    //         <h4>Youve arrived at the map page</h4>
    //     </div>
    // )