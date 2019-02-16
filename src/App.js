import React, { Component } from 'react';
import Task from './Task.js';
import ToggleListButton from './ToggleListButton.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.scss'
library.add(faCheck, faTrash)



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

	removeTask(id) {
		this.setState({
			// .filter() devuelve un nuevo array de los elementos que pasan la condicion pasada en el parametro
			// en este caso, devuelve un arr con todos los elementos cuyo id sea diferente al id pasado x parametro
			tasks: this.state.tasks.filter(t => t.id !== id)
		})
	}

	toggleDone() {
		this.setState({
			done: !this.state.done
		})
	}

	render() {
		let taskList = this.state.tasks.map(function(t, i) {
			return <Task tasks={t} key={i} removeTask={() => this.removeTask()} toggleDone={() => this.toggleDone()}/>
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
					{taskList}
				</ul>
			
			</div>
		);
	}
}

export default App;