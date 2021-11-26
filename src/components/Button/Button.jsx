import React from 'react'
import "./Button.css"

const Button = ( props) => {
    return (
        <button className={`button-navbar ${props.cor}`}>{props.children}</button>
    )
}

export default Button
