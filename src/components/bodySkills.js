import React from "react";
import './bodySkills.css';
import ProgressBar from "./ProgressBar";



class bodySkills extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
               <h1 id="skills" className="item-header">Professional Skills</h1>
                <div className="container-splitter">
                    <div className="col-container">
                    <ProgressBar title="HTML" level="Upper-intermediate" percent="75%"
                    />
                    <ProgressBar title="CSS" level="Intermediate" percent="50%"/>
                    <ProgressBar title="JavaScript" level="Basic" percent="40%"/>
                    </div>

                    <div className="col-container">
                    <ProgressBar title="React-JS" level="Basic" percent="45%"/>
                    <ProgressBar title="HTTP" level="Basic" percent="35%"/>
                    < ProgressBar  title="C++ / Java / C#" level="Basic" percent="30%"/>
                    </div>
                </div>
                
                <div className="note-div" id="Languages">
                 <p>I know the basic level of such programming languages ​​as C++, Java, C#, JavaScript, HTML hypertext markup language, CSS decoration language, basic knowledge of the HTTP protocol. Worked with such libraries and frameworks as Boostrap, ReactJS.</p>
                </div>
                
            </div>
        )


    }

}
 export default bodySkills;
