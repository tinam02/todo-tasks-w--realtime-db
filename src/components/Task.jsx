import React, { useState } from "react";
import Tasksservices from "../services/Tasksservices";

const Task = (props) => {
  const initialTaskState = {
    key: null,
    title: "",
    desc: "",
    execute: false,
  };

  const [currentTask, setCurrentTask] = useState(initialTaskState);
  const [poruka, setPoruka] = useState("");

  const { task } = props;

  if (currentTask.key !== task.key) {
    setCurrentTask(task);
    setPoruka("");
  }
  const updateTask = () => {
    const data = {
      title: currentTask.title,
      desc: currentTask.desc,
    };

    Tasksservices.azuriraj(currentTask.key, data)
      .then(() => {
        setPoruka("Task izmenjen!");
      })
      .catch((e) => console.log(e));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  const deleteTask = () => {
    Tasksservices.brisi(currentTask.key)
      .then(() => {
        setPoruka("Obrisano!");
        props.osveziListu();
      })
      .catch((e) => console.log(e));
  };

  const updateExecute = (status) => {
    Tasksservices.azuriraj(currentTask.key, { execute: status })
      .then(() => {
        setPoruka("Promenjen status taska");
        setCurrentTask({ ...currentTask, execute: status });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="edit-from">
      <h3>Task</h3>

      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={currentTask.title}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="desc"
            value={currentTask.desc}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Status: </label>
          {currentTask.execute ? " Executed" : " Pending"}
        </div>
      </form>
      {currentTask.execute ? (
        <button
          className="btn btn-primary"
          onClick={() => updateExecute(false)}
        >
          Unfinished
        </button>
      ) : (
        <button
          className="btn btn-primary mx-2"
          onClick={() => updateExecute(true)}
        >
          Execute
        </button>
      )}
      <button className="btn btn-danger mx-2" onClick={() => deleteTask()}>
        Delete
      </button>

      <button
        type="submit"
        className="btn btn-success mx-2"
        onClick={() => updateTask()}
      >
        Update
      </button>

      <p>{poruka}</p>
    </div>
  );
};
export default Task;
