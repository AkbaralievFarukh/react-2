import React from "react";
import "./Button.css"

const Button = ({text}) => {
    const handleCLick = () => {
        console.log({text})
    }
    return (
        <button className={'MyButton'} onClick={handleCLick}>
            {text}
        </button>
    )
}

export default Button