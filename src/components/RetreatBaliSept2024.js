import retreat1 from '../images/retreat-bali-sept-24/card-reatreat-1.jpg';
import retreat2 from '../images/retreat-bali-sept-24/card-reatreat-2.jpg';
import retreat3 from '../images/retreat-bali-sept-24/card-reatreat-3.jpg';
import retreat4 from '../images/retreat-bali-sept-24/card-reatreat-4.jpg';
import retreat5 from '../images/retreat-bali-sept-24/card-reatreat-5.jpg';
import retreat6 from '../images/retreat-bali-sept-24/card-reatreat-6.jpg';
import retreat1Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-1-thumb.jpg';
import retreat2Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-2-thumb.jpg';
import retreat3Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-3-thumb.jpg';
import retreat4Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-4-thumb.jpg';
import retreat5Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-5-thumb.jpg';
import retreat6Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-6-thumb.jpg';
import baliRetreatLocation from '../images/retreat-bali-sept-24/bali-retreat-location.jpg';
import deluxe1 from '../images/retreat-bali-sept-24/deluxe1.jpg'
import deluxe2 from '../images/retreat-bali-sept-24/deluxe2.jpg'
import deluxe3 from '../images/retreat-bali-sept-24/deluxe3.jpg'
import deluxe4 from '../images/retreat-bali-sept-24/deluxe4.jpg'
import suite1 from '../images/retreat-bali-sept-24/suite1.jpg'
import suite2 from '../images/retreat-bali-sept-24/suite2.jpg'
import suite3 from '../images/retreat-bali-sept-24/suite3.jpg'
import suite4 from '../images/retreat-bali-sept-24/suite4.jpg'
import villa1 from '../images/retreat-bali-sept-24/villa1.jpg'
import villa2 from '../images/retreat-bali-sept-24/villa2.jpg'
import villa3 from '../images/retreat-bali-sept-24/villa3.jpg'
import villa4 from '../images/retreat-bali-sept-24/villa4.jpg'
import villa5 from '../images/retreat-bali-sept-24/villa5.jpg'
import villa6 from '../images/retreat-bali-sept-24/villa6.jpg'

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import PreparationItems from "./classDetails/PreparationItems";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";

function RetreatBaliSept2024() {

    function isPrivate() {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams && queryParams.get('code') === 'Bali2024'
    }

    function getPriceSection() {
        if (!isPrivate()) {
            return <p>El valor del Retiro de Yoga y Bienestar comienza desde
                <span className="fw-bolder"> $1.890 AUD (Pregunta por descuento early bird y otros).
                </span> Si deseas información más detallada e incluyendo precios por
                favor dilegencia el formulario a continuación:
            </p>
        } else {
            return <>
                <div className="row">
                    <h3>El valor del Retiro de Yoga y Bienestar</h3>
                </div>

                <div className="row"><span className="fw-bolder">Deluxe Room</span></div>
                <div className="row">
                    <div className="col-lg-7">
                        OPCIÓN 1: Habitación compartida con tu mejor amiga(o) /pareja en una cama king (2 personas).
                    </div>
                    <div className="col-lg-2">
                        $1,890 AUD
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        OPCIÓN 2: Habitación compartida con una cama king y una cama individual (2 personas).
                    </div>
                    <div className="col-lg-2">
                        $2,090 AUD
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        OPCIÓN 3: Habitación privada cama king.
                    </div>
                    <div className="col-lg-2">
                        $2,690 AUD
                    </div>
                </div>
                <div className="row space-before"><span className="fw-bolder">Suite Room</span></div>
                <div className="row">
                    <div className="col-lg-7">
                        OPCIÓN 1: Habitación compartida, dos camas sencillas (2 personas).
                    </div>
                    <div className="col-lg-2">
                        $2,090 AUD
                    </div>
                    <div className="col-lg-3">
                        <i>Recomendado para mayor comodidad</i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        OPCIÓN 2: Habitación privada cama king.
                    </div>
                    <div className="col-lg-2">
                        $2,790 AUD
                    </div>
                </div>
                <div className="row space-before"><span className="fw-bolder">Pool Villa</span></div>
                <div className="row">
                    <div className="col-lg-7">
                        OPCIÓN 1: Villa compartida con tu mejor amiga(o) /pareja en una cama king (2 personas).
                    </div>
                    <div className="col-lg-2">
                        $2,290 AUD
                    </div>
                    <div className="col-lg-3">
                        <i>Recomendado de Lujo</i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        OPCIÓN 2: Villa compartida con una cama king y cama sencilla (2 personas).
                    </div>
                    <div className="col-lg-2">
                        $2,390 AUD
                    </div>
                </div>
                <div className="row space-before">
                    <p><i className="fa fa-tag"></i> <span className="fw-bolder">EARLY BIRD</span> discount <span
                        className="fw-bolder">$100</span> descuento antes del 15 de Marzo (Acordamos cuotas para el resto del pago). Pago Total del Retiro hasta el día 10 de Julio.</p>
                    <p><i className="fa fa-tags"></i> <span className="fw-bolder">INVITA A UN AMIGA(O)</span> descuento solo para ti de <span
                        className="fw-bolder">$100</span> por recomendar a un amiga(o) y realize la reservación del Retiro.</p>
                </div>
            </>
        }
    }

    const images = [

        {
            original: retreat2,
            thumbnail: retreat2Thumbnail,
        }, {
            original: retreat1,
            thumbnail: retreat1Thumbnail,
        },
        {
            original: retreat3,
            thumbnail: retreat3Thumbnail,
        },
        {
            original: retreat4,
            thumbnail: retreat4Thumbnail,
        },
        {
            original: retreat5,
            thumbnail: retreat5Thumbnail,
        },
        {
            original: retreat6,
            thumbnail: retreat6Thumbnail,
        },
    ]

    return (<>
            <main role="main" className="container">

                <DetailsHeading text='Retiro de Yoga y Bienestar'/>
                <h3 className="details-subheading">Ubud - Bali, Septiembre 2024</h3>

                <div className="container details">

                    <div className="row">
                        <div className="col">

                            <p className="text-justify">Únete a nuestro Retiro de Yoga y Bienestar en el paraiso de Bali
                                y sumérgete en una experiencia transformadora para el cuerpo, mente y espiritu, un
                                espacio
                                para conectar, para explorar mucho más lo que habita en tí, para ir más profundo, para
                                que
                                dejes las capas a un lado y encuentres tu ser más autentico).</p>
                        </div>
                    </div>

                    <div className="row rem-2">
                        <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={false}/>
                    </div>

                    <div className="row">

                        <div className="col-md-12 text-justify">
                            <h3 className="text-center text-justify">Retiro de Yoga y Bienestar</h3>
                            {/*<div>*/}
                            {/*    <a href="https://maps.app.goo.gl/4RKv4Be8Sg9sqneC7" target='_blank' rel="noreferrer">*/}
                            {/*        <img className="classLocationMap"*/}
                            {/*             alt="map location Coogee beach" height="auto" src={baliRetreatLocation}></img>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            <p> Únete a nosotros en un Retiro de Yoga y Bienestar en nuestro impresionante Resort,
                                situado
                                en medio de tranquilos arrozales, con espacios exclusivos para que te relajes y te
                                rejuvenezcas. Si eres un yogui experimentado o simplemente estás comenzando tu viaje, te
                                damos la bienvenida para que abraces tu práctica y tu sentir en una comunidad solidaria
                                y
                                diversa.

                            </p>

                            <p><span className="fw-bolder">Cuándo:</span> Desde el 4 al 9 de Septiembre 2024 - 6 días, 5
                                noches de Pura
                                Transformación.</p>
                            <p><span className="fw-bolder">Dónde:</span> En el Paraiso de Ubud- Bali, Indonesia.</p>

                            <p><span className="fw-bolder">Nuestro Retiro Incluye:</span></p>
                            <ul>
                                <li> 5 noches - 6 dias en el alojamiento que elijas</li>
                                <li>
                                    Bebida de Bienvenida
                                </li>
                                <li>
                                    Comidas saludables e inolvidablemente deliciosas
                                </li>
                                <li>
                                    Postre local Balinese, té o café
                                </li>
                                <li>
                                    Transporte desde o hacia el Aeropuerto (un solo trayecto)

                                </li>
                                <li>
                                    Un Masaje corporal de relajación de 1 hora con masajista
                                    profesional
                                </li>
                                <li>
                                    Un Masaje relajante de pies por 15 minutos con masajista
                                    profesional
                                </li>
                                <li>
                                    Regalito
                                </li>
                                <li>Dos Tardes de Excursión a:
                                    <ul>
                                        <li>Los Arrozales
                                        </li>
                                        <li>
                                            Templo de Purificación de Agua
                                        </li>
                                        <li>Monkey Forest
                                        </li>
                                        <li>
                                            Cascada Natural
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <p><span className="fw-bolder">Nuestro Retiro No Incluye:</span></p>
                            <ul>
                                <li>Tiquetes aéreos</li>
                                <li>Visa</li>
                                <li>Seguro Médico de Viaje - mandatorio</li>
                            </ul>


                        </div>

                        <h2 className="text-center text-justify">Un Viaje hacia Adentro</h2>
                        <h3 className="text-center text-justify">Programación</h3>
                        <div className="row">
                            <p className="fw-bolder">Dia 1 - Miercoles</p>
                            <p>Ceremonia de Bienvenida, Cena de Integración</p>

                            <p className="fw-bolder">Dia 2 - Jueves</p>
                            <p>Pranayama (EJercicios de Respiración), Práctica de Vinyasa Yoga, Irémos más profundo en
                                los
                                diferentes tipos de Meditación enfocandonos en el poder de los mantras, Tiempo libre
                                para
                                descansar,
                                escribir, leer, disfrutar la piscina, o simplemente conectar con el resto de los
                                integrantes
                                del retiro, Yin yoga para relajar cuerpo y mente, Baño de sonidos con cuencos tibetanos
                                y de
                                cristal.</p>
                            <p className="fw-bolder">Dia 3 - Viernes</p>
                            <p>Pranayama (EJercicios de Respiración), Ashtanga Yoga, Meditación guiada, Taller de
                                Ayurveda,
                                visita a los Arrozales y al
                                Templo de Purificación de Agua, integración/actividades sociales luego de la cena.</p>

                            <p className="fw-bolder">Dia 4 - Sábado</p>
                            <p>Pranayama (EJercicios de Respiración), Bhakti Yoga, Baño de sonidos con
                                cuencos tibetanos y de cristal, Meditación con pintura y colores, Tiempo libre para ti,
                                Clase de Vinyasa para
                                Avanzar
                                en
                                tu Práctica.</p>
                            <p className="fw-bolder">Dia 5 - Domingo</p>
                            <p>Pranayama (EJercicios de Respiración), Práctica de Vinyasa Yoga, Ritual de Manifestación,
                                visita
                                al Monkey Forest y a una hermosa Cascada natural para soltar y fluir a través del agua,
                                integración/actividades
                                sociales luego de la cena.</p>
                            <p className="fw-bolder">Dia 6 - Lunes</p>
                            <p> Pranayama, Práctica de Vinyasa, Baño de sonidos con cuencos tibetanos y de cristal,
                                Ceremonia de
                                Cierre.</p>

                            Nota: Las actividades pueden cambiar ligeramente en el orden y dia.

                        </div>

                    </div>

                    <h2 className="text-center text-justify">Acomodación</h2>
                    <p className="fw-bolder">Deluxe Room:
                    </p>
                    <p>
                        Espaciosa habitación de lujo cuenta con pisos de ladrillo bien pulidos, cómodas camas tamaño
                        king o
                        dos camas individuales y un balcón privado con vista a las hermosas terrazas de arroz o jardines
                        tropicales. Esta elegante habitación del resort está equipada con minibar, aire acondicionado,
                        TV
                        por cable, servicio telefónico y acceso WiFi gratuito. La habitación incluye baño privado con
                        ducha
                        y bañera/tina de lujo. Se incluyen artículos de tocador.
                    </p>
                    <p>Ubicación en Primer Piso.</p>

                    <div className="row">
                        <div className="col-md-3">
                            <img className="room-photo" height="auto" src={deluxe1}></img>
                        </div>
                        <div className="col-md-3">
                            <img className="room-photo" height="auto" src={deluxe4}></img>
                        </div>
                        <div className="col-md-3">
                            <img className="room-photo" height="auto" src={deluxe2}></img>
                        </div>
                        <div className="col-md-3">
                            <img className="room-photo" height="auto" src={deluxe3}></img>
                        </div>
                    </div>
                    <p>Escoge tu mejor opción de Alojamiento:
                    </p>
                    <ul>
                        <li>OPCIÓN 1: Habitación compartida con tu mejor amiga(o) /pareja en una cama king (2
                            personas).
                        </li>
                        <li>OPCIÓN 2: Habitación compartida con una cama king y una cama individual (2 personas).
                        </li>
                        <li>OPCIÓN 3: Habitación privada cama king.</li>
                    </ul>
                    <p className="fw-bolder">Suite Room:</p><p>
                    Sofisticada Suite, cuenta con todas las comodidades del hogar combinadas con una variedad de
                    instalaciones y servicios de lujo. La habitación está disponible con opciones de cama tamaño king o
                    dos camas individuales y también cuenta con un espacioso balcón privado con vista a la más hermosa
                    terraza de arroz. La suite cuenta con baño privado, ofrece una ducha así como una bañera/tina de
                    lujo y una gama completa de artículos de tocador. Las suites de nuestro retiro de yoga en Ubud
                    cuentan con aire acondicionado y también incluyen minibar, TV por cable y acceso WiFi gratuito.
                </p>
                    <p>Ubicación en Segundo Piso.</p>
                    <div className="row">
                        <div className="col-md-3">
                            <img className="room-photo" height="auto" src={suite2}></img>
                        </div>
                        <div className="col-md-3">
                            <img className="room-photo" height="auto" src={suite1}></img>
                        </div>
                        <div className="col-md-3">
                            <img className="room-photo" height="auto" src={suite4}></img>
                        </div>
                        <div className="col-md-3">
                            <img className="room-photo" height="auto" src={suite3}></img>
                        </div>
                    </div>
                    <p>Escoge tu mejor opción de Alojamiento:

                    </p>
                    <ul>
                        <li>OPCIÓN 1: Habitación compartida, dos camas sencillas (2 personas).</li>
                        <li>OPCIÓN 2: Habitación privada cama king.</li>
                    </ul>
                    <p className="fw-bolder">Pool Villa:</p><p>
                    Nuestra Villa ofrece 167 metros cuadrados de lujosa sala de estar, equipada con una cama King (extra
                    cama individial si se requiere), TV de pantalla plana y pisos de mármol. Esta lujosa villa de un
                    dormitorio cuenta con una amplia terraza y jardín privados y una piscina privada con tumbonas con
                    vistas al valle. Grandes ventanales rodean la villa, proporcionando cálida luz natural y una vista
                    espectacular. El cuarto de baño privado está equipado con ducha y gran bañera/tina de lujo orientada
                    a las terrazas de arroz.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="room-photo" height="auto" src={villa1}></img>
                        </div>
                        <div className="col-md-4">
                            <img className="room-photo" height="auto" src={villa2}></img>
                        </div>
                        <div className="col-md-4">
                            <img className="room-photo" height="auto" src={villa4}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="room-photo" height="auto" src={villa3}></img>
                        </div>

                        <div className="col-md-4">
                            <img className="room-photo" height="auto" src={villa5}></img>
                        </div>
                        <div className="col-md-4">
                            <img className="room-photo" height="auto" src={villa6}></img>
                        </div>
                    </div>
                    <p>Escoge tu mejor opción de Alojamiento:

                    </p>
                    <ul>
                        <li>OPCIÓN 1: Villa compartida con tu mejor amiga(o) /pareja en una cama king (2 personas).
                        </li>
                        <li>OPCIÓN 2: Villa compartida con una cama king y cama sencilla (2 personas).</li>
                    </ul>

                    {getPriceSection()}

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <ContactForm yogaClassType={ClassType.RetreatBaliSept2024}/>
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                </div>

            </main>

            <br/>

            <Footer/>
        </>
    );
}

export default RetreatBaliSept2024;
