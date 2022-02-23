import {Carousel} from "react-bootstrap";

function CarouselImages(props) {
    const carouselItems = []
    for (const i in props.carouselImages){
        carouselItems.push(
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.carouselImages[i]}
                    alt={`carousel image ${i}`}
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