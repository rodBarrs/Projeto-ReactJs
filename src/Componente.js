import React from "react";

class Componente extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: 'Ralf' };
    }

    render() {
        return <h1>{this.state.nome}</h1>;
    }

    ReactDOM; render(, Componente) { }
}
