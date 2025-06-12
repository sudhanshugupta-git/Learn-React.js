import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

// defining hook
function useValue() {
  const value = useContext(itemContext);
  return value;
}

// component
function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);

    if (index === -1) {
      setCart([...cart, { ...prod, qty: 1 }]);
      console.log(cart);
      setTotal(total + prod.price);
    } else {
      cart[index].qty++;
      setCart(cart);
      console.log(cart);
      setTotal(total + cart[index].price);
    }
    setItem(item + 1);
  };

  // const handleRemove = (id) => {
  //   const index = cart.findIndex((item) => item.id === id);

  //   if (index !== -1) {
  //     cart[index].qty--;
  //     setItem(item - 1);
  //     setTotal(total - cart[index].price);
  //     if (cart[index].qty === 0) {
  //       cart.splice(index, 1);
  //     }
  //     setCart(cart);
  //   }
  // };

  const handleRemove = (id) => {
    // Create a copy of the cart array
    const newCart = cart.map((item) => ({ ...item }));
  
    // Find the index of the item to be removed
    const index = newCart.findIndex((item) => item.id === id);
  
    if (index !== -1) {
      // Decrease the quantity
      newCart[index].qty--;
  
      // Update item count and total price
      setItem((prevItem) => prevItem - 1);
      setTotal((prevTotal) => prevTotal - newCart[index].price);
  
      // Remove item if quantity is zero
      if (newCart[index].qty === 0) {
        newCart.splice(index, 1);
      }
  
      // Update the cart state
      setCart(newCart);
    }
  };

  // short hand
  // setCart((prevCart) => {
  //   // Create a copy of the previous cart array
  //   const newCart = [...prevCart];
    
  //   // Modify the copy
  //   if (newCart[index].qty === 0) {
  //     newCart.splice(index, 1);
  //   }
    
  //   // Return the new array to update the state
  //   return newCart;
  // });
  

  const clear = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };

  const toggle = () => {
    setShowCart(!showCart);
  };

  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, clear, toggle, cart }}
    >
      {showCart && <CartModal toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
