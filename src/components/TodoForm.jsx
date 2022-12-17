import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        input: ''
    }

    handlerChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const newObject = {
            id: Math.floor(Math.random() * 1000),
            text: this.state.input
        }

        this.props.onSubmit(newObject)

        console.log('click todo form add task')

        this.setState({
            input: ''
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="write your task"
                    value={this.state.input}
                    onChange={this.handlerChange} />
                <button className='btn-addTask'>Add</button>
            </form>
        );
    }
}

export default TodoForm;