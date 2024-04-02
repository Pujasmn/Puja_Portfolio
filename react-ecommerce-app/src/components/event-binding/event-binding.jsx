import { useEffect, useState } from "react"
import axios from "axios";
import './event-binding.css';
export function EventBinding()
{

    // Prevent Default()


 /* function SubmitClick(e){
    e.preventDefault();
    alert('form Submitted to server')
  }
    return(
        <div className="container-fluid">
            <h2>Event Binding</h2>
            <form onSubmit={SubmitClick}>
                User Name: <input type="text" name="UserName:" /><button type="submit">Submit</button>
            </form>
        </div>
    )*/

    // Event Propagation

   /* function handleNavbarClick(){
        alert("Navbar Clicked");
    }
    function handleSearchClick(e){
        alert("search button Clicked");
        e.stopPropagation();
    }
    return(
        <div className="container-fluid">
        <h2>Event Binding</h2>
        <nav className="p-4 bg-dark text-white" onClick={handleNavbarClick}>
            <h3>Navbar</h3>
            <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>

        </nav>
    </div>
    )*/

    // mouseOverExample


    /*const[images,setImages] = useState([{img_src:""}]);
    const [previewSrc,setPreviewSrc] = useState('images/m1.jpg')
    useEffect(()=>{
        axios.get("mobile.json")
        .then(response=>{
            setImages(response.data);
        })
    },[])
    function handleMouseOver(e){
        setPreviewSrc(e.target.src);
    }
    return(
        <div className="container-fluid">
           <div className="row mt-4">
            <div className="col-2">
                {
                    images.map(image=>
                        <div className="border my-3 border-2" style={{width:'90px'}}>
                            <img onMouseOver={handleMouseOver} src={image.img_src} width="80" height="80" />

                        </div>
                        )
                }
            </div>
            <div className="col-10">
                 <img width='400' src={previewSrc}  height='400'/>
            </div>

           </div>
        </div>
    )*/

    // copy to clickboard

   /*const [msg, setMsg] = useState('');

   function handleCopy(){
    setMsg('copied to clipboard');
   }

   function handleCut(){
    setMsg('removed and copied to clipboard');
   }
   return(
    <div className="container-fluid">
          <dl>
            <dt>Account Number</dt>
            <dd><input type="text" onCut={handleCut} onCopy={handleCopy} /></dd>
            <dd>{msg}</dd>
            <dt>Confirm Account</dt>
            <dd><input type="text"></input></dd>
          </dl>
    </div>
   )*/
   

   // password verification
   
   const [msg, setMsg] = useState('');
   const [errorClass, setErrorClass] = useState('');
   const [gradeValue, setGradeValue] = useState('');

   function handlePasswordChange(e){
    var regExp = /(?=.*[A-Z])\w{4,15}/;
    if(e.target.value.match(regExp)){
        setMsg('Strong Password');
        setErrorClass('text-success');
        setGradeValue(100);
    }else {
        if(e.target.value.length<4){
            setMsg('Poor Password - Min 4 chars required');
            setErrorClass('text-danger');
            setGradeValue(20);
        }else {
            setMsg('week Password - Atleast 1 uppercase letter required');
            setErrorClass('text-warning');
            setGradeValue(60);
        }
     }
   }

   return(
    <div className="container-fluid">
          <dl>
            <dt>Password </dt>
            <dd><input type="password" onChange={handlePasswordChange} /></dd>
            <dd>
                <meter min="1" value={gradeValue} max="100" style={{width:'200px'}}></meter>
            </dd>
            <dd className={errorClass}>{msg}</dd>
          </dl>
    </div>
   )
}