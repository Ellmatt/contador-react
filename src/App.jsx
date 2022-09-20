// para importar librerias
import Contador from "./components/Contador";
import Subtitulo from "./components/Subtitulo";
import Tituloprincipal from "./components/Tituloprincipal";
// para importar las ojas de estilo
import './style.css'

function App() {
  // aquie va la mayoria de la logica
  const comision = "c6i";

  return (
    <>
      {/* <TituloPrincipal></TituloPrincipal> */}

      <Tituloprincipal codigoComision={comision} estado={true} />
      <Subtitulo></Subtitulo>
      <Contador></Contador>
    </>
  );
}

export default App;
