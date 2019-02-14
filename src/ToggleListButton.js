import React, { Component } from 'react';

class ToggleListButton extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return(
            // recieves by props (this.props.toggle) the function toggleList declared in App
            <button onClick={this.props.toggle}>Mostrar lista</button>
        )
    }
}

export default ToggleListButton