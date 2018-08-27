import React from 'react'

const Todo = props => {
  <span>
    {props.text}
    <button onClick={() => props.delete(props.text.id)}>
      DELETE
    </button>
  </span>
}

export default Todo;
