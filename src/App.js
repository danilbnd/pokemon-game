import React from "react";
import './App.css';

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import pokemon from "./assets/img/bg1.jpg"

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
                urlBg={pokemon}
            />
            <Layout
                title="This is title layout block two"
                descr="This is Description layout block! two"
                colorBg="red"
            />
            <Layout
                title="This is title layout block three"
                descr="This is Description layout block! three"
                urlBg={pokemon}
            />
            <Footer/>
        </>
    )
}

export default App;
