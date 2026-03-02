import { useEffect } from "react";
import { useState } from "react";
export default function Component(){

    const [text,setText] = useState('')

    useEffect(()=>{console.log(`Text is now: ${text}`)},[text])

    return(
        <div>
           <input type = 'text' className="border-2 border-black" value = {text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    )

}