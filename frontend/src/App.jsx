import { useState } from 'react'
import './App.css'
// import ActivityWheel from './assets/components/ActivityWheel'
import { HashRouter, Routes, Route } from "react-router-dom"
import Homepage from './assets/pages/homepage'
import React from 'react'
import Mappage from './assets/pages/mappage'
import ActivityList from './assets/pages/ActivityList'
// import Activity from './assets/pages/Activity'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/activitymap' element={<Mappage />} />
          <Route path='/activities' element={<ActivityList />} />
          {/* <Route path='/activities/prizeId' element={<Activity />} /> */}
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
