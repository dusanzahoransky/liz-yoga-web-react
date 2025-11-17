import Footer from "./Footer";
import DetailsHeading from "./classDetails/DetailsHeading";
import '../image-gallery.css';
import img1 from "../images/session-de-relajacion/1.jpg";
import img2 from "../images/session-de-relajacion/2.jpg";
import img3 from "../images/session-de-relajacion/3.jpg";
import img4 from "../images/session-de-relajacion/4.jpg";
import img5 from "../images/session-de-relajacion/5.jpg";
import img6 from "../images/session-de-relajacion/6.jpg";
import img7 from "../images/session-de-relajacion/7.jpg";
import img8 from "../images/session-de-relajacion/9.jpg";
import img9 from "../images/session-de-relajacion/10.jpg";
import img10 from "../images/session-de-relajacion/8.jpg";
import ImageGallery from "react-image-gallery";


function SesionDeRelajacion() {

    const images = [
        {
            original: img1,
            thumbnail: img1,
        },{
            original: img2,
            thumbnail: img2,
        },{
            original: img3,
            thumbnail: img3,
        },{
            original: img4,
            thumbnail: img4,
        },
    ]
    const imagesVertical = [
        {
            original: img5,
            thumbnail: img5,
        },{
            original: img6,
            thumbnail: img6,
        },{
            original: img7,
            thumbnail: img7,
        },{
            original: img8,
            thumbnail: img8,
        },{
            original: img9,
            thumbnail: img9,
        },
    ]

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Celebra tus Fechas Especiales'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Una manera distinta de celebrar tus fechas especiales de cumpleaños, blessingway, despedida de soltera, cierre de año, inicio de año, entre otros.</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />
                </div>

                <div className="row">
                    <div className="col-md-7">
                        <p className="text-justify"><b>Será una sesión de hasta 90 minutos dedicados a nutrir tu ser a través de:
                            dedicados a nutrir
                            tu ser a través
                            de:
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <li>Ejercicios de
                                Respiración/Pranayama para anclarnos al momento presente, llegar a la calma y relajacion del cuerpo y mente acompañado de baño de sonidos con cuencos tibetanos y de cristal.
                            </li>
                            <li>Practica corta de yoga con movimientos suaves y estiramiento a tu cuerpo para dejar fluir la campo energetico y con ello liberar tensión, estrés,
                                ansiedad, preocupaciones y
                                aliviar dolores corporales y del alma.
                            </li>
                            <li>Meditación Guiada (dirigida al tema de la celebración)
                            </li>
                            <li>Ritual enfocado al tema de Celebración
                            </li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Lo decidiremos en común acuerdo.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Por Definir.</p>
                        <h3>Intercambio de Valor</h3>
                        <p>Por Acordar dependiendo lugar, dia y numero de personas</p>
                        {/*<h3>Link de Acceso:</h3>*/}
                        {/*<p><a className="call-link" href="https://meet.google.com/dxw-pzbd-mtx">Sesión de Relajación Jueves 4 Julio 7:30 pm Hora Sydney</a></p>*/}

                        {/*<h3>Que debes tener listo para la sesión?</h3>*/}
                        {/*<ul className="class-preparation-list text-justify">*/}
                            {/*<li>Ten a la mano tu mat de yoga/esterilla o algo que se le parezca.</li>*/}
                            {/*<li>Ten a la mano una cobija para que te abrigues bien.</li>*/}
                            {/*<li>Ten a la mano un cojin de meditacion, no es mandatario sino cuentas con el.</li>*/}
                            {/*<li>Si tienes un candle utilizalo para que intensiones la sesión.</li>*/}

                            {/*<h3>Aspectos a Tener en cuenta</h3>*/}
                            {/*<li>Asegurate que el espacio en el que tomes la sesión sea tranquilo y sin mucho ruido.</li>*/}
                            {/*<li>Conéctate a traves de tu portatil y utiliza tus audifonos, sino tienes portatil utiliza*/}
                            {/*    tu celular.*/}
                            {/*</li>*/}
                            {/*<li>Te recomiendo conectarte a las 7:25 pm, aunque si no alcanzas a llegar puntual, puedes*/}
                            {/*    unirte cuando te sea posible.*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <ImageGallery items={imagesVertical} thumbnailPosition='right' autoPlay={true} />
                    </div>
                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default SesionDeRelajacion;
