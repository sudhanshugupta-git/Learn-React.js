import { useSelector, useDispatch } from "react-redux"; // dispatch, selector is still required in both redux and redux-toolkit

// required when using redux
// import { toggleTodo } from "../../redux/actions/todoActions";

// import when using redux toolkit
import { actions, todoSelector } from "../../redux/reducers/todoReducer";

import "./ToDoList.css";

function ToDoList() {

  // const todos=useSelector((state)=> state.todoReducer.todos);
  const todos=useSelector(todoSelector);
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={index  }>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{/*disptach(toggleTodo(index))*/ 
          // console.log("[log:] todo toggle action is dispatched")  // no need to write everywhere as middleware simplifies it
          disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;