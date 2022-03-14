import React, { useState, useEffect } from "react";
import Tasksservices from "../services/Tasksservices";

const AllTasks = () => {
  //ucitaj listu taskova
  const [task, setTask] = useState([]);

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
        executed: podaci.executed,
      });
    });

    setTask(tasks);
  };
  const osveziListu = () => {
    alert("obrisano");
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

  return (
    <div>
      <div className="list-row">
        <div className="col-md-12">
          <h2>Lista taskova</h2>
          <ul className="list-group">
            {task &&
              task.map((el, i) => (
                <li className="list-group-item" key={i}>
                  {el.title}
                </li>
              ))}
          </ul>
          <button className="btn btn-danger my-3" onClick={obrisiSve}>
            Brisi sve
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
