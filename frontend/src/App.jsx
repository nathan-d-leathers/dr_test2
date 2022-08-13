import React from 'react'
import './App.css'
import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import Homepage from './assets/pages/homepage'
import Mappage from './assets/pages/mappage'
import ActivityList from './assets/pages/ActivityList'
// import Activity from './assets/pages/Activity'

function App() {

  // -=-=-=-=-=-=-=-=-=-=-=- WHEEL FUNCTIONALITY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  const wheeldata = [
    // 38 options, ordered in the style of traditional american roulette wheels
    { option: '28', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '9', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '26', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '30', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '11', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '7', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '20', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '32', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '17', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '5', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '22', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '34', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '15', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '3', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '24', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '36', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '13', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '1', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '00', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '27', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '10', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '25', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '29', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '12', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '8', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '19', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '31', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '18', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '6', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '21', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '33', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '16', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '4', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '23', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '35', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '14', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '2', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  ]

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * wheeldata.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
    console.log(prizeNumber)
    // spinCount += 1;
  }

  // -=-=-=-=-=-=-=-=-=-=-=- WHEEL FUNCTIONALITY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=






  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage
            wheeldata={wheeldata}
            mustSpin={mustSpin}
            prizeNumber={prizeNumber}
            handleSpinClick={handleSpinClick}
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
