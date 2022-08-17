import axios from "axios";
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

function LogIn(props) {


    const submitLoginForm = (event) => {
        // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
        event.preventDefault()
        axios.post('/login/', {
            'email': event.target[0].value,
            'password': event.target[1].value
        })
            .then((response) => {
                console.log('response from server: ', response)
                window.location.href = "../#/wheelpage"
                window.location.reload()
                // create user seems to work now, but I cant login
            })
    }

    return (
        <div class="loginFrom">
            <h1 id="welcome">Welcome to Date Roulette</h1>
            <h2>Log Back In to Plan Your Date!</h2>
            <form onSubmit={submitLoginForm}>
                <label for="email">Enter your Email </label>
                <input type="email" name="email" defaultValue="" />
                <br />
                <label for="password">Enter your Password </label>
                <input type="password" name="password" defaultValue="" />
                <br />
                <input type="submit" />
                <br />
            </form>
        </div>

    )
}

export default LogIn