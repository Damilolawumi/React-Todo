import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            currentTodo: '',
        }
    }

    onInputChange = (event) => {

        this.setState({
            currentTodo: event.target.value
        })
    }
    add = () => {
        let todoObject = {
            task: this.state.currentTodo,
            id: Date.now(),
            completed: false
        }
        this.setState({
            currentTodo: '',
        })

        this.props.addTodo(todoObject)
    }

    render() {
        return (
            <div>

                <input
                    type='text'
                    placeholder='add todo here'
                    value={this.state.currentTodo}
                    onChange={this.onInputChange}
                />
                < button onClick={this.add} >Add Todo</ button>
                < button >Clear Completed</ button>

            </div>
        )
    }
}

export default TodoForm;

