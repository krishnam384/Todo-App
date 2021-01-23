import React from "react";
import PropTypes from "prop-types";

const Task = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div className='form-group form-inline'>
        <input
          type='text'
          className='form-control'
          value={props.taskName}
          onChange={props.change}
          placeholder='Enter Task name..'
          required
        />
        <input type='submit' value='Add' className='btn btn-primary m-4' />
        <button className='btn btn-success m-4' onClick={props.clear}>
          Clear All
        </button>
      </div>
    </form>
  );
};

Task.propTypes = {
  submit: PropTypes.func,
  taskName: PropTypes.string,
  change: PropTypes.func,
  clear: PropTypes.func,
};

export default Task;
