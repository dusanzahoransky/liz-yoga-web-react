import DetailsHeading from "./classDetails/DetailsHeading";
import ImageGallery from "react-image-gallery";
import inPerson2 from "../images/groups-in-person/card-groups-in-person-2.jpg";
import workshop from "../images/workshop-in-person/card-workshop-in-person-6.jpg";

function Gallery() {

    const images = [
        {
            original: inPerson2,
            thumbnail: inPerson2,
        },
        {
            original: workshop,
            thumbnail: workshop,
        }
    ]

    return (
        <main role="main">

            <DetailsHeading text='Yoga with Liz experience'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={false} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Gallery;