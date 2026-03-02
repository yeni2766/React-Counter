import { useState } from "react"
import { useEffect } from "react"

export default function Timer(){
    const [second, setSecond] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setSecond(prev => prev + 1)
        },1000)

        return () => clearInterval(timer)
    },[])



    return(
        <div>
            <p className="text-white text-2xl">Seconds Passed: {second}</p>
        </div>
    )
}