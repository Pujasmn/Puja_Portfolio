import { useEffect, useState } from "react";
import axios from "axios";


export function MountDemo()
{
    // mountdemo

   /* const [userName, setUserName] = useState('');
    useEffect(() =>{

        setUserName('John');
    },[]);
    return(

        <div className="container-fluid">
            <h2 className="mt-3">Hello ! {userName} </h2>

        </div>
    ) */
    const [products, setProducts] = useState([]);
    function LoadProducts(){
        
        // using XML method

       /* var http = new XMLHttpRequest();
        http.open("get", "products.json", true);
        http.send();

        http.onreadystatechange = function(){

            console.log(http.responseText);
            if(http.readyState==4)
            {
                setProducts(JSON.parse(http.responseText));
            }
        }*/

        // using fetch method

        /*fetch("products.json")
        .then(response => response.json())
        .then(products=>{
            setProducts(products);
        })*/

        // jquery using axios method

      axios.get("products.json")
      .then(response=>{
        setProducts(response.data);
      })
      .catch(err=>{
        console.log(err);
      })

    }

   
    useEffect(()=>{
        LoadProducts();

    },[]);
    
    return(

        <div className="container-fluid">
           <h2>Product Table Using Fetch Method</h2>
           <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product=>
                        <tr key={product.Name}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td>{(product.Stock===true)?"Available":"Out of Stock"}</td>
                        </tr>
                        )
                }
            </tbody>

           </table>

        </div>
    )
}