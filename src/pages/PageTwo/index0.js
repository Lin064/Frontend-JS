import React from "react";
import { DropzoneArea } from 'material-ui-dropzone';

class PageTwo extends React.Component {
    // init data
    constructor(props) {
        super(props);

        this.state = {
            // data that will be used/changed in render function

        }
        // Every function that interfaces with UI and data used 
        // in this class needs to bind like this:
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div>
                Hello Page two!
                </div>
                <div>
                    <button onClick={this.handleOnClick}>to homepage</button>
                </div>
                <DropzoneArea onChange={(files) => console.log('Files:', files)}/>

            </div>
          );
    }
    
  }
  
  export default PageTwo;