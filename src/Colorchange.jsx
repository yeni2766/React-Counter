import { useState, useEffect } from "react";

export default function Colorchange(){
    useEffect(()=>{

        const changeX = (e) =>{
            setX(e.clientX)
        }
        window.addEventListener('mousemove',changeX);

        return () => {window.removeEventListener('mousemove',changeX)}

    },[])
    const [x, setX] = useState(0);
    return(
        <div className = {`flex justify-center items-center h-screen w-full transition-all duration-500 ease-in ${x>700 ? 'bg-pink-500' : 'bg-blue-500'} `}>
            <p>X: {x}</p>
            
        </div>
    )
}