import React, { useReducer } from "react";

function ReactReducer() {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });
    return (
        <div>
            <h5>{state.count}</h5>
            {/* We call "dispatch", which is a func ret from "useReducer" gen from the "CountReducer" func we passed in, which rets some "state" based on the "action" param */}
            <button className="btn btn-primary mx-1" onClick={() => dispatch({
                type: "Increment", amount: 1
            })}>Add 1</button>
            <button className="btn btn-primary mx-1" onClick={() => dispatch({
                type: "Increment", amount: 5
            })}>Add 5</button>
            <button className="btn btn-primary mx-1" onClick={() => dispatch({
                type: "Decrement", amount: 1
            })}>Subtract 1</button>
            <button className="btn btn-primary my-1" onClick={() => dispatch({
                type: "Reset"
            })}>RESET</button>
        </div>
    )
}

function countReducer(state, action) {
    /*
    if (action.type === "Increment") return { count: state.count + action.amount }
    if (action.type === "Decrement") return { count: state.count - action.amount }
    */
    // Can also use switch stmts to accomplish the same thing
    switch (action.type) {
        case "Increment":
            return { count: state.count + action.amount };
        case "Decrement":
            return { count: state.count - action.amount };
        case "Reset":
            return { count: 0 };

    }
}

export default ReactReducer;