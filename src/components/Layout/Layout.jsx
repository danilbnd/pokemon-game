import React from "react";

import layout from './layout.module.css'

const Layout = ({ title, urlBg = null, colorBg= null, children, colorTitle}) => {
    const style = {};
    if (urlBg) { style.backgroundImage = `url(${urlBg})` }
    if (colorBg) { style.backgroundColor = colorBg }
    if (colorTitle) { style.color = colorTitle }
    return (
<section style={style}  className={layout.root}>
    <div className={layout.wrapper}>
        <article>
            <div className={layout.title}>
                {
                    title ? (<h3>{title}</h3>) : null
                }
                <span className={layout.separator}></span>
            </div>
            <div className={`${layout.desc} ${layout.full}`}>
                {children}
            </div>
        </article>
    </div>
</section>

    )
}

export default Layout;