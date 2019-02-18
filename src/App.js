import React, { Component } from 'react';
import Task from './Task.js';
import Form from './Form.js';
import ToggleListButton from './ToggleListButton.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.scss'
library.add(faCheck, faTrash)


class App extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			showList: true,
			newTask: '',
			tasks: [
				{ text: 'Lorem 1', done: true, id: 1 },
				{ text: 'Lorem 2', done: false, id: 2 },
			]
		}
	
		this.toggleDone = this.toggleDone.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.addTask = this.addTask.bind(this);
		this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
		this.toggleList = this.toggleList.bind(this)
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

	addTask(event) {
		event.preventDefault();
		if (this.state.newTask !== '') {
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

	toggleDone(id) {
		// .find() devuelve el primer elemento que cumple la condicion pasada en el parametro
		// en este caso, devuelve el elemento (t) cuyo id es igual al id pasado por parametro
		const task = this.state.tasks.find(t => t.id === id)
		task.done = !task.done
		this.setState({
			tasks: this.state.tasks
		})
	}


	render() {
		const taskList = this.state.tasks.map((t) => {
			return <Task task={t} key={t.id} removeTask={this.removeTask} toggleDone={this.toggleDone}/>
		})


		return (
			<div className='main-container'>

				{/* <form onSubmit={(e) => this.addTask(e)}>
					<input onChange={(e) => this.handleOnChangeInput(e)} value={this.state.newTask}/>
					<button>Nueva tarea</button>
				</form> */}

				<Form addTask={this.addTask} onChange={this.handleOnChangeInput} newTask={this.state.newTask}/>

				{/* passes the function toggleList as props */}
				<ToggleListButton showList={this.state.showList} toggle={this.toggleList}/>
				
				<ul className={this.state.showList ? 'show' : 'hide'}>
					{taskList}
				</ul>
			
			</div>
		);
	}
}

export default App;