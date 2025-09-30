import { createContext , useState ,  useCallback , useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskContext = createContext({
    tasks: [],
    addTask: (task) => {},
    toggleTaskCompletion: (taskId) => {},
    deleteTask: (taskId) => {},
});



export const TaskProvider = ({children})=>{
    const [tasks , setTasks] = useState([]);


    // Load Tasks from AsyncStorage on mount
    useEffect(() => {

        const loadTasks = async () => {
            try{
                const storedTasks = await AsyncStorage.getItem("tasks");
                if(storedTasks){
                    setTasks(JSON.parse(storedTasks));
                }
            }
            catch(e){
                console.error("Failed to load tasks from storage", e);
            }
        }
        loadTasks();

    },[])

    // Save Tasks to AsyncStorage whenever tasks change

    useEffect( () => {
        const saveTasks = async () =>{
            try{
                await AsyncStorage.setItem("tasks" , JSON.stringify(tasks));
            }
            catch(e){
                console.error("Failed to save tasks to storage", e);
            }
        }
        if(tasks.length > 0 ) saveTasks();


    },[tasks]);


    const addTask = useCallback((task)=>{
        setTasks((prev)=>[...prev, { id: Date.now() , completed: false , ...task}]);
    },[])

    const toggleTaskCompletion = useCallback((taskId)=>{
        setTasks((prev) => prev.map(task => {
            if(task.id === taskId){
                return {...task , completed: !task.completed};
            }
            return task;
        }))
    },[]);

    const deleteTask = useCallback((taskId)=>{
        setTasks((prev) => prev.filter(task => task.id !== taskId));
    },[]);

    return (
        <TaskContext.Provider value = {{ tasks , addTask , toggleTaskCompletion , deleteTask}} > 
            {children}
        </TaskContext.Provider>
    )

    


}
