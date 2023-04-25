import { createContext, useEffect, useState } from "react";

const FetchApi=createContext();


const Provider=({children})=>{
    const [valueToPass,setValueToPass]=useState([]);


    const FetchData=async ()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/comments');
        const data=await response.json();
        
        setValueToPass(data);
    }

    useEffect(()=>{
    FetchData();


    },[]);
  
    
    





    <FetchApi.Provider value={valueToPass}>
        {children}
    </FetchApi.Provider>
    



}



export default FetchApi;
export {Provider};