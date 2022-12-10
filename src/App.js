import "./App.css";
import NavBar from "./components/navBar";
import Footerbar from "./components/footerBar";
import Catalog from "./pages/catalog";

//^Import component from navBar.jsx
function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="page-content">
                <Catalog />
            </div>
            <Footerbar />
        </div>
    );
}

export default App;

//open comand prompt, type cd and drag and drop project file.
//type npm start
