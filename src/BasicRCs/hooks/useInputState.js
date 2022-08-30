import { useState } from "react";

export default initVal => {
    // Gives a ref to the val in the "State" and way to manipulate it
    const [val, setVal] = useState(initVal);
    const handleChange = (e) => {
        setVal(e.target.value);
    }
    const reset = () => {
        setVal("");
    }
    return [val, handleChange, reset];
}