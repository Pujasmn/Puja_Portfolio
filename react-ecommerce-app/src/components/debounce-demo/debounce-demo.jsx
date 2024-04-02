import { useEffect, useRef, useState } from "react"

export function DebounceDemo()
{
    // SettimeOut


    /*const [msg,setMsg] = useState('');
    let task = useRef(null);

    function Tip1(){
        setMsg('Tip-1: Always define component name with uppercase letter');
    }
    function Tip2(){
        setMsg('Tip-2: component must use JSX as language');

    }
    function Tip3(){
        setMsg('Tip-3: Every JSX element must have end token');

    }
    
    function handleShowclick(){
         setTimeout(Tip1, 3000);
         task.current= setTimeout(Tip2, 6000);
         setTimeout(Tip3, 10000);
    }
    function handleCancelClick(){
        clearTimeout(task.current);
    }
    return(
        <div className="container">
            <div className="text-center">
            <button onClick={handleShowclick}>Show Tips</button>
            <button onClick={handleCancelClick}>cancel tip2</button>
            <h3>{msg}</h3>
            </div>
          
        </div>
    )*/

    const [btnContainer, setBtnContainer] = useState({display:'block'});
    const [progressContainer, setProgressContainer] = useState({display:'none'});
    const [imgContainer, setImgContainer] = useState({display:'none'});
    const [progressValue, setProgressValue] = useState(0);
    const [msg, setMsg] = useState('completed');
    let progressThread= useRef(null);
    var count =  1;
    function LoadingProgress(){
        count++;
        setProgressValue(count);
        if(count==100){
            setProgressContainer({display:'none'});
            setImgContainer({display: 'block'});
        }
    }
    function handleLoadClick(){
        progressThread.current = setInterval(LoadingProgress, 100);
        setBtnContainer({display:'none'});
        setProgressContainer({display:'block'});
       
       

    }
    function handlePauseClick(){
        clearInterval(progressThread.current);
        setMsg('% paused');
    }
    function handlePlayClick(){
        progressThread.current = setInterval(LoadingProgress,100);
        setMsg('% completed');
    }
    return(
        <div className="container">
           <div className="text-center">
           <div style={btnContainer}>
            <button onClick={handleLoadClick} className="btn btn-primary">Load Image</button>
           </div>
           <div style={progressContainer}>
            <p>{progressValue} {msg}</p>
            <progress min="1" max="100" value={progressValue} style={{width:'400px', height:'400px'}}></progress>
            <div className="my-2">
                <button onClick={handlePauseClick} className="me-2 btn btn-warning bi bi-pause"></button>
                <button onClick={handlePlayClick} className="btn btn-success bi bi-play"></button>

            </div>
           </div>
           <div style={imgContainer}>
            <img src="images/m1.jpg" height='400px' width='300px'></img>
           </div>
           </div>

        </div>
    )
}