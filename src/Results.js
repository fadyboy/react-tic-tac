import React, { Component } from 'react';


class Results extends Component {

    displayButton(){
        const win = this.props.winner;
        if(win !== ""){
            return (
                <button onClick={this.props.reset} className="btn">Play again?</button>
            )
        }else{
            return 
        }
        
    }

    render(){
        
        var btn = this.displayButton();
        return (
            <div className="results">
                {this.props.winner} <br />
                {btn}
            </div>
        )
    }
}

export default Results;