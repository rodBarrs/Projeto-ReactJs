import React from "react";
import ReactDOM from 'react-dom';
//import './estilos.css';

class MeuComponente extends React.Component{


  constructor(props){
    super(props);

    this.state = {cor : 'vermelha'};
  }
    componentDidMount(){
      setTimeout(() => {
        this.setState({cor : 'azul'})
      }, 2000);
    }

    render(){
        return(
         <h1>Minha cor preferida é {this.state.cor}</h1>
        );
    }

   
}


ReactDOM.render(<MeuComponente />, document.getElementById('root'));
