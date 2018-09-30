import React, { Component } from 'react';

class CharCard extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const charData = this.props.charData
        
        return (
           
            <div> {console.log(charData)}</div>
        );
    }
}

export default CharCard;