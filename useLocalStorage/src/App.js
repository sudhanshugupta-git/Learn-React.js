import "./styles.css";
import { useRef } from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  // Use the custom local storage hook here
  const [name,setName] = useLocalStorage("name","Sudhanshu");
  const [age,setAge] = useLocalStorage("age",0);

  const nameInput = useRef();
  const ageInput = useRef();

  const handleClear = () => {
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    const newName = nameInput.current.value;
    const newAge = ageInput.current.value;

    // Set the name and age here
    setName(newName);
    setAge(newAge);

    handleClear();
  };


  return (
    <div className="App">
      <div id="name">Name -{name}</div>
      <div id="age">Age -{age}</div>
      <form onSubmit={handleChange}>
        <input placeholder="Name" ref={nameInput} />
        <input placeholder="Age" type="number" min="1" ref={ageInput}/>
        <button className="btn">Change</button>
      </form>
    </div>
  );
}
