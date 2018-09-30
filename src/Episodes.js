import React, { Component } from 'react';

const style = {
    width: "100%",  
}

class Episodes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            episodeData: "",
        }
    }

    getCharacters() {
        fetch('https://rickandmortyapi.com/api/episode/')
        .then((response) => {
            return response.json();
        })
        .then((data) => { 
            this.setState({ episodeData: data });
        })
        .catch((error) => {
            console.log(error);
        }) 
    }



    render() {
        return (
            <div style={style}>
                <h2>Episodeasddas</h2>
            </div>
        );
    }
}


export default Episodes;