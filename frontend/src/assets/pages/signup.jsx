import axios from "axios";

function SignUp(props) {

    const submitSignupForm = function (event) {
        // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
        event.preventDefault()
        console.log('submitted: ' + event.target[0].value, event.target[1].value)
        axios.post('/signup/', {
            'email': event.target[0].value,
            'password': event.target[1].value
        }).then((response) => {
            if (response.data.success == false) {
                alert('Failed to Sign Up')
                console.log("Sign Up did not work")
            }
            console.log('response from server: ', response)
            window.location.href = "../"
        })
    }

    return (
        <div class="signupFrom">
            <h1 id="welcome">Welcome to Date Roulette</h1>
            <h2>Fill in the form below to get started</h2>
            <form onSubmit={submitSignupForm}>
                <label for="email">Enter an Email </label>
                <input type="email" name="email" defaultValue="" />
                <br />
                <label for="password">Enter a Password </label>
                <input type="password" name="password" defaultValue="" />
                <br />
                <input type="submit" />
                <br />
            </form>
        </div>

    )
}


export default SignUp