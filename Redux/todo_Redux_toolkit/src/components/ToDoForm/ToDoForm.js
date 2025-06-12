import { useState } from "react";
import { useDispatch,useSelector } from "react-redux"; // dispatch is required in both redux and redux-toolkit
// required when using redux
// import {addTodo} from "../../redux/actions/todoActions";

// import when using redux toolkit
import { actions } from "../../redux/reducers/todoReducer";
import { actions as notiAction } from "../../redux/reducers/notificationReducer";
import { notificationSelector } from "../../redux/reducers/notificationReducer";

import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notificationSelector);
  console.log(message)
  console.log(notiAction)

  if(message){
    setTimeout(() => {
      // console.log("[log:] todo add action is dispatched")  // no need to write everywhere as middleware simplifies it
      disptach(notiAction.reset());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    // disptach(addTodo(todoText));
    disptach(actions.add(todoText));
  };

  return (
    <div className="container">
      {message && <div class="alert alert-success" role="alert">{message}</div>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
