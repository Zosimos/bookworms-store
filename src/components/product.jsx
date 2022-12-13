import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

function Product(props) {
    const [quantity, setQuantity] = useState(1);
    function addTotal(qty) {
        console.log("Price Total", qty);
        setQuantity(qty);
    }
    return (
        <div className="product">
            <img src={props.data.image} alt="products" />
            <h5>{props.data.title}</h5>
            <h6>{props.data.author}</h6>
            <div className="prices">
                <label>Total:${props.data.price.toFixed(2) * quantity}</label>
                <label>Price:${props.data.price.toFixed(2)}</label>
            </div>
            <QuantityPicker onChange={addTotal} />
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;

// product with title h5, price with label, quantity picker, button to add to cart
