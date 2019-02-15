import React, { Component } from 'react';
import Task from './Task.js';
import ToggleListButton from './ToggleListButton.js';
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			showList: false,
			newTask: '',
			tasks: [
				{ text: 'Lorem 1', done: true, id: 1 },
				{ text: 'Lorem 2', done: false, id: 2 },
			]
		}
	}

	toggleList() {
		this.setState({
			showList: !this.state.showList
		})
	}

	handleOnChangeInput(e) {
		this.setState({
			newTask: e.target.value
		})
	}

	addTask() {
		if (this.state.newTask) {
			const lastId = this.state.tasks[this.state.tasks.length-1].id
			const newTask = {
				text: this.state.newTask,
				done: false,
				id: lastId + 1
			}
		
			this.setState({
				// operador de propagacion
				// spread operator

				tasks: [...this.state.tasks, newTask],
				newTask: ''
			})
		}
	}

	render() {
		let li = this.state.tasks.map(function(t) {
			return <Task tasks={t}/>
		})


		return (
			<div>

				<div>
					<input onChange={(e) => this.handleOnChangeInput(e)} value={this.state.newTask}/>
					<button onClick={() => this.addTask()}>Nueva tarea</button>
				</div>


				{/* passes the function toggleList as props */}
				<ToggleListButton toggle={() => this.toggleList()}/>
				
				<ul className={this.state.showList ? 'show' : 'hide'}>
					{li}
				</ul>
			
			</div>
		);
	}
}

export default App;