import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Task extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className='task'>
                <span className={[this.props.task.done ? 'done' : 'notDone', 'task-text'].join(' ')}>
                    {this.props.task.text}
                </span>
                <span className='task-buttons'>
                    <button onClick={() => this.props.toggleDone(this.props.task.id)}>
                        <FontAwesomeIcon icon='check' />
                    </button>
                    <button onClick={() => this.props.removeTask(this.props.task.id)}>
                        <FontAwesomeIcon icon='trash'/>                        
                    </button>
                </span>
            </li>
        )
    }
}

export default Task;