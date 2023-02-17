import React, { useState } from 'react'

export const TogglePassword = ({ inputId, inputText }) => {
    const [isVisible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!isVisible);
    };

    return (
        <div className="show_pin">
            <input type={!isVisible ? "password" : "text"} id={inputId} className="show_hide" placeholder={inputText.toString()}/>
            <span className="show_hide_btn" onClick={toggle}>
                {isVisible ? <i className='bx bxs-show'></i> : <i className='bx bxs-hide'></i>}
            </span>
        </div>
    );
}
