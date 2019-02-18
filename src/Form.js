import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <form onSubmit={this.props.addTask}>
                <input onChange={this.props.onChange} value={this.props.newTask}/>
                <button>Nueva tarea</button>
            </form>
        )
    }
}

export default Form