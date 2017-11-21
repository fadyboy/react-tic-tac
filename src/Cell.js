import React, { Component } from 'react';


class Cell extends Component {
    
    render(){
       
        return (
            <div className="square"
             onClick={this.props.handle}
            >
            {this.props.cell}
            </div>
        )
    }
}

export default Cell;