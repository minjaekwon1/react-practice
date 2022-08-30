import React from "react";
import useToggle from "./hooks/useToggle";

function TogglerHook() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
    // Below code was moved to "useToggle.js"
    /* const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    }
    const toggleIsHeartbroken = () => {
        setIsHeartbroken(!isHeartbroken);
    } */
    return (
        <div>
            <h5 onClick={toggleIsHappy}>Are you happy? {isHappy ? "Yes" : "No"}</h5>
            <h5 onClick={toggleIsHeartbroken}>Are you heartbroken? {isHeartbroken ? "Yes" : "No"}</h5>
        </div>
    )
}

export default TogglerHook;