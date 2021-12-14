import React, { useState } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import ScriptTag from 'react-script-tag';

function App() {
    const [tasksList, setTasks] = useState([]);
    const addTask = (newTask) => setTasks([...tasksList, newTask]);

    const [doneList, setDone] = useState([]);

    function handleSubmit(e) {
        e.preventDefault(); // prevent page from refreshing
        let taskName = document.getElementById("task").value;
        if (tasksList.includes(taskName)) {
            alert("This task already exists! :(")
            return;
        }
        if (taskName.length > 0) {
            addTask(taskName);
        }
        document.getElementById("task").value = ''; // reset input field
    }

    function handleOnDragEnd(e) {
        console.log(e);
        // handling if inserting into null destination
        if (e.destination == null) {
            return;
        }
        // if source is tasks
        if (e.source.droppableId === "tasks") {
            // if dest is done
            if (e.destination.droppableId === "done") {
                const items = Array.from(tasksList);
                const dest_items = Array.from(doneList);

                // remove from array and get the returned item
                const [reorderedItem] = items.splice(e.source.index, 1)

                // get destination and insert into destination index
                dest_items.splice(e.destination.index, 0 , reorderedItem);
                // update state
                setTasks(items);
                setDone(dest_items);
            }
            // if dest is tasks
            else if (e.destination.droppableId === "tasks") {
                const items = Array.from(tasksList);

                // remove from array and get the returned item
                const [reorderedItem] = items.splice(e.source.index, 1)
                
                // get destination and insert into destination index
                items.splice(e.destination.index, 0, reorderedItem);
                // update state
                setTasks(items);
            }
        }
        // if source is done
        else if (e.source.droppableId === "done") {
            // if dest is done
            if (e.destination.droppableId === "done") {
                const dest_items = Array.from(doneList);

                // remove from array and get the returned item
                const [reorderedItem] = dest_items.splice(e.source.index, 1);

                // get destination and insert into destination index
                dest_items.splice(e.destination.index, 0 , reorderedItem);
                // update state
                setDone(dest_items);
            }
            // if dest is tasks
            else if (e.destination.droppableId === "tasks") {
                const items = Array.from(tasksList);
                const dest_items = Array.from(doneList);

                // remove from array and get the returned item
                const [reorderedItem] = dest_items.splice(e.source.index, 1);
                // get destination and insert into destination index
                items.splice(e.destination.index, 0, reorderedItem);
                // update state
                setDone(dest_items);
                setTasks(items);
            }
        }
    }
    
    function handleDelete(e) {
        const dest_items = Array.from(doneList);
        const taskText = e.currentTarget.parentElement.innerText;
        dest_items.splice(dest_items.indexOf(taskText), 1);     
        setDone(dest_items);       
    }

    return (   
        <div className="main-background"> 
            <ScriptTag isHydrating={true} type="text/javascript" src="https://kit.fontawesome.com/ec413d8557.js" />
            <div className="tasks-background">
                <div className='row'>   
                    <DragDropContext onDragEnd={handleOnDragEnd}> 
                    <div className="column" id='column-1'>
                        <h1 className="c1-title"> todo. </h1> 
                            <Droppable droppableId='tasks'>
                                {(provided) => (
                                    <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                                        {tasksList.map((task) => {
                                            let index = tasksList.indexOf(task)
                                            return (
                                                <Draggable key={toString(index + 50)} draggableId={(index + 50).toString()} index={index}> 
                                                    {(provided) => (       
                                                        <li className="tasksRow" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 
                                                            {task} 
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ); 
                                        })}
                                        {provided.placeholder}
                                    </ul>   
                                )}  
                            </Droppable>
                            <form className="form" onSubmit = {handleSubmit}> 
                                <input id="task" placeholder='Add a task.' type="text"/>
                                <input id="submit" type="submit"/>
                            </form>

                    </div>

                    <div className="column" id='column-2'>
                        <h1 className="c2-title"> done. </h1>
                            <Droppable droppableId ='done'>
                                {(provided) => (
                                    <ul className="done" {...provided.droppableProps} ref={provided.innerRef}>
                                        {doneList.map((done) => {
                                            let index = doneList.indexOf(done)
                                            return (
                                                <Draggable key={toString(index + 100)} draggableId={(index + 100).toString()} index={index}>
                                                    {(provided) => (
                                                        <li className="doneRow" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 
                                                            {done} 
                                                            <button type="button" onClick={handleDelete} className='delete'><i class="fas fa-trash-alt"></i></button>
                                                        </li> 
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>

                    </div>
                    </DragDropContext>

                </div>
            </div>
        </div>
    )
}

export default App;
