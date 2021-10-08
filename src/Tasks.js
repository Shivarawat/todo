import React from 'react'
import { useRef, useEffect } from 'react';

const Tasks = ({tasks}) => {
    const handleClick = ()=>{
        taskEl.current.classList.toggle('completed');
        console.log(taskEl.current.classList);
    }
    const handleDelete = (id)=>{
        id = id-1;
        console.log(id);
        tasks.slice(id);
        console.log(tasks);
    }
    const taskEl = useRef(null);
    console.log(tasks);
    return (
        <div>
            {
                tasks.map((task)=>{
                    return (<div key={task} ref={taskEl} className='task'>
                    <h3>{task.header}</h3>
                    <i class="fas fa-check" onClick={handleClick}></i>
                    <i class="fas fa-trash" onClick={()=>handleDelete(task._id)}></i>
                </div>)
                })
            }
        </div>
    )
}

export default Tasks
