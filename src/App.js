import "./App.css";
import NavBar from "./components/navBar";
import Footerbar from "./components/footerBar";
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Test from "./pages/test";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//^Import component from navBar.jsx
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/catalog" element={<Catalog />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/test" element={<Test />}></Route>
                    </Routes>
                </div>
                <Footerbar />
            </div>
        </BrowserRouter>
    );
}

export default App;

//open comand prompt, type cd and drag and drop project file.
//type npm start

//wrapper components grabs elements/components and provide functionality to them but will not change how they look. Functionality, without changes to appearance.

// create a /cart page with (h1 with any message we want)
//homework State Management and also React Context API
