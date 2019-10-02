import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  addTodoToState = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  toggleCompletedOfTodo = (id) => {
    let todos = [...this.state.todos];

    for (let todo of todos) {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    }

    this.setState({
      todos: todos
    })
  }

  clearCompletedTodos = () => {
    let todos = this.state.todos.filter(todo=>{
      return !todo.completed
    })

    this.setState({
      todos:todos
    })

    
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList myTodoList={this.state.todos} toggleTodo={this.toggleCompletedOfTodo} />
        <TodoForm
          addTodo={this.addTodoToState}
          clearCompletedTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
