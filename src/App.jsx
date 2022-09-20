import Subtitulo from "./components/Subtitulo";
import Tituloprincipal from "./components/Tituloprincipal";


function App() {
    // aquie va la mayoria de la logica
const comision = 'c6i';

  return (
  
  
    <>

    {/* <TituloPrincipal></TituloPrincipal> */}
   
  <Tituloprincipal codigoComision={comision} estado={true} />
  <Subtitulo></Subtitulo>
    </>
  );
}

export default App;
