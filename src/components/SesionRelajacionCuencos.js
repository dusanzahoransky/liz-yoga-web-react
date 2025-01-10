import jpg1 from '../images/session-relajacion-cuencos/1.jpg';
import jpg2 from '../images/session-relajacion-cuencos/2.jpg';
import jpg3 from '../images/session-relajacion-cuencos/3.jpg';
import jpg4 from '../images/session-relajacion-cuencos/4.jpg';
import jpg5 from '../images/session-relajacion-cuencos/5.jpg';
import jpg6 from '../images/session-relajacion-cuencos/6.jpg';
import jpg7 from '../images/session-relajacion-cuencos/7.jpg';
import jpg8 from '../images/session-relajacion-cuencos/8.jpg';
import jpg9 from '../images/session-relajacion-cuencos/9.jpg';
import jpgt1 from '../images/session-relajacion-cuencos/1-t.jpg';
import jpgt2 from '../images/session-relajacion-cuencos/2-t.jpg';
import jpgt3 from '../images/session-relajacion-cuencos/3-t.jpg';
import jpgt4 from '../images/session-relajacion-cuencos/4-t.jpg';
import jpgt5 from '../images/session-relajacion-cuencos/5-t.jpg';
import jpgt6 from '../images/session-relajacion-cuencos/6-t.jpg';
import jpgt7 from '../images/session-relajacion-cuencos/7-t.jpg';
import jpgt8 from '../images/session-relajacion-cuencos/8-t.jpg';
import jpgt9 from '../images/session-relajacion-cuencos/9-t.jpg';

import Footer from "./Footer";
import DetailsHeading from "./classDetails/DetailsHeading";
import '../image-gallery.css';
import ImageGallery from "react-image-gallery/src/components/ImageGallery";

function SesionRelajacionCuencos() {

    const images = [
        {
            original: jpg1,
            thumbnail: jpgt1,
        },
        {
            original: jpg2,
            thumbnail: jpgt2
        },
        {
            original: jpg3,
            thumbnail: jpgt3
        },
        {
            original: jpg4,
            thumbnail: jpgt4
        },
        {
            original: jpg5,
            thumbnail: jpgt5
        },
        {
            original: jpg6,
            thumbnail: jpgt6
        },
        {
            original: jpg7,
            thumbnail: jpgt7
        },
        {
            original: jpg8,
            thumbnail: jpgt8
        },
        {
            original: jpg9,
            thumbnail: jpgt9
        }
    ]

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Sesión de Relajación Con Cuencos Tibetanos y de Cuarzo Privada'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Esta sesión especial va dirigida a las personas que necesitan un descanso, que en su dia a dia tienen mucho trabajo, donde sienten que la mente está todo el tiempo en movimiento, para aquellas personas que sufren de ansiedad, estrés, insomnio y preocupaciones frecuentes.

                            Es un espacio de relajación profunda para tu cuerpo físico y mental una recarga profunda a tu sistema energético, esta terapia se realizará especialmente con los cuencos tibetanos que serán posicionados en puntos especificos de todo cuerpo en donde a traves de la vibración y el sonido desbloquearan organos, relajaran los musculos de tu cuerpo y proporcionará un descanso a tu mente.</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />
                </div>

                <div className="row">
                    <div className="col">
                        <p className="text-justify"><b>Sesión de 60 minutos dedicados a la relajación profunda de todo cuerpo y en especial de tu mente.
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <li>Comenzamos con Ejercicios de
                                Respiración/Pranayama para anclarnos al momento presente, llegar a la calma y relajacion del cuerpo y mente acompañado de baño de sonidos con cuencos tibetanos y de cristal.
                            </li>
                            <li>los cuencos tibetanos serán llevados por zonas esenciales de tu cuerpo para que a través de la vibración y el sonido atraviese tu piel y llegue hasta tus músculos y órganos para relajarlos y desbloquearlos.
                            </li>
                            <li>Terminamos con baño de sonidos
                            </li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Hurstville.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Lo definiremos en conjunto.</p>
                        <h3>Intercambio de Valor</h3>
                        <p>111 AUD, Se deben transferir al número celular 0413147237</p>
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

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default SesionRelajacionCuencos;
