import Navbar from "./navbar";

export default function Root() {
    return (
      <>
      <div className="pagina">
         <Navbar />

          <div className="about">
            <h1>Bem vindo ao gerador frases </h1>
            <p>por favor escolha uma das opções acima</p>
          </div>
      </div>
      </>
    );
  }