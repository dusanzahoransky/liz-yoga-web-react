function PreparationItems(props) {

    const preparationItems = []
    for (const i in props.preparationItems){
        preparationItems.push(
            <li key={i}>{props.preparationItems[i]}</li>
        )
    }

    return (
        <>
            <h3>Aspectos a Tener en cuenta</h3>
            <ul className="class-preparation-list text-justify">
                {preparationItems}
            </ul>
        </>
    );
}

export default PreparationItems;