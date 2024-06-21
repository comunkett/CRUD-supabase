import { createContext, 
        // useEffect, 
        useState,
     } from "react";
import { supabase } from '../../supabase/client';
import PropTypes from 'prop-types';

export const ContextApi = createContext();

export const ContextApiProvider = ({children}) => {

      const [tasks, setTasks] = useState([]);
    
      const getTasks = async () => {
        try {
            const userResponse = await supabase.auth.getUser();
            if (userResponse.error) throw userResponse.error;

            const user = userResponse.data.user;
            const userMail = userResponse.data.user.email;
            if (!userMail) throw new Error("Usuario no autenticado");

            const { error, data } = await supabase
                .from("tasks")
                .select()
                .eq("userId", user.id);

            if (error) throw error;

            setTasks(data);
        } catch (error) {
            console.error("Error al obtener las tareas:", error.message);
        }
    };

    // Añadir una nueva tarea para el usuario actual
    const addTasks = async (taskName) => {
        try {
            const userResponse = await supabase.auth.getUser();
            if (userResponse.error) throw userResponse.error;

            const user = userResponse.data.user;
            if (!user) throw new Error("Usuario no autenticado");

            const {error} = await supabase
                .from("tasks")
                .insert({
                    name: taskName,
                    userId: user.id
                });

            if (error) throw error;

            // setTasks((prevTasks) => [...prevTasks, ...data]);
            
            // console.log([...data])
            setTasks([...tasks])

        } catch (error) {
            console.error("Error al añadir una tarea:", error.message);
        }
    };

    return <ContextApi.Provider value={{tasks, getTasks, addTasks}}>
        {children}
    </ContextApi.Provider>
}

ContextApiProvider.propTypes = {
    children: PropTypes.any, // Can be any React node
  };