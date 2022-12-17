import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
    state = {
        todos: []
    }

    addTask = (task) => {
        console.log('add new task')
        console.log(task)

        if (!task.text || /^\s*$/.test(task.text)) {
            return;
        }

        const newTodos = [...this.state.todos, task]

        this.setState({
            todos: newTodos
        })
        console.log(newTodos)
    }
    //edit
    handleEdit = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        const updateTodo = this.state.todos.map(task =>
            task.id === todoId
                ? (task = newValue)
                : task)
        this.setState({
            todos: updateTodo
        })

    }
    //update

    //remove
    handlerRemove = id => {
        console.log('usun' + id)

        const removeArr = this.state.todos.filter(todo => todo.id !== id)

        this.setState({
            todos: removeArr
        })
    }


    render() {
        return (
            <div>
                <h2>Whats your plan for today?</h2>
                <TodoForm onSubmit={this.addTask} />

                <Todo todos={this.state.todos} removeItem={this.handlerRemove} editItem={this.handleEdit} />
            </div>
        );
    }
}

export default TodoList;