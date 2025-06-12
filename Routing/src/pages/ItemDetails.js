import { useParams,Link } from "react-router-dom";
import { data } from "../Data/itemData";

function ItemDetails(){
    // const param = useParams();
    // console.log(param);
    const {itemId} = useParams(); // if using in this way then import it with the same as declared in the app in params
    // console.log(itemId)

    const item = data.find((item)=>item.id === itemId);
    console.log(item)

    return(
        <>
        <main><h1>ItemDetails</h1></main>
        {/* <h2>{param.itemId}</h2> */}
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Link
        to="/items"
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
        </>
    )
}

export default ItemDetails;