import useLocalStorageForEmail from "./useLocalStorageForEmail";

export default function Reset() {
  // repeated in component login and reset. hence custom hook is helpful
  /*
  //  const [email,setEmail] = useState("");

  // order is important. such that 1st get it and then set
   useEffect(()=>{
       const email = localStorage.getItem("email");
       if(email){
           setEmail(email);
       }
   },[]);

   useEffect(() => {
       localStorage.setItem("email", email);
   },[email]); 
   */
  //destructuring {email,setEmail} from  useLocalStorageForEmail hook
  const { email, setEmail } = useLocalStorageForEmail();

  return (
    <>
      <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
