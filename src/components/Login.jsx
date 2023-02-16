import React from 'react'
import '../css/Login.css'

export const Login = () => {
    return (
        <div className="login">
            <form id="login_form" method="post">
                <div className="box">
                    <label htmlFor="user_id">Email / Phone No.</label>
                    <input type="text" id="user_id" placeholder="Enter Your Email ID or Phone Number" />
                </div>

                <div className="box">
                    <label htmlFor="pass">Password</label>
                    <div className="show_pass">
                        <input type="password" id="pass" className="show_hide" placeholder="Enter Your Password" />
                        <span className="show_hide_btn"><i className='bx bxs-show'></i></span>
                    </div>
                </div>

                <div className="box">
                    <label htmlFor="pin">Security Pin</label>
                    <div className="show_pin">
                        <input type="password" id="pin" className="show_hide" placeholder="Enter Your Security Pin" />
                        <span className="show_hide_btn"><i className='bx bxs-show'></i></span>
                    </div>
                </div>

                <div className="box box_btn">
                    <button className="login_btn" type="submit">LOGIN</button>
                    <span className="register_btn">REGISTER</span>
                </div>
            </form>
        </div>
    )
}
