import React, { useState } from 'react';
import './Exo1.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
        }
    };

    const checkTask = (index) => {
        const updatedTasks = tasks.slice();
        if (updatedTasks[index]) {
            const taskToMove = updatedTasks[index];
            taskToMove.completed = true;
            setCompletedTasks([taskToMove]);
            updatedTasks.splice(index);
            setTasks(updatedTasks);
        }
    };

    const uncheckTask = (index) => {
        const updatedCompletedTasks = completedTasks.slice();
        if (updatedCompletedTasks[index]) {
            const taskToMove = updatedCompletedTasks[index];
            taskToMove.completed = false;
            setTasks([taskToMove]);
            updatedCompletedTasks.splice(index);
            setCompletedTasks(updatedCompletedTasks);
        }
    };

    return (
        <div id='todo'>
            <h1>Todo List by "Le N"</h1>

            <div id='todo-container'>
                <input
                    type="text"
                    placeholder="Nouvelle tâche"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button id='button' onClick={addTask}>+</button>
            </div>
            <div id='todo-tasks'>
                {tasks.map((task, index) => (
                    <p key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => checkTask(index)}
                        />
                        {task.text}
                    </p>
                ))}
            </div>
            <div id='completed-tasks'>
                <h2>--------------</h2>
                {completedTasks.map((task, index) => (
                    <p key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => uncheckTask(index)}
                        />
                        <span style={{ textDecoration: 'line-through', color: 'gray' }}>{task.text}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
