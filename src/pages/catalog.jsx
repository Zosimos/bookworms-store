import { useEffect, useState } from "react";
import Product from "../components/product";
import DataService from "../services/dataService";
import "./catalog.css";

function Catalog() {
    //need to call command onload, but react does not use init. React use "useEffect"
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log("Catalog loaded");
        let service = new DataService();
        let prodList = service.getCatalog();
        setProducts(prodList);
    }, []);
    return (
        <div className="catalog">
            <h3>Check out our amazing books!</h3>
            <h5>We have {products.length} amazing books to choose from.</h5>

            <div className="products">
                {products.map((prod) => (
                    <Product
                        // title={prod.title}
                        // img={prod.image}
                        // author={prod.author}
                        // price={prod.price}
                        data={prod}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalog;

// product with title h5, price with label, quantity picker, button to add to cart
