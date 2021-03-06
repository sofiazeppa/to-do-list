import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: ''
        }
    
        this.handleOnChangeInput = this.handleOnChangeInput.bind(this)
        this.addTask = this.addTask.bind(this);
    }

    handleOnChangeInput(e) {
        this.setState({
            newTask: e.target.value
        })
    }

	addTask(e) {
		e.preventDefault();
		if (this.state.newTask !== '') {
			const id = this.props.tasks.length === 0 ? (1) : this.props.tasks[this.props.tasks.length - 1].id + 1
			const newTask = {
				text: this.state.newTask,
				done: false,
				id: id
			}

            const tasks = this.props.tasks
            tasks.push(newTask)
            this.props.onChange(tasks)

			this.setState({
				newTask: ''
			})
		}

    }


    render() {
        return(
            <form onSubmit={this.addTask}>
                <input onChange={this.handleOnChangeInput} value={this.state.newTask}></input>
                <button>New task</button>
            </form>
        )
    }
}

export default Form