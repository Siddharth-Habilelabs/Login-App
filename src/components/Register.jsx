import React from 'react'

export const Register = () => {
    return (
        <div className="register">
            <form id="register" method="post">
                <div class="box">
                    <label for="r_name">NAME</label>
                    <input type="text" id="r_name" name="name" placeholder="Enter Your Name" />
                </div>

                <div class="box">
                    <label for="r_phone">PHONE NO.</label>
                    <input type="text" id="r_phone" name="phone" placeholder="Enter Your Phone Number" />
                </div>

                <div class="box">
                    <label for="r_email">EMAIL</label>
                    <input type="text" id="r_email" name="email" placeholder="Enter Your Email ID" />
                </div>

                <div class="box">
                    <label for="r_pass">PASSWORD</label>
                    <div>
                        <input type="password" id="r_pass" class="show_hide" name="pass" placeholder="Create A Password" />
                        <span class="show_hide_btn"><i class='bx bxs-show'></i></span>
                    </div>
                </div>

                <div class="box">
                    <label for="r_pin">SECURITY PIN</label>
                    <div class="generate_pin">
                        <input type="password" id="r_pin" class="show_hide" name="pin" placeholder="Generate Security Pin" readonly />
                        {/* <span onclick="securityPin()" class="generate_icon"><i class='bx bxs-cog'></i></span> */}
                        {/* <span class="show_hide_btn"><i class='bx bxs-show'></i></span> */}
                    </div>
                </div>

                <div class="box box_btn">
                    <span class="login_btn">SIGN UP</span>
                    <button class="register_btn" type="submit">REGISTER</button>
                </div>
            </form>
        </div>
    )
}
