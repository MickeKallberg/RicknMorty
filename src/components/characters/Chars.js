import React, { Component } from 'react';

//CSS-STYLE

const flexbox = {
    display: "flex",
    flexWrap: "wrap"
}

const charStats = {
    fontSize: "0.8em",
    marginRight: "5px"
}

const card = {
    margin: "15px",
    maxWidth: "calc(100% / 3 - 30px)",
    textAlign: "center",
}

const imgContainer = {
    maxWidth: "95%",
    padding: "5px"
}

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charData: "",
        }
    }

    getCharacters() {
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => {
            return response.json();
        })
        .then((data) => { 
            this.setState({ charData: data });
        })
        .catch((error) => {
            console.log(error);
        }) 
    }


    componentDidMount() {
        this.getCharacters()
    }

    createCards(props)  {
        let characters = this.state.charData.results;

        const cards = (
        <div style={flexbox}>
            {characters.map((char) =>
                <CharCard   key={char.id}
                            name={char.name} 
                            status={char.status}
                            species={char.species}
                            gender={char.gender}
                            image={char.image}            
                />
            )}

        </div>
        );

        return (
        <div>
            {cards}
        </div>    
        );
    }

    render() {
        return (
            <div>
                <h1 className="mb-5">Rick n Morty</h1>
                <h2>Characters: </h2>
                {this.state.charData && this.createCards()}
            </div>
        );
    }
}

class CharCard extends Component {
    
    render() {
        let chars = this.props.chars;
        
        return (
            <div className="card border-success mb-3" style={card}>
                <div className="card-header">
                {this.props.name}
                </div>
                <div className="card-body">
                <img src={this.props.image} style={imgContainer}/>
                <span className="card-text">
                    {this.props.status + " "}
                    {this.props.species + " "}
                    {this.props.gender}
                </span>
                </div>

            </div>
        );

    }
}



export default Characters;