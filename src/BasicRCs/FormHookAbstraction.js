import React from "react";
import useInputState from "./hooks/useInputState";

export default function FormHookAbstraction() {
    const [email, updateEmail, resetEmail] = useInputState("");
    const [password, updatePassword, resetPassword] = useInputState("");
    return (
        <div>
            <h5>Your email is: {email}</h5>
            <input type="text" value={email} onChange={updateEmail} />
            <button className="btn btn-primary mx-1" onClick={resetEmail}>Reset</button>
            <h5 className="mt-2">Your password is: {password}</h5>
            <input type="text" value={password} onChange={updatePassword} />
            <button className="btn btn-primary mx-1" onClick={resetPassword}>Reset</button>
        </div>
    )
}