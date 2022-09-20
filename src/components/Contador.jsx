import { useState } from "react";

const Contador = () => {
  // zona donde se escribe logica
  let prueba = 10;
  // crear un state
  const [numero, setNumero] = useState(10);

  const sumar = () => {
    // console.log ('desde sumar')
    //    numero++ nunca modificar directamebnte el state
    setNumero(numero + 1);
  };
  const restar = () => {
    // console.log ('desde sumar')
    //    numero++ nunca modificar directamebnte el state
    setNumero(numero - 1);
  };
  const resetear = () => {
    // console.log ('desde sumar')
    //    numero++ nunca modificar directamebnte el state
    setNumero(0);
  };
  return (
    // zona donde se puede escribir logica
    <div>
      {/* aqui va el maquetado */}
      <h2>Contador</h2>
      <h3>{numero}</h3>
      <button onClick={sumar}>+1</button>
      {/* agregar 2 botones uno que reste y uno que resetee el state */}
      <button onClick={restar}>-1</button>
      <button onClick={resetear}>resetear</button>
    </div>
  );
};

export default Contador;
