import React from 'react';

class TodoForm extends React.Component {

    render () {
        return (
            <div> 
                <input type='text' placeholder='add todo here'/>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;