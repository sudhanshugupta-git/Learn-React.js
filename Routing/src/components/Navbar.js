import { Link, Outlet, NavLink } from "react-router-dom";
import { useResolvedPath, useLocation } from "react-router-dom";

function Navbar({ setPage }) {
  const resolvedPath = useResolvedPath("");
  const location = useLocation();
  return (
    <>
      <div className="nav">
        {/* withou routing */}
        {/* <h4 onClick={()=> setPage("home")}>HOME</h4>
          <h4 onClick={()=> setPage("about")}>ABOUT</h4>
          <h4 onClick={()=> setPage("items")}>ITEMS</h4> */}

        {/* <a href="/about">About</a>   */}
        {/*Link is just a wrapper over anchor tag that prevent re-loading*/}
        {/* <Link to="/"><h4>Home</h4></Link>   
        <Link to="/about"><h4>About</h4></Link>
        <Link to="/items"><h4>Items</h4></Link> */}

        {/*NavLink is similar to link only with some extra functionality*/}
        <NavLink to="/" style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>Home</h4></NavLink>   
        <NavLink to="/about" style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>About</h4></NavLink>
        <NavLink to="/items" style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>Items</h4></NavLink>

        {/*absolute path */}
        {/*end attribute it will ensure that this link is only active when the current URL exactly matches /root, 
        and not when it starts with /root. This should resolve the issue of the Home component being always active.*/}
        
        {/* <NavLink to="/root" end style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>Home</h4></NavLink>
        <NavLink to="/root/about" style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>About</h4></NavLink>
        <NavLink to="/root/items" style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>Items</h4></NavLink> */}

        {/*relative path */}
        {/* <NavLink to="" style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>Home</h4></NavLink>  
        <NavLink to="about" style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>About</h4></NavLink>
        <NavLink to="items" style={({isActive})=>(isActive? {color:"blue"}: undefined)}><h4>Items</h4></NavLink> */}

        {/* can do like this as well(valid for both relative and absolute) */}
        {/* <NavLink
          to={resolvedPath.pathname}
          end
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
        >
          <h4>Home</h4>
        </NavLink>
        <NavLink
          to={`${resolvedPath.pathname}/about`}
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
        >
          <h4>About</h4>
        </NavLink>
        <NavLink
          to={`${resolvedPath.pathname}/items`}
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
        >
          <h4>Items</h4>
        </NavLink> */}
      </div>
      <Outlet />{" "}
      {/*this component allows to show the children routes of the component */}
    </>
  );
}

export default Navbar;
