import DataContext from "./dataContext";
import { useState } from "react";

//create a component that renders a div with a H1 inside component named GlobalData

function GlobalData(props) {
    const [cart, setCart] = useState([]);
    const [fakeUser, setFakeUser] = useState({ name: "Jim" });

    function addProductToCart() {
        console.log("Global fn called");
    }
    function removeProductFromCart() {}
    return (
        <DataContext.Provider
            value={{
                cart: cart,
                user: fakeUser,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalData;
