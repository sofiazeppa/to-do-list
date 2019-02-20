import React, { Component } from 'react';
import ToggleDoneButton from './ToggleDoneButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        {this.props.task.done ? <FontAwesomeIcon icon='ellipsis-h'/> : <FontAwesomeIcon icon='check'/>}
                    </button>
                    {/* <ToggleDoneButton task={this.props.task.id} tasks={this.props.tasks}/> */}
                    <button onClick={() => this.props.removeTask(this.props.task.id)}>
                        <FontAwesomeIcon icon='trash'/>                        
                    </button>
                </span>
            </li>
        )
    }
}

export default Task;