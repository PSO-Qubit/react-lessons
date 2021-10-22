import 'bootstrap/dist/css/bootstrap.min.css';

function Counting({counts}){
    const elements = counts[0].map((el) =>
        <li className="list-group-item text-center display-4">{el}</li>
    );
    return(
        <ul className="list-group list-group-flush">
            { elements }
        </ul>

    )
}

export default Counting;