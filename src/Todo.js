import React from 'react'
import TodoList from './TodoList'

const Todo = ({ todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }

    return (
        <div>
            <label>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    readOnly
                    onChange={handleTodoClick}
                />
            </label>    
            {todo.name}
        </div>
  )
}

export default Todo