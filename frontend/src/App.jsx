import React from 'react'
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
// import React from 'react';
// // import Hooks
// import { useCallback, useState, useRef } from 'react'

// // import Google Maps
// import {
//   // GoogleMap,
//   // useLoadScript,
// } from "@react-google-maps/api"


// import for Geolocating and Search Bar suggestions
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete"


// // // import Combo Box for Search Results List
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption
// } from "@reach/combobox"

// // // Import Combobox CSS
// import "@reach/combobox/styles.css";

// // Custom Map Styling
// import mapStyles from './mapStyles'

// // import App related CSS
// import './App.css'

// Not Sure if Nessacary
// import { clearSuggestions } from 'use-places-autocomplete';
import Homepage from './assets/pages/homepage'
import Mappage from './assets/pages/mappage'
import ActivityList from './assets/pages/ActivityList'

// import homeheart from "./assets/homeheart.png"

function App() {

  // -=-=-=-=-=-=-=-=-=-=-=- WHEEL FUNCTIONALITY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  // const wheeldata = [
  //   // 38 options, ordered in the style of traditional american roulette wheels
  //   { option: '28', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '9', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '26', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '30', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '11', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '7', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '20', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '32', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '17', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '5', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '22', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '34', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '15', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '3', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '24', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '36', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '13', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '1', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '00', style: { backgroundColor: 'green', textColor: 'black' } },
  //   { option: '27', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '10', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '25', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '29', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '12', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '8', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '19', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '31', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '18', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '6', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '21', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '33', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '16', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '4', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '23', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '35', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '14', style: { backgroundColor: 'red', textColor: 'black' } },
  //   { option: '2', style: { backgroundColor: 'black', textColor: 'white' } },
  //   { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  // ]

  // const [mustSpin, setMustSpin] = useState(false);
  // const [prizeNumber, setPrizeNumber] = useState(0);

  // const handleSpinClick = () => {
  //   const newPrizeNumber = Math.floor(Math.random() * wheeldata.length)
  //   setPrizeNumber(newPrizeNumber)
  //   setMustSpin(true)
  //   console.log(prizeNumber)
  // }

  // const onStopSpinning = () => {
  //   setMustSpin(false)
  // }


  // -=-=-=-=-=-=-=-=-=-=-=- WHEEL FUNCTIONALITY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  // -=-=-=-=-=-=-=-=-=-=-=-=- MAP FUNCTIONALITY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  // // Variable to find a location in Google Places
  // // const libraries = ["places"]

  // // Sizes the map
  // const mapContainerStyle = {
  //   width: "700px",
  //   height: "700px",
  // }

  // // Adds a default center to map on load (Default: Code Platoon HQ, Chicago IL)
  // const center = {
  //   lat: 41.879930,
  //   lng: -87.630710,
  // }

  // // customizes my Map style and widgets
  // const options = {
  //   styles: mapStyles,
  //   disableDefaultUI: true,
  //   zoomControl: true,
  //   scaleControl: true,
  // }

  // // script that loads Google Maps into App

  // const mapRef = useRef();

  // const onMapLoad = useCallback((map) => {
  //   mapRef.current = map;
  // }, []);

  // const panTo = useCallback(({ lat, lng }) => {
  //   mapRef.current.panTo({ lat, lng });
  //   mapRef.current.setZoom(12);
  // }, []);




  // -=-=-=-=-=-=-=-=-=-=-=-=- MAP FUNCTIONALITY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=





  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage
          // wheeldata={wheeldata}
          // mustSpin={mustSpin}
          // prizeNumber={prizeNumber}
          // handleSpinClick={handleSpinClick}
          // onStopSpinning={onStopSpinning}
          />} />
          <Route path='/activitymap' element={<Mappage />} />
          <Route path='/activities' element={<ActivityList />} />
          {/* <Route path='/activities/prizeId' element={<Activity />} /> */}
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
