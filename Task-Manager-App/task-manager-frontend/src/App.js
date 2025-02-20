import { useState,useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);


    // Fetch all tasks when the component mounts
    useEffect(() => {
          axios.get("http://localhost:3000/tasks")
          .then(response => setTasks(response.data))
          .catch(error => console.error("Error fetching tasks:", error));
          console.log(setTasks);
         
  }, []);
    
    const handleTaskCreated = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Task Manager</h1>
            <TaskForm onTaskCreated={handleTaskCreated} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
