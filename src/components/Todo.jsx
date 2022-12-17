import React, { Component } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import TodoForm from './TodoForm';


class Todo extends Component {
    state = {
        edit: {
            id: null,
            value: ''
        }
    }

    submitUpdate = value => {
        this.props.editItem(this.state.edit.id, value)

        this.setState({
            edit: {
                id: null,
                value: ''
            }
        })
    }



    render() {
        console.log(this.state.edit.id + ' this state edit')
        if (this.state.edit.id) {
            return <TodoForm onSubmit={this.submitUpdate} />
        }
        return (
            this.props.todos.map((todo, index) => (
                <div className='todo-item' key={index}>
                    <div key={todo.id}>
                        {todo.text}
                    </div>
                    <div className="icons">
                        <TiEdit style={{ cursor: 'pointer', fontSize: '20px', marginRight: '10px' }} onClick={() => this.setState({
                            edit: {
                                id: todo.id,
                                value: todo.text
                            }
                        })} />
                        <RiCloseCircleLine style={{ cursor: 'pointer', fontSize: '20px' }} onClick={() => this.props.removeItem(todo.id)} />

                    </div>
                </div>
            ))
        );
    }
}

export default Todo;