import React from "react";
import './App.css';

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import pokemonBgOne from "./assets/img/bg1.jpg"
import pokemonBgTwo from "./assets/img/bg2.jpg"

function App() {

    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                title="This is title layout block one"
                descr="This is Description layout block! one"
                urlBg={pokemonBgTwo}
            />
            <Layout
                title="This is title layout block two"
                descr="This is Description layout block! two"
                colorBg="grey"
            />
            <Layout
                title="This is title layout block three"
                descr="This is Description layout block! three"
                urlBg={pokemonBgOne}
            />
            <Footer/>
        </>
    )
}

export default App;
