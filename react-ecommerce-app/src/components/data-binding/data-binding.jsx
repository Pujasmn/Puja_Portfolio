

export function Databinding()
{
    /*var userName = "John"
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <p>Hello ! {userName}</p>
            <div>
                <input type="text" value={userName}></input>
            </div>
        </div>
    )*/

    /*var price = 30000.32;
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            price = {price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
        </div>
    )*/

    /*var price = 222233789834n;
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
           {navigator.toString()}
        </div>
    )*/

    /*var n = 2e3;
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
           {n}
        </div>
    )*/

    /*var link= "<a href='home.html'>Home</a>"
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
              {link}
        </div>
    )*/

    /*var uname = "John";
    var age = 22;
    var msg1 = "Hello !" + " " + uname + " " + "you will be" + " " + (age+1) + " " + "next year.";
    var msg2 = `Hello ! ${uname} you will be ${age+1} next year.` 
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
              <p>{msg1}</p>
              <p>{msg2}</p>
        </div>
    )*/

   
    /*var path = "\D:\\Images\\amazon.com"
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
             {path}
        </div>
    )*/


    /*var title = "welcome to react";
    return(
        <div className="container-fluid">
            <h2>{title.toUpperCase().slice(0,7)}</h2>
           
        </div>
    )*/

    /*var tv = "Samsung TV";
    var price = parseInt(prompt("enter price"));

    return (
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <dl>
                <dt>Name</dt>
                <dd>{tv}</dd>
                <dt>price</dt>
                <dd>{(price===null)? "please provide price":price}</dd>
            </dl>
        </div>
    )*/

   /*var Id = Symbol();

   var product = {
    [Id]: 1,
    Name: "Samsung TV",
    Price: 45000.44
   }
    return (
        <div className="container-fluid">
            <h2>Data Binding</h2>
           {
            Object.keys(product).map(key=> <li>{key}</li>)
           }
           <h3>product id = {product [Id]}</h3>
        </div>
    )*/


    // presenting table

    /*var data = [
        {Name: "Samsung TV", Price: 45000.55},
        {Name: "Mobile", Price: 12000.44}
    ];
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map(product=> <tr key={product.Name}><td>{product.Name}</td> <td>{product.Price}</td> </tr>)
                    }
                </tbody>

            </table>

        </div>
    )*/
// presenting information flipkart product
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
        {
            products.map(product=>
                <div className="row mt-4" key={product.title}>
                <div className="col-3">
                     <img width="100%" src= {product.image}></img>
                </div>
                <div className="col-9">
                    <div className="h3">{product.title}</div>
                    <div className="mt-2">
                    <span className="badge bg-success text-white">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
                    <span className="fw-bold text-secondary">{product.rating.rating.toLocaleString()} Ratings & {product.rating.reviews.toLocaleString()}</span>
                    </div>
                    <div className="mt-2">
                        <div className="h1"> {product.price.toLocaleString('en-in', {style: 'currency', currency: 'INR'})}</div>
                        <div> 10% off <strike>23999</strike></div>
                    </div>
                    <div className="mt-4">
                       <ul className="list-unstyled">
                          {
                            product.offers.map(offer => <li key={offer} className="bi bi-tag-fill text-success my-2"> <span className="text-secondary">{offer}</span></li>)
                          }
                       </ul>
                    </div>
                </div>

              </div>
    
                )
        }
        </div>
    )
}
