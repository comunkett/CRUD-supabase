// import React from 'react';
import { useEffect } from "react";
import { useNewContext } from "../hooks/useNewContext";

const ToDoList = () => {
    const { tasks, getTasks } = useNewContext();

    useEffect(()=>{
        // getTasks(tasks)
     getTasks()
    
    },[]);


    return (
        <div>
            {
                tasks.map((task) =>(
                    <div key={task.id} className="tasklist show">
                      
                            <li>
                                {task.name}
                            </li>
                            <span>{JSON.stringify(task.done)}</span>
                
                    </div>
                ))
            }        
        </div>
    );
};

export default ToDoList;