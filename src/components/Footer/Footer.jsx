import React from "react";

import footer from'./footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={footer.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    )
}

export default Footer;