import { useState } from "react";

function useToggle(initVal = false) {
    const [st, setSt] = useState(initVal);
    const toggle = () => {
        setSt(!st);
    }
    // Ret the piece of state & a func to TOGGLE it 
    return [st, toggle];
}

export default useToggle;