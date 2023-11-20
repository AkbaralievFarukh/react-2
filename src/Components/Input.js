import React from "react";
import Button from "./Button";

const Input = () => {
    return (
        <div className={"d-flex flex-column justify-content-center align-items-center gap-4 mt-5"}>
            <input type={"number"} id={"sum1"} placeholder={"Введите первое число"} className={"p-2 border-2"}/>
            <input type={"number"} id={"sum2"} placeholder={"Введите второе число"} className={"p-2 border-2"}/>
        </div>
    )
}

export default Input