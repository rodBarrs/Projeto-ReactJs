import React from "react";
import ReactDOM from 'react-dom';

class MeuComponente extends React.Component{

    constructor(props){
        super(props);

        this.state={exibir : false};
    }

    alterarState = () => {

        let converter = !this.state.exibir;

        this.setState({exibir : converter});

    }

    render(){

    let meuTexto = '';
    if(this.state.exibir === true){
        meuTexto = <h1>Ola!!! Utilizando condicionais</h1>
    }else{
        meuTexto = ''
    }

        return(
            <div>
                {meuTexto}
               <button onClick={this.alterarState}> Clique aqui </button>
            </div>
        );
    }

   
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));
