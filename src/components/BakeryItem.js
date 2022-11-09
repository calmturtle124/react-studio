// TODO: create a component that displays a single bakery item


function BakeryItem(prop) {

    const item = prop.item;
    // const cart = prop.cart
    const setCart = prop.setCart
    const setPrice = prop.setPrice

    function handleClick() {
        setCart(old => [...old, item["name"]]);
        setPrice(old => old + item["price"]);
    }


    return (
        <div className="card">
            <img src={item["image"]} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{item["name"]}</h5>
                <p className="card-text">{item["description"]}</p>
                <p className="card-text">{item["price"]}</p>
                <button type="button" className="btn btn-light" onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    )
}

export default BakeryItem;