import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class RemoveTaskButton extends Component {
    
    removeTask(id) {
        // .filter() devuelve un nuevo array de los elementos que pasan la condicion pasada en el parametro
        // en este caso, devuelve un arr con todos los elementos cuyo id sea diferente al id pasado x parametro
        this.props.onChange(this.props.tasks.filter(t => t.id !== id))
    }

    render() {
        return(
            <button onClick={() => this.removeTask(this.props.task.id)}>
                <FontAwesomeIcon icon='trash'/>                        
            </button>
        )
    }
}

export default RemoveTaskButton;