import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, clearTasks } from "../redux/actions/actions";
import Task from "./task";
import TodoList from "./todoList";
import "./todo.css";
const TodoApp = () => {
  const [task, setTask] = useState({ taskName: "", isChecked: false });
  // const [listOfTasks, setListOfTasks] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, taskName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ task });
    dispatch(addTask(task.taskName));
    // setListOfTasks([...listOfTasks, { name: task.taskName, isChecked: false }]);
    // console.log(listOfTasks);
    setTask({ ...task, taskName: "" });
  };

  const handleClear = () => {
    dispatch(clearTasks());
  };
  return (
    <div className='todo'>
      <h1>Todo!</h1>
      <Task
        taskName={task.taskName}
        change={handleChange}
        submit={handleSubmit}
        clear={handleClear}
      />
      <TodoList />
    </div>
  );
};

export default TodoApp;
