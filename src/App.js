import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function listHelper(list) {
    const map = new Map();
    for (let i = 0; i < list.length; i++) {
        let cur = map.get(list[i])
        if (cur != null) {
            map.set(list[i], cur + 1);
        }
        else {
            map.set(list[i], 1);
        }
    }
    const result = [];
    map.forEach((value, key) => result.push(<p>{key} {value}</p>));
    return result;
}

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="row">
            <div className="col-md-6">
                {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                    <BakeryItem item={item} cart={cart} setCart={setCart} price={price} setPrice={setPrice}/> // replace with BakeryItem component
                ))}
            </div>
            <div className="col-md-6">
                <div>
                    <h2>Cart</h2>
                    {
                        listHelper(cart)
                    }
                    <p>Total Price:</p>
                    <p>{price}</p>
                    {/*<h2>Cart</h2>*/}
                    {/*/!* TODO: render a list of items in the cart *!/*/}
                    {/*<p>{cart}</p>*/}
                    {/*{*/}
                    {/*    cart.map(*/}
                    {/*        (item) => (*/}
                    {/*            <p>{item}</p>*/}
                    {/*        )*/}
                    {/*    )*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
