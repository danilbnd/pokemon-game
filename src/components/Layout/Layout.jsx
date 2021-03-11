import React from "react";

import layout from './layout.module.css'

const Layout = ({ title, descr, urlBg = null, colorBg= null }) => {
    const bg = urlBg ? {backgroundImage: `url(${urlBg})`} : {backgroundColor: `${colorBg}`}
    return (
<section style={bg}  className={layout.root}>
    <div className={layout.wrapper}>
        <article>
            <div className={layout.title}>
                {
                    title ? (<h3>{title}</h3>) : null
                }
                <span className={layout.separator}></span>
            </div>
            <div className={`${layout.desc} ${layout.full}`}>
                {
                    descr ? (<p>{descr}</p>) : null
                }
            </div>
        </article>
    </div>
</section>

    )
}

export default Layout;