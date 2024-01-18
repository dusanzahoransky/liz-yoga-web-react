function ClassInfo(props) {
    let place = props.place?
        <>
            <h3>Lugar</h3>
            <p>{props.place}</p>
        </> : <></>
    return (
        <>
            {place}
            <h3>Hora</h3>
            <p>{props.hour}</p>
        </>
    );
}

export default ClassInfo;