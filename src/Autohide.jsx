import { useState } from "react"
import { useEffect } from "react"
export default function Autohide(){
    const [seconds,setSeconds] = useState(5);
    const [visible, setVisible] = useState(true);
    const [restartVisible, setRestartVisible] = useState(false)
    useEffect(()=>{
        if(seconds === 0){
            setVisible(!visible);
            setRestartVisible(!restartVisible)
            return
        }

        const countdown = setInterval(()=>{
            setSeconds(prev => prev - 1)
        },1000)

        return () => clearInterval(countdown)

    },[seconds])
    return(
        <div className="flex justify-center items-center h-screen w-full bg-blue-500 flex-col">
            <p className="text-white text-lg">{visible && `This message will disappear in: ${seconds} seconds`}</p>
            {restartVisible && <button className="w-[120px] h-[50px] bg-white rounded-2xl cursor-pointer" onClick = {()=>{setSeconds(5),setVisible(!visible), setRestartVisible(!restartVisible)}}>Restart</button>}
            
        </div>
    )
}