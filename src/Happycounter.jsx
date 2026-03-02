import { use, useState } from "react"
import { useEffect } from "react"

export default function Happycounter(){
    const [seconds,setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    useEffect(()=>{
        if(!isRunning) return; //this checks to see if its running and if it is, the code stops working
        const timer = setInterval(()=>{
            setSeconds(prev => prev + 1)
        },1000)

        return () => clearInterval(timer)
    },[isRunning])
    return(
        <div className="flex flex-col justify-center items-center w-full h-screen bg-purple-500">
            <p className="text-white text-lg mb-7">Countdown: {seconds}</p>
            <div className="flex flex-row">
                <button className="w-[120px] h-[50px] bg-white rounded-2xl" onClick={()=>setIsRunning(!isRunning)}>{isRunning ? 'Pause':'Resume'}</button>
            </div>
        </div>
    )
}