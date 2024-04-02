import { useState } from "react"


export function TouchDemo()
{
    const [msg, setMsg] = useState('');
    function handleTouch(mobile, e){
    console.log(e);
    switch(mobile)
    {
    case "green":
    setMsg('Iphone 15 Green 128 GB - 56,000/-');
    break;
    case "black":
    setMsg('Iphone 15 Pro Black 128 GB - 79,000');
    break;
    }
    }
    return(
    <div className="container-fluid">
    <div className="mt-4">
    <img onTouchStart={(e)=>{ handleTouch('green', e)}} src="images/realme12.png" width="200" height="200" />
    <img onTouchStart={(e)=>{ handleTouch('black', e)}} src="images/realme12white.png" width="200" height="200" />
    </div>
    <p className="h3">{msg}</p>
    </div>
    )
}