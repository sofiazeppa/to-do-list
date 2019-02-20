import React, { Component } from 'react';

class ToggleListButton extends Component {
    constructor(props) {
        super(props)
    
        this.toggleShowList = this.toggleShowList.bind(this)
    }

    toggleShowList() {
        this.props.onChange(!this.props.showList)
    }

    render() {
        return(
            // ejecutes a function that ejecutes the function passed as props, wich changes the state in App
            <button onClick={this.toggleShowList}>{this.props.showList ? 'Hide list' : 'Show list'}</button>
        )
    }
}

export default ToggleListButton