import React from "react";
import PropTypes from "prop-types";
import { XCircleIcon } from "@primer/octicons-react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { deleteTask, checkTask } from "../redux/actions/actions";
import _ from "lodash";
const TodoList = () => {
  const listOfTasks = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();
  const handleCheck = (id) => {
    console.log(listOfTasks);
    let newArr = _.cloneDeep(listOfTasks);
    console.log(newArr);
    newArr[id].isChecked = !newArr[id].isChecked;
    console.log(newArr);
    dispatch(checkTask(newArr));
    // setListOfTasks(newArr);
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTask(id));
    //const filteredArr = listOfTasks.filter((item, i) => i !== id);
    // setListOfTasks(filteredArr);
  };
  return (
    <div>
      {listOfTasks.map((item, index) => (
        <div className='form-check' key={index}>
          <input
            type='checkbox'
            className='m-3'
            value={item.taskName}
            checked={item.isChecked}
            onChange={() => handleCheck(index)}
          />
          <span className={item.isChecked ? "task-completed" : ""}>
            {item.taskName}
          </span>
          <span onClick={() => handleDelete(index)}>
            <XCircleIcon size={24} />
          </span>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  listOfTasks: PropTypes.array,
  check: PropTypes.func,
  delete: PropTypes.func,
};

export default TodoList;
