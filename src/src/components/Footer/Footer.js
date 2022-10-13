import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <p className="small center">
                    Test Project. See
                    project on <a href="https://github.com/PetarRan/lyrics-search-app">Github</a>.
                </p>
            </div>
        );
    }
}

export default Footer;