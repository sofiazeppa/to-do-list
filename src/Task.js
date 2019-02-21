import React, { Component } from 'react';
import ToggleDoneButton from './ToggleDoneButton.js';
import RemoveTaskButton from './RemoveTaskButton.js';

class Task extends Component {

    render() {
        return(
            <li>
                <span className={[this.props.task.done ? 'done' : 'notDone', 'task-text'].join(' ')}>
                    {this.props.task.text}
                </span>
                <span className='task-buttons'>
                    <ToggleDoneButton task={this.props.task} tasks={this.props.tasks} onChange={this.props.onChange}/>
                    <RemoveTaskButton task={this.props.task} tasks={this.props.tasks} onChange={this.props.onChange}/>
                </span>
            </li>
        )
    }
}

export default Task;