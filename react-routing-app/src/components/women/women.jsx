import axios from "axios";
import { useEffect, useState } from "react"


export function Women(){
    const [women, setWomen] = useState([{id:'0', title:'', price:'', image:'', description:'', category:'', rating:{rate:0, count:0}}]);

    useEffect(()=>{},[
        axios.get("https://fakestoreapi.com/products/category/women\'s clothing")
        .then(response=> {
            setWomen(response.data);
        })
    ]);
    return(
        <div className="d-flex flex-wrap">
            {
               women.map(product=>
            <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                <img src={product.image} height="130" className="card-img-top" />
                <div className="card-header" style={{height:'120px'}}>
                    {product.title}

                </div>

            </div>
            )
            }
        </div>
    )
}