import { useState } from 'react';
import Formulario from './componentes/Formulario';
import ResultadoIMC from './componentes/ResultadoIMC';

function App() {

  const [resultados, setResultados] = useState([])

  const incrementarResultado = (novoResultado) => {
    setResultados([
      novoResultado,
      ...resultados
    ])
  }
  const tabelaIMC = () => {
    return (
      <table>
        <thead> 
          <tr>
            <th>
              Classificação
            </th>
            <th>
             IMC
            </th>
          </tr>
        </thead>
        <tbody>
         <tr>
            <td>Abaixo do Peso </td>
            <td>Abaixo de 18,5 </td>
          </tr>
          <tr>
            <td>Peso Normal </td>
            <td>Entre 18,6 e 24,9 </td>
          </tr>
          <tr>
            <td>SobrePeso </td>
            <td>Entre 25 e 29,9 </td>
          </tr>
          <tr>
            <td>Obesidade Grau 1 </td>
            <td>Entre 30 e 34,9 </td>
          </tr>
          <tr>
            <td>Obesidade Grau 2 </td>
            <td>Entre 35 e 39,9 </td>
          </tr>
          <tr>
            <td>Obesidade Grau 3 ou Mórbida </td>
            <td>Maior que 40 </td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className="App">
      <h1>Calculadora de índice de massa corporal</h1>
      <Formulario aoCalcular={incrementarResultado}/>
      {
        resultados.map((resultado, indice) => 
        <ResultadoIMC 
          key={indice}
          peso={resultado.peso} 
          altura={resultado.altura} 
          imc={resultado.imc} 
        />)
      }

      
    </div>
  );
}

export default App;