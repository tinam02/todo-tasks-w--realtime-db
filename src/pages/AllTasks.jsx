import React, { useState, useEffect } from "react";
import Task from "../components/Task";
import Tasksservices from "../services/Tasksservices";

const AllTasks = () => {
  //ucitaj listu taskova
  const [task, setTask] = useState([]);
  const [currTask, setCurrTask] = useState(null);
  const [currIndex, setCurrIndex] = useState(-1);

  const onDataChange = (data) => {
    let tasks = [];

    data.forEach((item) => {
      let key = item.key;
      //izvlaci js obj iz datasnapshota
      let podaci = item.val();
      tasks.push({
        key: key,
        title: podaci.title,
        desc: podaci.desc,
        execute: podaci.execute,
      });
    });

    setTask(tasks);
  };
  const osveziListu = () => {
    setCurrIndex(-1);
    setCurrTask(null);
  };
  const obrisiSve = () => {
    //db becomes null
    Tasksservices.brisiSve()
      .then(() => {
        //refresh
        osveziListu();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //'on' ceka promenu podataka u fb
    Tasksservices.getAll().on("value", onDataChange);

    return () => {
      Tasksservices.getAll().off("value", onDataChange);
    };
  }, []);

  const setActiveTask = (task, i) => {
    const { key, title, desc, execute } = task;

    setCurrTask({
      key,
      title,
      desc,
      execute,
    });
  };

  return (
    <div>
      <div className="list-row d-flex gap-5" >
        <div className="col-md-6">
          <h2>Lista taskova</h2>
          <ul className="list-group">
            {task &&
              task.map((el, i) => (
                <li
                  className={
                    "list-group-item" + (i === currIndex ? "bg-dark" : "")
                  }
                  key={i}
                  onClick={() => setActiveTask(el, i)}
                >
                  {el.title}
                </li>
              ))}
          </ul>
          <button className="btn btn-danger my-3" onClick={obrisiSve}>
            Brisi sve
          </button>
        </div>
        <div className="col-md-6">
          {currTask ? <Task task={currTask} refresh={osveziListu}/> : <h3>Klikni task za detalje</h3>}
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
