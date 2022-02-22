import {Carousel} from "react-bootstrap";

function ClassInfo(props) {

    const preparationItems = []
    for (const preparationItem of props.preparationItems){
        preparationItems.push(
            <li>{preparationItem}</li>
        )
    }

    return (
        <>
            <h3>HORARIO</h3>
            <p>{props.hour}</p>
            <h3>LUGAR</h3>
            <p>{props.place}</p>
            <h3>PRECIO</h3>
            <p>{props.price}</p>
            <h3>Aspectos a Tener en cuenta</h3>
            <ul className="class-preparation-list text-justify">
                {preparationItems}
            </ul>
        </>
    );
}

export default ClassInfo;