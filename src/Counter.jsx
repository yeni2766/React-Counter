import { useState } from "react"
import { useEffect } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(()=> {
        console.log('Component Started')
    },[]);

    useEffect(()=>{
        console.log(`Counter Updated: ${count}`)
    },[count])





    function handleIncrement(e) {
    // If Shift key is held, add 10, otherwise add 1
        if (e.shiftKey) {
            setCount(count + 10);
        } else {
            setCount(count + 1);
            setDisabled(false)
        }
    }

    function checkResult(){
        if (count===0){
            setDisabled(!disabled)
        }else{
            setCount(count-1)
        }
    }

    return(
        <div className={`flex flex-col justify-center items-center ${count > 0 ? "bg-yellow-300" : "bg-blue-500"} h-screen w-full transition-all duration-500 ease-in`}>
                <p>The current count is {count}</p>
                <div className="flex gap-4 mt-5">
                    <button className="bg-white w-[100px] h-[50px] rounded-2xl" onClick={handleIncrement}>Increment</button>
                    <button className="bg-white w-[100px] h-[50px] rounded-2xl" onClick={checkResult} disabled = {disabled}>Decrement</button>
                    <button className="bg-white w-[100px] h-[50px] rounded-2xl" onClick={()=> setCount(0)}>Reset</button>
                </div>
        </div>
    )
}
