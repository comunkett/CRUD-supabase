import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import BoardToDo from "../components/BoardToDo";
// import { useNewContext } from "../hooks/useNewContext"; // Funciona pero se renderiza mucho, RESOLVER!
import ToDoList from '../components/ToDoList';

const Home = () => {

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if(!supabase.auth.getUser()){
    //         navigate('/login')
    //     }
    //     // console.log(supabase.auth.getUser())
    // },[navigate])

    // const signOut = () => {
    //       const sessionOut =  supabase.auth.signOut()
    //         if(sessionOut.error) throw Error('something went wrong')
    // }

    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error || !data.user) {
                navigate('/login');
            }
        };
        checkUser();
    }, []);

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error during sign out:', error.message);
            alert('Something went wrong while signing out. Please try again.');
        } else {
            navigate('/login'); // Navigate to login page after successful sign out
        }
    };

    return (
        <div className="virtual-h">
            <h1>componente Home</h1>
            <button onClick={signOut}>
                Logout
            </button>
            <BoardToDo/>
            <ToDoList/>
        </div>
    );
};

export default Home;