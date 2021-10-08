import React from 'react'

const TodoList = ({text, id, onSelect}) => {
    return (
        <div className='todolist'>
        <li>{text}</li>
        <i onClick={()=>onSelect(id)} class="fas fa-times"></i>
        </div>
    )
}

export default TodoList;
