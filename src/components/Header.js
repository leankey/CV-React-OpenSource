import React from "react";
import './Header.css'


class Header extends React.Component {
    render() {
        return (

            <div className="header" >
                <div className="namediv">
            <span className="namespan">{this.props.Name}</span>
            <hr color="#e3cd00"/>
            </div>
            <div className="menu">
                <a className="anchor-a" href="#about">About</a>
                <a className="anchor-a" href="#skills">Skills</a>
                <a className="anchor-a" href="#Languages">Languages</a>
                <a className="anchor-a" href="#Education">Education</a>
                <a className="anchor-a" href="#Portfolio">Portfolio</a>
                
            </div>
            </div>
        )


    }

}
 export default Header