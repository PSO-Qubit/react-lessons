import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counting from "./Counting";

function Joke() {
    const QUO = Math.floor(1000/7);

    const [isGhoul, setIsGhoul] = useState(false);
    const [counts, setCounts] = useState(1000);
    const [components, setComponents] = useState([]);

    useEffect(() => {
        if(isGhoul && counts - 7 > 0)
            setTimeout(() => {
                setComponents([ ...components, counts.toString() + ' - 7 = ' + (counts-7).toString()]);
                setCounts(counts-7)
            }, 500); // TODO: Доработать useEffect
    });

   return(
        <div className={'h-100 row align-items-center'}>
            <h1 className={'display-1 text-center mt-4'}>Кто ты?</h1>
            <button type="button" className="btn btn-dark mt-5 mb-5" onClick={() => {
                setIsGhoul(true);
            }}>
                <h3 className={'display-3'}> Я гуль :(</h3>
            </button>
            <Counting counts={ [components] } />
        </div>
    )
}

export default Joke;