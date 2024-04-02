export function Array()
{
   /* var categories = ["All", "Electronics", "Footwear"]

    return(
        <div className="container-fluid">
            <h2>Array Data Binding </h2>
            <ol>
                {
                    categories.map(category=> <li key={category}>{category}</li>)
                }
            </ol>
            <select>
                {
                    categories.map(category=> <option key={category}>{category}</option>)
                }
            </select>
            <ul className="list-unstyled mt-4">
                {
                    categories.map(category =>
                        <li key={category}>
                            <input type="checkbox" value={category} /><label>{category}</label>
                        </li>
                        )
                }

            </ul>
        </div>
    )*/


    
    /*var sales = [46000.14, 13455.55, 67999.55, 30000.45]

    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <ol>
                {
                    sales.filter(value=> value>40000).map(item=> <li key={item}>{item}</li>)
                }
            </ol>
        </div>
    )*/

     // map filter method in array
    /*var sales = [46000.14, 13455.55, 67999.55, 30000.45]

    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <ol className="list-unstyled">
                {
                    sales.filter(sale=> sale>40000).map((item, index) => <li key={index}>[{index}]{item}</li>)
                }
            </ol>
        </div>
    )*/


    //spread operator

   /* var one = ["A", "B", "C"];
    
    var two = [...one, "D", "E"];

    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
           {
            two.map(item=> <p> key={item}</p>)
           }
        </div>
    )*/

    // destructing techinque of array

    /*var details = [1, "TV", 45000.44];
    var [id, name, price] = details;

    return(
        <div className="container-fluid">
            <h2 className="mt-3">Data Binding array</h2>
            Id: {id} <br></br>
            Name: {name} <br></br>
            Price: {price}
        </div>
    )*/

    // flipkart card-style
    var products = [
        {
            title : "realme 12+ 5G (Pioneer Green, 128 GB)",
            price : 19999,
            image :"images/realme12.png",
            rating : {rate:4.6, rating:17998, reviews:1223},
            offers : [
                "Eligible for Flipkart Pay Later?",
                " Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C",
                "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
                "Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C",
                "Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More",
                "Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!Know More",
                "No cost EMI ₹2,223/month. Standard EMI also availableView Plans",
                "Buy More, Save MoreBuy worth ₹5000 save ₹1000See all productsT&C"
            ]
        },
    
        {
            title : "realme 12+ 5G (Pioneer white, 128 GB)",
            price : 20999,
            image :"images/realme12white.png",
            rating : {rate:4.7, rating:18998, reviews:1323},
            offers : [
                "Eligible for Flipkart Pay Later?",
                " Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C",
                "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
                "Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C",
                "Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More",
                "Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!Know More",
                "No cost EMI ₹2,223/month. Standard EMI also availableView Plans",
                "Buy More, Save MoreBuy worth ₹5000 save ₹1000See all productsT&C"
            ]
        }
    ]
    
    
        return(
            <div className="container-fluid">
                 <h2 className="mt-3">Flipkart card system</h2>
               <section className="d-flex">
                 {
                    products.map(product =>
                        <div key={product.title} className="card w-25 card p-2 m-2">
                           <img src={product.image} className="card-img-top"height="250" />
                           <div className="card-header">
                               <div>{product.title}</div>
                           </div>
                           <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd className="h4">{product.price.toLocaleString()}</dd>
                                 <dt>Rating</dt>
                                 <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span></dd>
                            </dl>
                            <div>
                                <a href="#" className="link-success">offers</a>
                            </div>
                           </div>
                           <div className="card-footer">
                            <button className="btn btn-success bi bi-cart4 w-100">Add to cart</button>


                           </div>
                        </div>
                        )
                 }
               </section>
            </div>
        )
}