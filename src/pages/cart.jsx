import DataContext from "../store/dataContext";
import { useContext } from "react";
import "./cart.css";

function Cart() {
    const cart = useContext(DataContext).cart;
    return (
        <div className="cart">
            <h1>Payment</h1>
            <h3>
                You have <span className="badge bg-warning">{cart.length}</span>{" "}
                products in the basket
            </h3>
            {/* map every single product inside the cart into an li */}
            {cart.map((prod) => (
                <div className="prod-row">
                    <img src={prod.image} alt="products" />
                    <h6>{prod.title}</h6> <label>{prod.price}</label> &nbsp;
                    <button className="btn btn-sm btn-danger">Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
