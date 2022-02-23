function PreparationItems(props) {

    const preparationItems = []
    for (const preparationItem of props.preparationItems){
        preparationItems.push(
            <li>{preparationItem}</li>
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