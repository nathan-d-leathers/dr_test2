import React from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import Homepage from './assets/pages/homepage'
import Mappage from './assets/pages/mappage'
import ActivityList from './assets/pages/ActivityList'
import Wheelpage from './assets/pages/wheelpage'
import SignUp from './assets/pages/signup'
import LogIn from './assets/pages/login'

// -=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const getCSRFToken = () => {
  let csrfToken
  const cookies = document.cookie.split(';')
  for (let cookie of cookies) {
    const crumbs = cookie.split('=')
    if (crumbs[0].trim() === 'csrftoken') {
      csrfToken = crumbs[1]
    }
  }
  return csrfToken
}
console.log('token? ', getCSRFToken())
axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

// -=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function App() {

  // -=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  const [activity, setActivity] = useState(null)

  const [user, setUser] = useState(null)

  const logOut = function (event) {
    event.preventDefault()
    axios.post('/logout/').then((response) => {
      console.log('response from server: ', response)
      whoAmI()
      window.location.href = "/"
      window.location.reload()
    })
  }

  const whoAmI = async () => {
    const response = await axios.get('/whoami/')
    const user = response.data && response.data[0] && response.data[0].fields
    console.log('user from whoami? ', user, response)
    setUser(user)
    window.foo.bar.baz = 'error!'
  }

  useEffect(() => {
    whoAmI()
  }, [])


  // console.log(activity)

  const [businesses, setBusinesses] = useState([])

  const getYelpData = async () => {
    const response = await axios.get('/yelpAPI/')
    console.log(response.data)
    console.log("It Worked!")
  }


  // const [keyword, setKeyword] = useState(null)

  // -=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage
            logOut={logOut}
          />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/wheelpage' element={<Wheelpage
            activity={activity}
            setActivity={setActivity}
          />} />
          <Route path='/wheelpage/activitymap' element={<Mappage
            getYelpData={getYelpData}
          />} />
          <Route path='/activities' element={<ActivityList />} />
        </Routes>
      </HashRouter>
    </div >
  )
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default App
