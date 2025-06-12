import { useState,useEffect } from "react";

// method:1
const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(()=>{
    const storeData = localStorage.getItem(key);
    return storeData !== null? storeData : defaultValue;
  });

  useEffect(()=>{
    localStorage.setItem(key,data);
   },[key,data]);

   return [data,setData];
};

//method :2
// const useLocalStorage = (key, defaultValue) => {
//   const [value, setValue] = useState(() => {
//     const jsonValue = localStorage.getItem(key);

//     if (!jsonValue) return defaultValue;

//     return JSON.parse(jsonValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// };

export default useLocalStorage;
