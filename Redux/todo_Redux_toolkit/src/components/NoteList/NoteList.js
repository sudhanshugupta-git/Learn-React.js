import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
// import { deleteNote } from "../../redux/actions/noteActions";
import { actions, noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
    // const notes=useSelector((state)=> state.noteReducer.notes);
    const notes=useSelector(noteSelector);
    const dispatch=useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            onClick={()=> dispatch(/*deleteNote(index)*/ actions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
