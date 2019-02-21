import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ToggleDoneButton extends Component {

	toggleDone(id) {
		// .find() devuelve el primer elemento que cumple la condicion pasada en el parametro
		// en este caso, devuelve el elemento (t) cuyo id es igual al id pasado por parametro
		const task = this.props.tasks.find(t => t.id === id)
        task.done = !task.done
        
        this.props.onChange(this.props.tasks)
	}

    render() {
        return(

            <button onClick={() => this.toggleDone(this.props.task.id)}>
                {this.props.task.done ? <FontAwesomeIcon icon='ellipsis-h'/> : <FontAwesomeIcon icon='check'/>}
            </button>
        
        )
    }
}

export default ToggleDoneButton;