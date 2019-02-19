import React, { Component } from 'react';
import Task from './Task.js';
import Form from './Form.js';
import ToggleListButton from './ToggleListButton.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import './App.scss'
library.add(faCheck, faTrash, faEllipsisH)


class App extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			showList: true,
			tasks: [
				{ text: 'Lorem 1', done: true, id: 1 },
				{ text: 'Lorem 2', done: false, id: 2 },
			]
		}
	
		this.toggleDone = this.toggleDone.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.toggleList = this.toggleList.bind(this);
		this.updateTasks = this.updateTasks.bind(this);
	}

	toggleList() {
		this.setState({
			showList: !this.state.showList
		})
	}

	updateTasks(t) {
		this.setState({
			tasks: t
		})
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

				<Form tasks={this.state.tasks} onChange={this.updateTasks}/>

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