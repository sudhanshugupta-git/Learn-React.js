import {Link,NavLink} from "react-router-dom";
import Navbar from '../components/Navbar';

/*
Link
Used to navigate between pages.

Does not know or care if the current route is active.

Good for simple navigation without styling for active routes.
ex:
import { Link } from "react-router-dom";

<Link to="/home">Home</Link>


NavLink
Same as Link but adds special styling or class when the link is active (i.e., matches the current URL).

Useful for sidebars, navbars, and menus where you want to highlight the active page.
ex:
import { NavLink } from "react-router-dom";

<NavLink
  to="/home"
  className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-gray-600")}
>
  Home
</NavLink>

*/


function About() {
  return (
    <>
      <main>
       {/*<Navbar/>*/} {/*repeatition of code*/}
        <h1>About Page</h1>
        {/* use either navlink or link */}
        {/* <Link to="/">Back</Link> */}
        <NavLink to="/">Back</NavLink>  
        
        {/* absolute path */}
        {/* <Link to="/root">Back</Link>  */}
        {/* relative path */}
        {/* <Link to="/root">Back</Link>   */}
      </main>
    </>
  );  
}

export default About;
