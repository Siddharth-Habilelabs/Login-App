import React from 'react'
import { Link } from 'react-router-dom'

import { TogglePassword } from './TogglePassword'
import '../css/Login.css'


// login js
const loginUser = (e) => {
    e.preventDefault()

    const element = e.target
    console.log(element.pass.value);

    if (!localStorage.getItem('AccountData')) {
        alert("Local Storage is Empty!")
        return false
    }

    let authenticate = JSON.parse(localStorage.getItem('AccountData'))

    var checkUser = authenticate.filter(function (el) {
        return ((el.phone === element.user_id.value || el.email === element.user_id.value) &&
            (el.pass === element.pass.value) && (el.pin === element.pin.value))
    });

    if (!checkUser.length) {
        alert("User Not Found")
        return false
    }

    else {
        document.getElementById("login_form").reset();
        return alert("Login Successful")
    }
}


// login component
export const Login = () => {
    return (
        <div className="login">
            <form id="login_form" method="post" onSubmit={loginUser}>
                <div className="box">
                    <label htmlFor="user_id">Email / Phone No.</label>
                    <input type="text" id="user_id" placeholder="Enter Your Email ID or Phone Number" />
                </div>

                <div className="box">
                    <label htmlFor="pass">Password</label>
                    <TogglePassword
                        inputId={"pass"}
                        inputText={"Enter Your Password"}
                    />
                </div>

                <div className="box">
                    <label htmlFor="pin">Security Pin</label>
                    <TogglePassword
                        inputId={"pin"}
                        inputText={"Enter Your Security Pin"}
                    />
                </div>

                <div className="box box_btn">
                    <button className="login_btn" type="submit">LOGIN</button>
                    <span className="register_btn"><Link to="/register" exact="true">REGISTER</Link></span>
                </div>
            </form>
        </div>
    )
}
