import React from 'react'
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import Homepage from './assets/pages/homepage'
import Mappage from './assets/pages/mappage'
import ActivityList from './assets/pages/ActivityList'
import Wheelpage from './assets/pages/wheelpage'
// import Activity from './assets/components/Activity'
import axios from 'axios'
import SignUp from './assets/pages/signup'
import LogIn from './assets/pages/login'
// import home from './assets/home.png'


const getCSRFToken = () => {
  let csrfToken

  // the browser's cookies for this page are all in one string, separated by semi-colons
  const cookies = document.cookie.split(';')
  for (let cookie of cookies) {
    // individual cookies have their key and value separated by an equal sign
    const crumbs = cookie.split('=')
    if (crumbs[0].trim() === 'csrftoken') {
      csrfToken = crumbs[1]
    }
  }
  return csrfToken
}
console.log('token? ', getCSRFToken())
axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

function App() {

  // -=-=-=-=-=-=-=-=-=-=-=-=- USER FUNCTIONALITY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // forms
  // const getCSRFToken = () => {
  //   let csrfToken

  //   // the browser's cookies for this page are all in one string, separated by semi-colons
  //   const cookies = document.cookie.split(';')
  //   for (let cookie of cookies) {
  //     // individual cookies have their key and value separated by an equal sign
  //     const crumbs = cookie.split('=')
  //     if (crumbs[0].trim() === 'csrftoken') {
  //       csrfToken = crumbs[1]
  //     }
  //   }
  //   return csrfToken
  // }
  // console.log('token? ', getCSRFToken())
  // axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()


  // const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  const logOut = function (event) {
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault()
    axios.post('/logout/').then((response) => {
      console.log('response from server: ', response)
      whoAmI()
    })
  }

  const whoAmI = async () => {
    const response = await axios.get('/whoami')
    const user = response.data && response.data[0] && response.data[0].fields
    // const user = response.data[0].fields
    console.log('user from whoami? ', user, response)
    setUser(user)
    window.foo.bar.baz = 'error!'
  }

  useEffect(() => {
    whoAmI()
  }, [])

  // return html:

  {/* <div>
        <h1>Welcome to the Date Roulette</h1>
        <h4>{process.env.REACT_APP_GOOGLE_MAPS_API_KEY}</h4> 
        {user && <p>Welcome, {user.email}</p>}
        <button id="signup" onClick={submitSignupForm}>Sign Up</button>
        <button id="login" onClick={submitLoginForm}>Log In</button>
        <button id="logout" onClick={logOut}>Log Out</button>
       <button onClick={ActivityList}>Show Activities</button>
      </div>  */}
  {/* <Route path='/' element={<Homepage
          // submitSignupForm={submitSignupForm}
          // submitLoginForm={submitLoginForm}
          // logOut={logOut}
          />} /> */}

  // -=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  // // Activity Functionality
  const [activity, setActivity] = useState(null)
  // activity/setactivity can now be passed to any page as a prop


  return (
    <div className='App'>
      {/* <img class="homebutton" src={home} onClick="/" /> */}
      <br />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage
            user={user}
            setUser={setUser}
            // submitLoginForm={submitLoginForm}
            logOut={logOut}
          />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/wheelpage' element={<Wheelpage
            activity={activity}
            setActivity={setActivity}
            logOut={logOut}
            user={user}
            setUser={setUser}
          />} />
          <Route path='/wheelpage/activitymap' element={<Mappage
          />} />
          <Route path='/activities' element={<ActivityList />} />
          {/* <Route path='/activities/:id' element={<Activity />} /> */}
        </Routes>
      </HashRouter>
    </div >
  )
}

export default App
