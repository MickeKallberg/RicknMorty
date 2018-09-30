import React, { Component } from 'react';
import CharCard from './CharCard';

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetch: "",
        }

    }

    getCharacters() {
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => {
            return response.json();
        })
        .then((charData) => { 
            this.setState({
                fetch: charData
            })
        })
        .catch((error) => {
            console.log(error);
        }) 
    }

    componentWillMount() {
        this.getCharacters()
    }

    render() {
        return (
            <div>
                <h1>Characters</h1>
                <CharCard CharData={this.state.fetch} />
            </div>
        );
    }
}

export default Characters;