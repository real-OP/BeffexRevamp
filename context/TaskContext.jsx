import { createContext , useState ,  useCallback } from "react";

export const TaskContext = createContext({
    tasks: [],
    addTask: (task) => {},
    toggleTaskCompletion: (taskId) => {},
    deleteTask: (taskId) => {},
});

export const TaskProvider = ({children})=>{
    const [tasks , setTasks] = useState([]);

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
