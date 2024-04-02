import "./data-binding2.css";
import { useState } from "react";

export function Databinding2 ()


{

   /*var data = [
    {category: 'Electronics', Products: ["TV", "Mobile", "Watch"]},
    {category: 'Footwear', Products: ["sneakers", "casuals"]}
   ]
    
    return(
        <div className="container-fluid">
<ol>
    {
        data.map(item =>
            <li key={item.category}>
                {item.category}
                <ul>
                    {
                        item.Products.map(product=> <li key={product}>{product}</li>)
                    }
                </ul>
            </li>
            )
    }
</ol>

        </div>
    )*/

// nested in dropdown

    /*var data = [
        {category: 'Electronics', Products: ["TV", "Mobile", "Watch"]},
        {category: 'Footwear', Products: ["sneakers", "casuals"]}
       ]

       return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <select>
            <option>select a product</option> 
                {
                  
                data.map(item=>
                    <optgroup label={item.category} key={item.category}>
                        {
                            item.Products.map(product=> <option>{product}</option>)
                        }
                    </optgroup>
                    )
                }
            </select>
        </div>
       )*/
// details & summary

       /*var data = [
        {title: "HTML", description: "It is a markup language"},
        {title: "css", description: "It configures style form HTML"}
       
       ];

       return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            {
                data.map(topic=>
                    <details key={topic.title}>
                        <summary>{topic.title}</summary>
                        <p className="ms-4">{topic.description}</p>
                    </details>
                    )
            }
        </div>
       )*/


      /* var categories = ["Electronics", "Footwear", "Fashion", "Kids", "Women Fashion"]

       return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
           <select size="3">
            {
              categories.map(category=> <option><input type="checkbox" />{category}</option>)
            }
           </select>
        </div>
       )*/

       // check box
       /* var categories = ["Electronics", "Footwear", "Fashion", "Kids", "Women Fashion"]

       return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
          <ul className="list-box list-unstyled form-switch">
            {
              categories.map(category=> <li key={category} className="form-switch"><input className="form-check-input" type="checkbox"/>{category} </li>)
            }

          </ul>
        </div>
       )
       */
      //date declaration

/*var Name = "Samsung TV";
var Mfd = new Date();
       return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
             <dl>
                <dt>Name</dt>
                <dd>{Name}</dd>
                <dt>Name</dt>
                <dd>{Mfd.toString()}</dd>
             </dl>
        </div>
       )*/

       // Regular Expression
/*var regExp = /(?=.*[A-z])\w{4,15}/;
var password = prompt("Enter Password");
       return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
             {
                (password.match(regExp))? "success..": "password 4 to 15 chars with atleast 1 uppercase letter"
             }
        </div>
       )*/

       // without using variable & using const


       /*const [userName] = useState('john');
       const [categories] = useState(['All', 'Electronics', 'Fashion']);
       return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            Hello ! {userName}
            <select>
                {
                    categories.map(category => <option key={category}>{category}</option>)
                }
            </select>
        </div>
       ) */
        // using const
       /*const [userName] = useState('john');
       const [categories] = useState(['All', 'Electronics', 'Fashion']);
       return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            Hello ! {userName}
            <select>
                {
                    categories.map(category => <option key={category}>{category}</option>)
                }
            </select>
        </div>
       ) */

       // changing the value

       /*const [userName, setUserName] = useState('david');

       function handleNameChange(event){
        setUserName(event.target.value);

       }

       return(
        <div className="container-fluid">
            <h2>One Way Binding</h2>
           <dl>
            <dt>User Name</dt>
            <dd><input type="text" onChange={handleNameChange} value={userName} /></dd>
            <p>Hello ! {userName}</p>
           </dl>
        </div>
       )  */

       const [name, setName] = useState('TV');
       const [price, setPrice] = useState(45000);
       const [stock, setStock] = useState(true);
       const [city, setCity] = useState('-1');
       const [product, setProduct] = useState({Name:name, Price:price, Stock:stock, City:city});

       function handleNameChange(e)
       {
        setName(e.target.value);
       }
       function handlePriceChange(e)
       {
        setPrice(e.target.checked);
       }
       function handleStockChange(e)
       {
        setStock(e.target.value);
       }
       function handleCityChange(e)
       {
        setCity(e.target.value);
       }
       function handleSaveClick()
       {
       setProduct({
        Name: name,
        Price: price,
        Stock: stock,
        City: city
       });
       }
       return(
        <div className="container-fluid">
           <div className="row mt-3">
            <div className="col-3">
                <h3>Edit Product & Two Data Binding</h3>
                <dl>
                    <dt>Product Name</dt>
                    <dd><input type="text" onChange={handleNameChange} value={name} className="form-control" /></dd>
                    <dt>Price</dt>
                    <dd><input type="number" onChange={handlePriceChange} value={price} className="form-control" /></dd>
                    <dt>Stock</dt>
                    <dd><input type="checkbox" onChange={handleStockChange} checked= {stock} className="form-check-input" /><label>Available</label></dd>
                    <dt>Shipped To</dt>
                    <dd>
                        <select value={city} onChange={handleCityChange} className="form-select">
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button onClick={handleSaveClick} className="btn btn-warning w-100">Save</button>
            </div>
            <div className="col-9">
                <h3>Product Details</h3>
                <dl className="row">
                    <dt className="col-3">Name</dt>
                    <dd className="col-9">{product.Name}</dd>
                    <dt className="col-3">Price</dt>
                    <dd className="col-9">{product.Price}</dd>
                    <dt className="col-3">Stock</dt>
                    <dd className="col-9">{product.Stock===true?"Available":"Out of stock"}</dd>
                    <dt className="col-3">Shipped To</dt>
                    <dd className="col-9">{(product.City==="-1")?"please Select City": product.City}</dd>
                </dl>
            </div>

           </div>
          
        </div>
       )
}