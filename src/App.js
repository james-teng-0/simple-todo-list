import React, { useState } from 'react';
import './App.css';


function App() {
    const [tasksList, setTasks] = useState([]);

    const addTask = (newTask) => setTasks([...tasksList, newTask]);

    function handleSubmit(e) {
        e.preventDefault(); // prevent page from refreshing
        let taskName = document.getElementById("task").value;
        if (taskName.length > 0) {
            addTask(taskName);
        }
        document.getElementById("task").value = ''; // reset input field
    }

    function handleClick(e) {
        // delete parent li container
        e.currentTarget.parentNode.remove();
    }
    
    return (   
        <div className="main-background"> 
            <div className="tasks-background">
                <h1 className="main-header">My Todo List.</h1>
                <div className='row'>
                    <div className="column"> 
                        <ul className="task-list">
                            {tasksList.map((task) => (
                                    <li className='' draggable='true'> <input className="taskCheckbox" type="checkbox" onClick={handleClick}/> {task} </li> 
                                ))
                            }
                        </ul>
                    </div>

                    <div className="column">

                    </div>

                </div>
                <form className="form" onSubmit = {handleSubmit}> 
                    <input id="task" type="text"/>
                    <input id="submit" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default App;
