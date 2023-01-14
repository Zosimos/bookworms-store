import DataContext from "./dataContext";
import { useState } from "react";

//create a component that renders a div with a H1 inside component named GlobalData

function GlobalData(props) {
    const [cart, setCart] = useState([]);
    const [fakeUser, setFakeUser] = useState({ name: "Jim" });

    function addProductToCart(product) {
        console.log("Global fn called");

        //modify a state var with obj {} or array [] the steps are create a copy, modify the copy, set the copy
        let copy = [...cart]; //the ... is the spread command. It will spread all the elements into the cart array. This is the 1st step "create a copy"
        copy.push(product); //2nd step, modify the copy
        setCart(copy); //3rd step, set or replace the copy
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
