import React, { Component } from 'react';
import Task from './Task.js';
import Form from './Form.js';
import ToggleListButton from './ToggleListButton.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
library.add(faCheck, faTrash, faEllipsisH);


class App extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			showList: true,
			tasks: JSON.parse(localStorage.getItem('tasks')) || 
				[{
					text: 'make a list',
					done: true,
					id: 1
				}]
		}
	
		this.updateTasks = this.updateTasks.bind(this);
		this.updateShowList = this.updateShowList.bind(this);
	}

	updateShowList(s) {
		this.setState({
			showList: s
		})
	}

	updateTasks(t) {
		this.setState({
			tasks: t
		})

		localStorage.setItem('tasks', JSON.stringify(t))
	}


	render() {
		let taskList = JSON.parse(localStorage.getItem('tasks'));
		taskList = taskList.map((t) => {
			return <Task tasks={this.state.tasks} task={t} key={t.id} onChange={this.updateTasks}/>
		})

		return (
			<div className='main-container'>
				<h1>To do list</h1>
				<h2>with React and localStorage</h2>

				<Form tasks={this.state.tasks} onChange={this.updateTasks}/>

				<ToggleListButton showList={this.state.showList} onChange={this.updateShowList}/>
				
				<ul className={this.state.showList ? 'show' : 'hide'}>
					{taskList}
				</ul>
			
			</div>
		);
	}
}

export default App;