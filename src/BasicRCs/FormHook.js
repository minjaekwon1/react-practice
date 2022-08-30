import React, { useState } from "react";

export default function FormHook() {
    const [email, setEmail] = useState("");
    // "e" is an "Event" interface that reps an event which takes place in the DOM
    // An event can be triggered by the user action like clicking or typing or gen by APIs
    // "e.target" is a prop of the "Event" interface that is a ref to the obj onto which the event was dispatched
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <h5>The value is: {email}</h5>
            <input type="text" value={email} onChange={handleChange} />
            <button className="btn btn-primary mx-1" onClick={() => setEmail("")}>Submit</button>
        </div>
    )
}