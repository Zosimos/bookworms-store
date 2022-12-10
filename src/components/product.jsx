import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product() {
    return (
        <div className="product">
            <img
                src="https://picsum.photos/
/200/200"
                alt="products"
            />
            <h5>Product 1</h5>
            <label>8.99$</label>
            <QuantityPicker />
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;

// product with title h5, price with label, quantity picker, button to add to cart
