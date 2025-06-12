export const Home = ({ loggedIn, setLoggedin }) => {

// Without $: {loggedIn && "active"} is a literal string and does not evaluate the expression inside.
// With $: ${loggedIn && "active"} evaluates the expression inside and dynamically constructs the string.

  // const className = `{loggedIn && "active"}`;
  // console.log(className);  // Always outputs "{loggedIn && "active"}

//   const className = `${loggedIn} && "active"`;
// console.log(className);  // Outputs "true && "active"" if loggedIn is true, "false && "active"" if loggedIn is false


  // const className = `${loggedIn && "active"}`; is equivalent to const className = loggedIn ? "active" : "";
  return (
    <div className="home page">
      <h3>RapidRetail</h3>
      <div className="auth-status">
        <span
          className={`${loggedIn && "active"}`}
          onClick={() => setLoggedin(true)}
        >
          Login user
        </span>
        <span
          className={`${!loggedIn && "active"}`}
          onClick={() => setLoggedin(false)}
        >
          Logout user
        </span>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3343/3343850.png"
        alt="shoe"
      />
      <p>
        Rapid Retail is an ecommerce store that offers a wide range of products
        for customers who want to make fast and convenient purchases. At Rapid
        Retail, we are committed to providing the best online shopping
        experience for our customers, with a focus on speed, convenience, and
        quality.
      </p>
      <div className="socails">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
          alt="ig"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
          alt="twitter"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
          alt="facebook"
        />
      </div>
    </div>
  );
};
 