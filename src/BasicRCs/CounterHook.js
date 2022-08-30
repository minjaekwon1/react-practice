import React, { useState } from "react";

function CounterHook() {
    // "useState()" rets 2 things:
    // 1. the piece of state
    // 2. func to update that piece of state
    const [count, setCount] = useState(0);
    // Can use destructuring to get the things we need
    return (
        <div>
            <h5>The Count Is: {count}</h5>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Add One</button>
        </div>
    )
}

export default CounterHook;