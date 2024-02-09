import React from "react";
import { useEffect } from "react";

function Create({setProgress}){
    useEffect(() =>{
        setProgress(30);
        setTimeout(() => {
            setProgress(100);
        },1000)
      },[])
    return (
        <div>
       
         </div>
            );
}
export default Create;