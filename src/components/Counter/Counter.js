"use client"
import { useState } from "react";



const Counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>This is Next Counter App</h1>
            <h2>Counter: {counter}</h2>

            <button className="mr-10" onClick={() => setCounter(counter + 1)}>Increase</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;
