import { useState } from "react";
// import { supabase } from "../supabase/client";
import { useNewContext } from "../hooks/useNewContext";

const BoardToDo = () => {
    const [taskName, setTask] = useState("");

    const { addTasks } = useNewContext()
    // console.log(data)
    const handleSubmit = async (e) =>{
        e.preventDefault();
        addTasks(taskName)
       
    }

    return (
        <div className="virtual-b">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="task" 
                placeholder="give a task" 
                onChange={(e)=>setTask(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
    );
};

export default BoardToDo;