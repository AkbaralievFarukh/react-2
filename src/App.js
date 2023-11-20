import React, {useState} from "react";
import Button from "./Components/Button"
import button from "./Components/Button";
import Input from "./Components/Input";

function App() {
  return (
    <div>
        <div className="container">
            <h1 className={"text-center mt-5"}>Calculator</h1>
            <Input />
            <div className={"d-flex justify-content-center align-items-center gap-4 mt-4"}>
                <Button text={"+"} />
                <Button text={"-"} />
                <Button text={"*"} />
                <Button text={"/"} />
            </div>
            <h2 id={"result"} className={"text-center mt-5"}>Result: </h2>
        </div>
    </div>
  );
}

export default App;
