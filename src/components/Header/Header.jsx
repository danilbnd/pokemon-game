import React from "react";

import header from './header.module.css'


const Header = ({title, descr}) => {
    return (
        <header className={header.root}>
            <div className={header.forest}></div>
            <div className={header.container}>
                {
                   title ? (<h1>{title}</h1>) : null
                }

                {
                    descr ? (<p>{descr}</p>) : null
                }
            </div>
        </header>
    )
}

export default Header;