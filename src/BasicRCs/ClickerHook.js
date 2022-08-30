import React, { useState, useEffect } from "react";

function ClickerHook() {
    const [count, setCount] = useState(0);
    // The Effect Hook lets you perform side effects in RCs
    // By default, it runs both after the 1st render & after every update
    //// Data fetching, setting up a subscription, and manually changing the DOM in RCs are all EX) of side effects
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default ClickerHook;