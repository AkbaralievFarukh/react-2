import React, {useState} from "react";
import Button from "./Components/Button/Button"
import button from "./Components/Button/Button";

function App() {
    const [state, setState] = useState(0)

    const handleIncrease = () => {
        setState(state + 1)
    }
    const handleDecrease = () => {
        const deagreaseBtn = document.querySelector('#deagreaseBtn')
        if (state === 0) {
            deagreaseBtn.setAttribute('disabled', true)
        } else {
            setState(state - 1)
            deagreaseBtn.setAttribute('disabled', false)
        }
    }
  return (
    <div>
        <h1>Hello</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease} id={'deagreaseBtn'}>Decrease</button>
        <h2>{state}</h2>
        {/*<Button text={"+"} />*/}
    </div>
  );
}

export default App;
