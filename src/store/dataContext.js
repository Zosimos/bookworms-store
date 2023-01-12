import { createContext } from "react";

//this is an interface, promise, blueprint
//should not have any values or implementation
//just describes the structure of the data

const DataContext = createContext({
    //create variables
    cart: [],
    user: {},
    //create functions to modify the above variables

    addProductToCart: () => {},
    removeProductFromCart: () => {},
});

export default DataContext;
