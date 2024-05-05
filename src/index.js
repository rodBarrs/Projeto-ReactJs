import React from "react";
import ReactDOM from 'react-dom';

class MeuComponente extends React.Component{

    mensagem(nome){
        alert('Ola ' + nome);
        console.log(this)
    }

    minhaArorowFunction = (curso) =>{
        alert('Estou fazendo o curso de ' + curso);
    } 

    render(){
        return(
            <div>
                <button onClick={this.mensagem.bind(this,'Rodrigo')}>Clique aqui</button>
                <button onClick={() => this.minhaArorowFunction('ReactJS')}> Arrow Function </button>
            </div>
        );
    }

   
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));
