import React from "react";
import ProgressBar from "./ProgressBar";



class bodyLanguages extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
               <h1 id="skills" className="item-header">Languages Skills</h1>
                <div className="container-splitter" >
                    <div className="col-container">
                    <ProgressBar title="English" level="Upper-Intermediate" percent="60%"
                    />
                    <ProgressBar title="Romanian" level="Intermediate" percent="35%"/>
                    
                    </div>

                    <div className="col-container" id="Education" >
                    <ProgressBar title="Russian" level="Native" percent="100%"/>
                    <ProgressBar title="Ukrainian" level="Native" percent="90%"/>
                    
                    </div>
                </div>
                
            </div>
        )


    }

}
 export default bodyLanguages;
