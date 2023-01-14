import "./navBar.css";
import { useContext } from "react";
import DataContext from "../store/dataContext";

import { Link } from "react-router-dom";

function NavBar() {
    const cart = useContext(DataContext).cart;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    Bookworms 🐛
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/home"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="catalog">
                                Catalog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                Cart
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                More
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/contact"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        Cart
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        Something else here
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled">Disabled</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <Link to="/cart">
                            <button className="btn btn-outline-dark">
                                Cart &nbsp;
                                <span className="badge bg-warning">
                                    {cart.length}
                                </span>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar; //make function exportable
