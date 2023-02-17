import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { TogglePassword } from './TogglePassword'
import '../css/Register.css'


// register new user
const newUser = (e) => {
    e.preventDefault()

    let userAccount

    if (!localStorage.getItem('AccountData')) {
        userAccount = []
    }

    else {
        userAccount = JSON.parse(localStorage.getItem('AccountData'))
    }

    const element = e.target
    let userData = {}

    var mailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
        numRegex = /[0-9]/,
        passRegex = /^(?=.\S)(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/


    // input validation
    if (element.r_name.value === "" || element.r_name.value.match(numRegex)) {
        alert("Enter valid Name");
        return false
    }

    if (isNaN(element.r_phone.value) || element.phone.value.length !== 10) {
        alert("Enter valid Phone Number");
        return false
    }

    if (!element.r_email.value.match(mailRegex)) {
        alert("Enter valid Email");
        return false
    }

    if (!passRegex.test(element.r_pass.value)) {
        alert("Password must include at least 1 Number and 1 Special Character and should be at least 8 Character long");
        return false
    }


    // loop to store input values
    for (let i = 0; i < element.length; i++) {
        if (element[i].tagName !== 'BUTTON') {


            // to store data
            userData = {
                ...userData,
                [e.target[i].name]: e.target[i].value
            }
        }
    }

    // check if user is already registered or not
    for (let i = 0; i < userAccount.length; i++) {
        if (userAccount[i].email === element.email.value ||
            userAccount[i].phone === element.phone.value) {
            alert("User Already Registered!")
            return false
        }
    }

    // push data to main array of objects (userAccount) 
    userAccount.push(userData)
    console.log(userAccount);

    const AccountData = JSON.stringify(userAccount)
    localStorage.setItem("AccountData", AccountData)

    document.getElementById("register").reset()
    return (alert("Account Created Successfully!"))
}

// generate captcha
const genCaptcha = () => {
    var captcha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let code = ""
    for (let i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * captcha.length)
        code += captcha.charAt(index)
    }

    document.getElementById("r_pin").value = code
}



// Register component
export const Register = () => {

    const [inputType, setInputType] = useState("password");

    const showHide = () => {
        inputType === "password" ? setInputType("text") : setInputType("password")
    }

    useEffect(() => {
        genCaptcha()
    }, []);

    return (
        <div className="register" onLoad={genCaptcha}>
            <form id="register" method="post" onSubmit={newUser}>
                <div className="box">
                    <label htmlFor="r_name">NAME</label>
                    <input type="text" id="r_name" name="name" placeholder="Enter Your Name" />
                </div>

                <div className="box">
                    <label htmlFor="r_phone">PHONE NO.</label>
                    <input type="text" id="r_phone" name="phone" placeholder="Enter Your Phone Number" />
                </div>

                <div className="box">
                    <label htmlFor="r_email">EMAIL</label>
                    <input type="text" id="r_email" name="email" placeholder="Enter Your Email ID" />
                </div>

                <div className="box">
                    <label htmlFor="r_pass">PASSWORD</label>
                    <TogglePassword
                        inputId={"r_pass"}
                        inputText={"Enter Your Password"}
                    />
                </div>

                <div className="box">
                    <label htmlFor="r_pin">SECURITY PIN</label>
                    <div className="generate_pin">
                        <input type={inputType} id="r_pin" className="show_hide" name="pin" placeholder="Generate Security Pin" readOnly />
                        <span className="generate_icon" onClick={genCaptcha}><i className='bx bxs-cog'></i></span>
                        <span className="show_hide_btn" onClick={showHide}>
                            {inputType === 'text' ? <i className='bx bxs-show'></i> : <i className='bx bxs-hide'></i>}
                        </span>
                    </div>
                </div>

                <div className="box box_btn">
                    <span className="login_btn"><Link to="/login" exact="true">LOGIN</Link></span>
                    <button className="register_btn" type="submit">REGISTER</button>
                </div>
            </form>
        </div>
    )
}
