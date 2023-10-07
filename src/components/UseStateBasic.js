import React from "react";
import {data} from "./data";


const UseStateBasic = () => {
    const [activities, setActivities] = React.useState(data);
    const removeSingleItem = (id) => {
        setActivities(activities.filter((activity) => id !== activity.id));
    }

    function deleteAllItems() {
        setActivities([]);
    }

    function submitTask(id) {
        let inputTask = document.getElementById("taskInput").value;
        activities.push({id: (id+1), name: inputTask});
        setActivities(activities.filter((activity) => activity.id !== -1));
        console.log(activities);
    }

    function generateAllItems() {
        setActivities(data);
    }

    return (
        <>
            <h2 className="heading">To-Do List</h2>
            <div className="outer-div">
                {activities.map((activity) => {
                    const {id, name} = activity;
                    return (
                        <div className="task" key={id}>
                            <h4 className="taskItem">{name}</h4>
                            <button className="btn" id={"removeOneBtn"}
                                    onClick={() => removeSingleItem(id)}>
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="outer-div" id={"removeAllDiv"}>
                <button className={"btn"} onClick={() => deleteAllItems()}>Delete All</button>
                <button className={"btn"} onClick={() => generateAllItems()}>Generate All</button>
            </div>
            <div className="outer-div taskInput">
                <input type="text" id={"taskInput"} className={"styled-input"}/>
                <button className={"btn"} onClick={() => submitTask(activities.length)}>Add Task</button>
            </div>
        </>
    );
}

export default UseStateBasic;