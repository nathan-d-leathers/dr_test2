import React from 'react';
// // import Hooks
import { useCallback, useState, useRef } from 'react'

// // import Google Maps
import {
    GoogleMap,
    useLoadScript,
    Marker,
    Circle,
    MarkerCluster
} from "@react-google-maps/api"

// Custom Map Styling
import mapStyles from '../../mapStyles';

import Locate from './Locate';
import Search from "./Search";
import homeheart from "../homeheart.png"
import houseicon from "../houseicon.png"

// import express from 'express'

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

    // script that loads Google Maps into App
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:
            // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
            // -=-= A D D   A P I   K E Y  T 0   B A C K E N D -=-=-=-=
            libraries,
    });

    const mapRef = useRef();

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(12);
    }, []);

    // Display message for rendering Map
    if (loadError) return "Error Loading Maps"
    if (!isLoaded) return "Loading Maps..."

    // actual HTML to be displayed on page
    return (
        <div className='MapBox'>
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
                    <>
                        {center && <Marker
                            position={center}
                        // icon={houseicon}
                        // how to resize?
                        />}
                        <Circle center={center} radius={2200} />
                    </>
                </GoogleMap>
            </div >
        </div>
    )
}

export default Map