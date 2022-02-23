import PreparationItems from "./PreparationItems";

function ClassInfo(props) {
    return (
        <>
            <h3>HORARIO</h3>
            <p>{props.hour}</p>
            <h3>LUGAR</h3>
            <p>{props.place}</p>
            <h3>PRECIO</h3>
            <p>{props.price}</p>
            <h3>Aspectos a Tener en cuenta</h3>
            <PreparationItems preparationItems={props.preparationItems}/>
        </>
    );
}

export default ClassInfo;