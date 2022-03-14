import React, { useState } from "react";
import Tasksservices from "../services/Tasksservices";

const AddTask = () => {
  const initialState = {
    title: "",
    desc: "",
    execute: false,
  };
  const [task, setTask] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const uhvatiPromenu = (evt) => {
    const { name, value } = evt.target;
    setTask({ ...task, [name]: value });
  };

  const saveTask = () => {
    let data = { title: task.title, desc: task.desc, execute: task.execute };

    //salji u fb
    Tasksservices.kreiraj(data)
      .then(() => {
        //go to add new task
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //dodaj novi task;
  const noviTask = () => {
    setSubmitted(false);
    //isprazni formu
    setTask(initialState);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h2>Uspesno dodat task!</h2>
          <button className="btn btn-primary" onClick={noviTask}>
            Dodaj novi task
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Title"
              value={task.title}
              onChange={uhvatiPromenu}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name="desc"
              placeholder="desc"
              value={task.desc}
              onChange={uhvatiPromenu}
            />
          </div>{" "}
          <button onClick={saveTask} className="btn btn-primary my-3">
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
