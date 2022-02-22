import {Carousel} from "react-bootstrap";

function CarouselImages(props) {
    const carouselItems = []
    let imageIndex = 0
    for (const carouselImage of props.carouselImages){
        carouselItems.push(
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselImage}
                    alt={`carousel image ${++imageIndex}`}
                />
            </Carousel.Item>
        )
    }
    return (
        <Carousel>
            {carouselItems}
        </Carousel>
    );
}

export default CarouselImages;