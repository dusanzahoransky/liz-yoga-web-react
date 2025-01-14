import jpg1 from '../images/session-relajacion-cuencos/1.jpg';
import jpg2 from '../images/session-relajacion-cuencos/2.jpg';
import jpg3 from '../images/session-relajacion-cuencos/3.jpg';
import jpgt1 from '../images/session-relajacion-cuencos/1-t.jpg';
import jpgt2 from '../images/session-relajacion-cuencos/2-t.jpg';
import jpgt3 from '../images/session-relajacion-cuencos/3-t.jpg';

import Footer from "./Footer";
import DetailsHeading from "./classDetails/DetailsHeading";
import '../image-gallery.css';
import ImageGallery from "react-image-gallery";

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
        }
    ]

    function isPrivate() {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams && queryParams.get('code') === 'SesionRelajacionCuencos'
    }

    function getPrice() {
        if(isPrivate()) {
            return <>
                <h3>Intercambio de Valor</h3>
                <p>111 AUD, Se deben transferir al número celular 0413147237</p>
            </>
        }
    }

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Sesión Privada de Relajación Con Cuencos Tibetanos y de Cuarzos'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Esta sesión especial va dirigida a las personas que necesitan un descanso, para aquellos que
                            sienten que la mente está todo el tiempo en movimiento, aquellas personas que sufren de ansiedad, estrés, insomnio y preocupaciones frecuentes.

                            Es un espacio de relajación profunda para tu cuerpo físico y mental, una recarga profunda a tu sistema energético.
                        </p>
                            <p>Esta terapia se realiza especialmente con los cuencos tibetanos que son posicionados en puntos específicos en todo cuerpo y a través de la vibración y el sonido
                            desbloquearan tus organos, relajarás los músculos de tu cuerpo y proporcionará un descanso a tu mente.</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true}/>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="text-justify"><b>Sesión de 60 minutos dedicados a la relajación profunda de todo cuerpo y en especial a tu mente.
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <li>Comenzamos con Ejercicios de
                                Respiración/Pranayama para anclarnos al momento presente, llegar a la calma y relajacion del cuerpo y mente acompañado de baño de sonidos con
                                cuencos tibetanos y de cristal.
                            </li>
                            <li>los cuencos tibetanos serán ubicados en zonas esenciales de tu cuerpo (por delante y por detrás) para que a través de la vibración y el sonido tus músculos y órganos se relajen y desbloqueen.
                            </li>
                            <li>Terminamos con baño de sonidos
                            </li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Hurstville.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Lo definiremos en conjunto.</p>

                        {getPrice()}
                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default SesionRelajacionCuencos;
