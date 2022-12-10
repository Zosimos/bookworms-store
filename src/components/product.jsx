import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {
    return (
        <div className="product">
            <img src={props.img} alt="products" />
            <h5>{props.title}</h5>
            <label>8.99$</label>
            <QuantityPicker />
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;

// product with title h5, price with label, quantity picker, button to add to cart
