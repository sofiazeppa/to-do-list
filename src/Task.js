import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li>{this.props.tasks.text}, {this.props.tasks.done ? 'Hecha' : 'Pendiente'}</li>
        )
    }
}

export default Task;