import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const nav = useNavigate(); //it is used for programmatic navigation

    useEffect(()=>{
        // setInterval(()=> {nav("/")}, 5000) // set the path where u want to navigative after some time
        setInterval(()=> {nav(-1)}, 5000) // can also pass the no. which take to the page one step back 
    },[])

  return (
    <>
      <main>
        <h1> Error Page</h1>
      </main>
    </>
  );
}

export default ErrorPage;
