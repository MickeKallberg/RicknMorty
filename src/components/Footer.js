import React, { Component } from 'react';

const style = {
    maxWidth: "960px",
    padding: "40px",
    textAlign: "center",
    border: "1px solid blue"
}

const badge = {
    padding: "10px",
    lineHeight: "1.6em",
}

class Footer extends Component {

    render() {
        return (
            <a href="https://github.com/MickeKallberg" target="_blank">
            <div style={style}>
            <span className="badge badge-primary" style={badge}>
            <i class="fab fa-github-alt fa-2x"></i><br />
            MykeSuccess</span>
            </div>
            </a>
        );
    }
}

export default Footer;