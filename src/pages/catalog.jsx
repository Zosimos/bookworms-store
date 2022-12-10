import Product from "../components/product";
import "./catalog.css";

function Catalog() {
    return (
        <div className="catalog">
            <h3>Check out our amazing products!</h3>

            <div className="products">
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Catalog;

// product with title h5, price with label, quantity picker, button to add to cart
