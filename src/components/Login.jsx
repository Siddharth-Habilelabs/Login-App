import React from 'react'

export const Login = () => {
    return (
        <div className="login">
            <form id="login_form" method="post">
                <div class="box">
                    <label for="user_id">Email / Phone No.</label>
                    <input type="text" id="user_id" placeholder="Enter Your Email ID or Phone Number" />
                </div>

                <div class="box">
                    <label for="pass">Password</label>
                    <div class="show_pass">
                        <input type="password" id="pass" class="show_hide" placeholder="Enter Your Password" />
                        {/* <span class="show_hide_btn"><i class='bx bxs-show'></i></span> */}
                    </div>
                </div>

                <div class="box">
                    <label for="pin">Security Pin</label>
                    <div class="show_pin">
                        <input type="password" id="pin" class="show_hide" placeholder="Enter Your Security Pin" />
                        {/* <span class="show_hide_btn"><i class='bx bxs-show'></i></span> */}
                    </div>
                </div>

                <div class="box box_btn">
                    <button class="login_btn" type="submit">LOGIN</button>
                    <span class="register_btn">REGISTER</span>
                </div>
            </form>
        </div>
    )
}
