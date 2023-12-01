import { useState } from "react";
import { quotes } from './dbBom';
import Card from "./Card";


export default function Banco() {
  const [index, setIndex] = useState();
  const generate = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setIndex(index);

  };
  return (
    <>
    <div className="Banco">
        <Card>
        <p>{quotes[index] && quotes[index].quote}</p>
        <p className="cite">{quotes[index] && quotes[index].cite}</p>
        </Card>
    </div>
    <div className="Banco"><button onClick={generate}>Gerar</button></div>

    </>
  );
}