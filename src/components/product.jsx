import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import DataContext from "../store/dataContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(DataContext).addProductToCart; //connect global function to product.jsx

    function addTotal(qty) {
        console.log("Price Total", qty);
        setQuantity(qty);
    }
    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }
    function handleAdd() {
        console.log("Button Clicked", props.data);
        addProductToCart(props.data); //call the global function
    }
    return (
        <div className="product">
            <img src={props.data.image} alt="products" />
            <h5>{props.data.title}</h5>
            <h6>{props.data.author}</h6>
            <div className="prices">
                <label>Total:${getTotal()} </label>
                <label>Price:${props.data.price.toFixed(2)}</label>
            </div>
            <QuantityPicker onChange={addTotal} />
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    );
}

export default Product;

// product with title h5, price with label, quantity picker, button to add to cart
