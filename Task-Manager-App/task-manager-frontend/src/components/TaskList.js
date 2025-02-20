import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TaskList.css";

const TaskList = ({ tasks, setTasks }) => {

    if (!tasks || tasks.length === 0) {
        return <h2>No tasks available. Add a new task!</h2>;
    }

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/tasks/${id}`);
            setTasks(tasks.filter(task => task.id !== id));

        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    return (
        <div className="task-list-container">
            <h2>Task List  ({tasks.length}) </h2>
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        <div className="task-content">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                        <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
