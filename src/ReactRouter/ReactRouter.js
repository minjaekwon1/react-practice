import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";

class ReactRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path="dog" element={< Dog />} />
                <Route path="about" element={< About />} />
                <Route path="contact" element={< Contact />} />
            </Routes>
        )
    }
}

export default ReactRouter;