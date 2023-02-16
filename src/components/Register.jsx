import React from 'react'
import '../css/Register.css'

export const Register = () => {
    return (
        <div className="register">
            <form id="register" method="post">
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
                    <div>
                        <input type="password" id="r_pass" className="show_hide" name="pass" placeholder="Create A Password" />
                        <span className="show_hide_btn"><i className='bx bxs-show'></i></span>
                    </div>
                </div>

                <div className="box">
                    <label htmlFor="r_pin">SECURITY PIN</label>
                    <div className="generate_pin">
                        <input type="password" id="r_pin" className="show_hide" name="pin" placeholder="Generate Security Pin" readOnly />
                        <span className="generate_icon"><i className='bx bxs-cog'></i></span>
                        <span className="show_hide_btn"><i className='bx bxs-show'></i></span>
                    </div>
                </div>

                <div className="box box_btn">
                    <span className="login_btn">SIGN UP</span>
                    <button className="register_btn" type="submit">REGISTER</button>
                </div>
            </form>
        </div>
    )
}
