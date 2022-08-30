import React, { Component } from "react";

class Dog extends Component {
    render() {
        console.log('Dog rendered!')
        return (
            <div>
                <h1>Dog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra dictum ullamcorper. Mauris nec facilisis orci. Etiam viverra urna sit amet purus accumsan commodo. Vivamus semper eget lacus mollis ultrices bollocks.</p>
            </div>
        );
    }
}

export default Dog;