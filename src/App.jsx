/** @format */

import "./App.css";
import Nav from "./component/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import Details from './component/Details.jsx'

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/recipes' element={<Recipes />} />
            </Routes>
        </div>
    );
}

export default App;
