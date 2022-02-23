function ClassInfo(props) {
    let place = props.place?
        <>
            <h3>LUGAR</h3>
            <p>{props.place}</p>
        </> : <></>
    return (
        <>
            <h3>HORARIO</h3>
            <p>{props.hour}</p>
            {place}
            <h3>PRECIO</h3>
            <p>{props.price}</p>
        </>
    );
}

export default ClassInfo;