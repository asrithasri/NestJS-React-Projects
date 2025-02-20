import axios from "axios";
import { useState } from "react";
import "./TaskForm.css";  // Import the CSS file

const TaskForm = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert("Title and Description cannot be empty!");  
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/tasks', { title, description });
            onTaskCreated(response.data);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error creating task:', error);
        };
    }


    return (
        <>
        <form className="task-form" onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
        {}
        </>
        
    );
};

export default TaskForm;
