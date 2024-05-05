/* importar módulos
import React from 'react';
import ReactDOM  from 'react-dom';

// Estrutura
const estrutura =
<div>
    <h1>Meu primeiro render</h1>
    <p>Testando...</p>
</div>

//Render
ReactDOM.render(
estrutura,
document.getElementById('root')
);*/

import React from 'react';
import ReactDOM  from 'react-dom';
 
//const elemento = React.createElement('h1', {}, 'Sem JSX');
//ReactDOM.render(elemento, document.getElementById('root'));

ReactDOM.render(<h1>Com JSX</h1>, document.getElementById('root'));