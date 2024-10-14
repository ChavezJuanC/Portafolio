import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/MainRoutes/Home";
import About from "./assets/components/MainRoutes/About";
import Contact from "./assets/components/MainRoutes/Contact";
import Projects from "./assets/components/MainRoutes/Projects";
import Skills from "./assets/components/MainRoutes/Skills";
import Navbar from "./assets/components/OtherComponents/Navbar";
import MobileFooter from "./assets/components/OtherComponents/MobileFooter";

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/About" Component={About} />
                <Route path="/Contact" Component={Contact} />
                <Route path="/Projects" Component={Projects} />
                <Route path="/Skills" Component={Skills} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
