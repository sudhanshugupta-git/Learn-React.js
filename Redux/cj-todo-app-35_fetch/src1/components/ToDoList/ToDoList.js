import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions, getInitialStateAsync } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import styles from "./ToDoList.module.css";
import {useEffect} from "react";
import axios from "axios";

function ToDoList() {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  // api in redux(method:1 fetch the data using api and dispatch it to store)
  useEffect(() => {
      // method:1
      // fetch("http://localhost:4100/api/todos")
      //   .then(res=>res.json())
      //     .then(parsedJson=>{
      //       console.log(parsedJson);
      //       disptach(actions.setInitialState(parsedJson))
      //     })
          
          // method:2
    // axios.get("http://localhost:4100/api/todos")
    //   .then(res=>{
    //   disptach(actions.setInitialState(res.data))
    //   console.log(res)
    // })

    //method:3 (using extraReducers)
    disptach(getInitialStateAsync());
          
          
  }, []);


  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={todo.id}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            // console.log("[LOG]: Todo - TOGGLE Action dispatched");
            disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;