import React from "react";
import ReactDOM from 'react-dom';

class MeuComponente extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {nome:'Rodrigo'};
    }

    mensagem(){
        alert('Hello World');
    }

    render(){
        return <button onClick={this.mensagem}>Clique aqui</button>;
    }

   
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));
