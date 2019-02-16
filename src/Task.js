import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Task extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li>
                <span>
                    {this.props.tasks.text}
                </span>
                <span>
                    <button onClick={this.props.toggleDone} className={this.props.done ? 'done' : 'notDone'}>
                        <FontAwesomeIcon icon='check' />
                    </button>
                    <button onClick={() => this.props.removeTask(this.props.tasks.id)}>
                        <FontAwesomeIcon icon='trash'/>                        
                    </button>
                </span>
            </li>
        )
    }
}

export default Task;