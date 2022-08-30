import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMoviesHook() {
    const [num, setNum] = useState(1);
    const [movie, setMovie] = useState("");
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://swapi.dev/api/films/${num}`)
            // W/o the 2nd arg "[num]", the line below results in an infinite loop as it causes "<h6>{movie.title}</h6>" to update resulting in a re-render, which makes "useEffect()" run again
            setMovie(response.data);
        }
        getData();
        // Can pass an arr as an opt 2nd arg, which tells "useEffect()" to only run if the arg's val(s) change
    }, [num])
    return (
        <div>
            <h5>Pick A Movie</h5>
            <h6>{movie.title}</h6>
            <p style={{ fontSize: "0.7em" }}>{movie.opening_crawl}</p>
            <select value={num} onChange={e => setNum(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div >
    )
}

export default SWMoviesHook;