import React from 'react';
// // import Hooks
import { useCallback, useState, useRef, useMemo } from 'react'

// // import Google Maps
import {
    GoogleMap,
    useLoadScript,
    Marker,
    Circle,
    MarkerCluster,
    InfoWindow
} from "@react-google-maps/api"

// Custom Map Styling
import mapStyles from '../../mapStyles';

import Locate from './Locate';
import Search from "./Search";
import homeheart from "../homeheart.png"
import houseicon from "../houseicon.png"
import date from "../date.png"

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function Map(props) {

    // Variable to find a location in Google Places
    const libraries = ["places"]

    // Sizes the map
    const mapContainerStyle = {
        width: "800px",
        height: "800px",
    }

    // Adds a default center to map on load (Default: Code Platoon HQ, Chicago IL)
    let center = { lat: 41.879930, lng: - 87.630710 }


    // customizes my Map style and widgets
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: true,
    }

    // script that loads Google Maps into App
    const { isLoaded, loadError } = useLoadScript({
        // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        // -=-= A D D   A P I   K E Y  T 0   B A C K E N D -=-=-=-=
        googleMapsApiKey: "AIzaSyDJoyNs_BRc2WOkSw9gmxvbGC-B_P2CWlY",
        libraries,
    });

    const mapRef = useRef();

    const getYelpData = props.getYelpData;

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
        getYelpData(props.activity)
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
        let newLat = lat;
        let newLng = lng
        console.log("new lat-lng " + newLat + newLng)
        center = { lat: newLat, lng: newLng }
        console.log("Great Success!")
    }, []);

    // Display message for rendering Map
    if (loadError) return "Error Loading Maps"
    if (!isLoaded) return "Loading Maps..."

    // const [show]
    // const locations = useMemo(() => generateActivityLocations(center), [center])

    // actual HTML to be displayed on page

    const dateLocations = props.businessLocations

    console.log("this is my bussiness Locations on the map page")
    // console.log(dateLocations[0])
    //  works!

    // close
    // for (let i = 0; i < dateLocations.length; i++) {
    //     return (
    //         <Marker key={i} position={dateLocations[i].coordiantes.value} />
    //     )
    // }

    // -=-=-=-=-=-=-=-=-Google Maps React Nearby place tutorial-=-=-=-=-=-
    // function getNearbyPlaces(center) {
    //     let request = {
    //         location: center,
    //         rankBy: google.maps.places.RankBy.DISTANCE,
    //         keyword: 'sushi'
    //     };

    //     service = new google.maps.places.PlacesService(map);
    //     service.nearbySearch(request, nearbyCallback);
    // }

    // // Handle the results (up to 20) of the Nearby Search
    // function nearbyCallback(results, status) {
    //     if (status == google.maps.places.PlacesServiceStatus.OK) {
    //         createMarkers(results);
    //     }
    // }

    // getNearbyPlaces(center)

    // function createMarkers(places) {
    //     places.forEach(place => {
    //         let marker = new google.maps.Marker({
    //             position: place.geometry.location,
    //             map: map,
    //             title: place.name
    //         });

    //         /* TODO: Step 4B: Add click listeners to the markers */

    //         // Adjust the map bounds to include the location of this marker
    //         bounds.extend(place.geometry.location);
    //     });
    //     /* Once all the markers have been placed, adjust the bounds of the map to
    //     * show all the markers within the visible area. */
    //     map.fitBounds(bounds);
    // }
    // -=-=-=-=-=-=-=-=-Google Maps React Nearby place tutorial-=-=-=-=-=-
    // let keyword = props.activity
    // let kword = keyword.keywords
    // console.log(kword)
    // const getYelpData = props.getYelpData;
    // getYelpData()

    // const [selectedLocation, setSelectedLocation] = useState(null)

    // const bean = { lat: 41.883228, lng: -87.632401 }

    return (
        <div className='MapBox'>
            <Locate panTo={panTo} center={center} />
            <div className="App">
                <Search panTo={panTo} center={center} />
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={14}
                    center={center}
                    options={options}
                    onLoad={onMapLoad}
                    onCenterChanged={<Marker position={center} />}
                >
                    {center && <Marker
                        position={center}
                        // draggable={true} this make the image movable but doesnt set new marker
                        icon={houseicon}
                    />}
                    {dateLocations && dateLocations.map((location) => {
                        console.log(location)
                        console.log("coordiantes inside my marker map: ", location.coordinates)
                        let newLat = location.coordinates.latitude
                        let newLng = location.coordinates.longitude
                        let newCoords = { lat: newLat, lng: newLng }
                        return (
                            <Marker
                                key={location.id}
                                position={newCoords}
                                icon={date}
                            />
                        )
                    })}
                </GoogleMap>
            </div >
        </div>
    )
}


export default Map



{/* {setSelectedLocation && (
                        <InfoWindow position={newCoords}>

                        </InfoWindow>
                    )} */}

                //     <>
                //     {center && <Marker
                //         position={center}
                //     // icon={houseicon}
                //     // how to resize?
                //     />}
                //     {/* <Circle center={center} radius={2200} /> */}
                // </>