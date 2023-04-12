import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import editSvg from "../../assets/icons/edit.svg";
import "./Tasks.scss";

import AddTasksForm from "./AddTasksForm";
import TaskForm from "./TaskForm";

function Tasks({
  list,
  onEditTitle,
  onAddTask,
  notEmpty,
  onRemoveTask,
  onEditTask,
  onTaskComplete,
}) {
  const editTitle = () => {
    const newTitle = window.prompt("Название списка", list.name);
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      axios
        .patch("http://localhost:3001/lists/" + list.id, {
          name: newTitle,
        })
        .catch(() => {
          alert("Не удалось обновить наименование списка");
        });
    }
  };

  return (
    <div className="tasks">
      <NavLink to={`/lists/${list.id}`}>
        <h2 style={{ color: list.color.hex }} className="tasks__title">
          {list.name}
          <img onClick={editTitle} src={editSvg} alt="Edit icon" />
        </h2>
      </NavLink>
      <div className="tasks__items">
        {!notEmpty && list.tasks && !list.tasks.length && (
          <h2>Задачи отсутствуют</h2>
        )}
        {list.tasks &&
          list.tasks.map((task) => (
            <TaskForm
              onComplete={onTaskComplete}
              onEdit={onEditTask}
              onRemove={onRemoveTask}
              list={list}
              key={task.id}
              {...task}
            />
          ))}
        <AddTasksForm key={list.id} list={list} onAddTask={onAddTask} />
      </div>
    </div>
  );
}

export default Tasks;
