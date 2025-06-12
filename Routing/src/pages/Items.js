import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { data } from "../Data/itemData";

function Items() {
  return (
    <>
      <main>
        {/*<Navbar/>*/} {/*repeatition of code*/}
        <h1>Items Page</h1>
      </main>

      <ul>
        {/* <Link to="/items/item-1">
          <li>Item-1</li>
        </Link>
        <Link to="/items/item-2">
          <li>Item-2</li>
        </Link>
        <Link to="/items/item-3">
          <li>Item-3</li>
        </Link> */}

        {data.map((item, index) => (
          <Link to={`/items/${item.id}`}>
            <li key={index}>{item.id}</li>
          </Link>
        ))}
      </ul>

      <br></br>

      <Link
        to="/"
        style={{
          width: "30px",
          height: "15px",
          padding: "10px",
          background: "black",
          color: "white",
        }}
      >
        Back
      </Link>
      {/* absolute path */}
      {/* <Link to="/root">Back</Link>  */}
      {/* relative path */}
      {/* <Link to="/root">Back</Link>   */}
    </>
  );
}

export default Items;
