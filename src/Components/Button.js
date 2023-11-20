import React from "react";
const Button = ({text}) => {
    const handlerCalculate = () => {
        const sum1 =document.querySelector('#sum1')
        const sum2 = document.querySelector('#sum2')
        const result = document.querySelector('#result')
        if(text === '+') {
            const sum = +sum1.value + +sum2.value
            result.innerHTML = `Result: ${sum}`
        } else if(text === '-') {
            const sum = +sum1.value - +sum2.value
            result.innerHTML = `Result: ${sum}`
        } else if(text === '*') {
            const sum = +sum1.value * +sum2.value
            result.innerHTML = `Result: ${sum}`
        } else if(text === '/') {
            const sum = +sum1.value / +sum2.value
            result.innerHTML = `Result: ${sum}`
        }
    }
    return (
        <button className={"btn btn-primary"} onClick={handlerCalculate}>
            {text}
        </button>
    )
}

export default Button