import retreat2 from '../images/retreat-bali-sept-24/card-reatreat-2.jpg';
import retreat5 from '../images/retreat-bali-sept-24/card-reatreat-5.jpg';
import retreat6 from '../images/retreat-bali-sept-24/card-reatreat-6.jpg';
import retreat7 from '../images/retreat-bali-sept-24/card-reatreat-7.jpg';
import retreat2Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-2-thumb.jpg';
import retreat5Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-5-thumb.jpg';
import retreat6Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-6-thumb.jpg';
import retreat7Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-7-thumb.jpg';
import retreat9 from '../images/retreat-bali-sept-24/card-reatreat-9.jpg';
import retreat10 from '../images/retreat-bali-sept-24/card-reatreat-10.jpg';
import retreat11 from '../images/retreat-bali-sept-24/card-reatreat-11.jpg';
import retreat12 from '../images/retreat-bali-sept-24/card-reatreat-12.jpg';
import retreat13 from '../images/retreat-bali-sept-24/card-reatreat-13.jpg';
import retreat14 from '../images/retreat-bali-sept-24/card-reatreat-14.jpg';
import retreat15 from '../images/retreat-bali-sept-24/card-reatreat-15.jpg';
import retreat17 from '../images/retreat-bali-sept-24/card-reatreat-17.jpg';
import retreat18 from '../images/retreat-bali-sept-24/card-reatreat-18.jpg';
import retreat9Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-9-thumb.jpg';
import retreat10Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-10-thumb.jpg';
import retreat11Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-11-thumb.jpg';
import retreat12Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-12-thumb.jpg';
import retreat13Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-13-thumb.jpg';
import retreat14Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-14-thumb.jpg';
import retreat15Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-15-thumb.jpg';
import retreat17Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-17-thumb.jpg';
import retreat18Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-18-thumb.jpg';
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
            return <><p className="space-before"></p> <p>Si deseas información más detallada e incluyendo precios por
                favor dilegencia el formulario a continuación:
            </p></>
        } else {
            return <>
                <div className="row space-before">
                    <p><i className="fa fa-tag"></i> <span className="fw-bolder">EARLY BIRD</span> discount <span
                        className="fw-bolder">$100</span> descuento antes del 15 de Abril (Acordamos cuotas para el
                        resto del pago). Pago Total del Retiro hasta el día 04 de Julio.</p>
                    {/*<p><i className="fa fa-tags"></i> <span className="fw-bolder">INVITA A UN AMIGA(O)</span> descuento*/}
                    {/*    solo para ti de <span*/}
                    {/*        className="fw-bolder">$100</span> por recomendar a un amiga(o) y realize la reservación del*/}
                    {/*    Retiro.</p>*/}
                    <p><i className="fa fa-credit-card"></i> <span
                        className="fw-bolder">RESERVA TU ESPACIO:</span> Deposito
                        (no reembolsable) de $500 Aud con transferencia
                        electrónica al numero celular 0413147237. </p>
                </div>
            </>
        }
    }

    const images = [
        {
            original: retreat2,
            thumbnail: retreat2Thumbnail,
        },
        {
            original: retreat13,
            thumbnail: retreat13Thumbnail,
        },
        {
            original: retreat6,
            thumbnail: retreat6Thumbnail,
        },
        {
            original: retreat12,
            thumbnail: retreat12Thumbnail,
        }, {
            original: retreat11,
            thumbnail: retreat11Thumbnail,
        },
        {
            original: retreat10,
            thumbnail: retreat10Thumbnail,
        },
        {
            original: retreat14,
            thumbnail: retreat14Thumbnail,
        },
        {
            original: retreat15,
            thumbnail: retreat15Thumbnail,
        }, {
            original: retreat7,
            thumbnail: retreat7Thumbnail,
        },
        {
            original: retreat17,
            thumbnail: retreat17Thumbnail,
        },
        {
            original: retreat9,
            thumbnail: retreat9Thumbnail,
        },
        {
            original: retreat5,
            thumbnail: retreat5Thumbnail,
        },
        {
            original: retreat18,
            thumbnail: retreat18Thumbnail,
        },
    ]

    return (<>
            <main role="main" className="container">

                <DetailsHeading text='Retiro de Yoga y Bienestar'/>
                <h3 className="details-subheading">Ubud - Bali, Septiembre 2024</h3>

                <div className="container details text-justify">

                    <div className="row">
                        <div className="col">

                            <p className="text-justify">Únete a nuestro Retiro de Yoga y Bienestar en el paraiso de Bali
                                y sumérgete en una experiencia transformadora para el cuerpo, mente y espiritu, un
                                espacio
                                para conectar, para explorar mucho más lo que habita en tí, para ir más profundo,
                                para
                                que
                                dejes las capas a un lado y encuentres tu ser más autentico.</p>
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
                                rejuvenezcas. Si eres un yogui experimentado o simplemente estás comenzando tu
                                viaje, te
                                damos la bienvenida para que abraces tu práctica y tu sentir en una comunidad
                                solidaria
                                y
                                diversa.

                            </p>

                            <p><span className="fw-bolder">Cuándo:</span> Desde el 4 al 9 de Septiembre 2024 - 6
                                días, 5
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
                                    Comidas saludables e inolvidablemente deliciosas (desayuno, almuerzo y cena)
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

                        <h2 className="text-center text-justify space-before">Un Viaje hacia Adentro</h2>
                        <h3 className="text-center text-justify">Programación</h3>

                        <div className="row">
                            <div className="col">
                                <p className="fw-bolder">Dia 1 - Miercoles</p>
                                <ul>
                                    <li>Ceremonia de Bienvenida 4 Pm <br/>(Check-in desde 2 pm)</li>
                                    <li>Cena de Integración</li>
                                </ul>
                                <p className="fw-bolder">Dia 2 - Jueves</p>
                                <ul>
                                    <li>Pranayama(EJercicios de Respiración)</li>
                                    <li> Práctica de Vinyasa Yoga Multinivel (Todos los niveles)</li>
                                    <li> Irémos más profundo
                                        en los diferentes tipos de Meditación enfocandonos en el poder de los
                                        mantras
                                    </li>
                                    <li>Tiempo libre
                                        para
                                        descansar,
                                        escribir, leer, disfrutar la piscina, o simplemente conectar con el resto de los
                                        integrantes del retiro
                                    </li>
                                    <li> Yin yoga para relajar cuerpo y mente</li>
                                    <li> Baño de sonidos con cuencos
                                        tibetanos
                                        y de
                                        cristal.
                                    </li>
                                </ul>
                                <p className="fw-bolder">Dia 3 - Viernes</p>
                                <ul>
                                    <li>Pranayama(EJercicios de Respiración)</li>
                                    <li> Ashtanga Yoga (Primera Serie, para Todos los Niveles)</li>
                                    <li> Meditación guiada</li>
                                    <li> Taller de Ayurveda</li>
                                    <li>Excursiones:</li>
                                    <li> Visita a los Arrozales</li>
                                    <li> Visita al Templo de Purificación de Agua</li>
                                    <li> integración/actividades sociales luego de la
                                        cena.
                                    </li>
                                </ul>
                                <p className="fw-bolder">Dia 4 - Sábado</p>
                                <ul>
                                    <li>Pranayama(EJercicios de Respiración)</li>
                                    <li>Bhakti Yoga (Yoga Devocional, Todos los Niveles)</li>
                                    <li>Baño de sonidos con cuencos tibetanos y de cristal</li>
                                    <li>Meditación con pintura y colores</li>
                                    <li>Tiempo libre para ti</li>
                                    <li>Clase de Vinyasa para Avanzar en tu Práctica.</li>
                                </ul>
                                <p className="fw-bolder">Dia 5 - Domingo</p>
                                <ul>
                                    <li>Pranayama(EJercicios de Respiración)</li>
                                    <li>Práctica de Vinyasa Yoga Multinivel (Todos los Niveles)</li>
                                    <li>Ritual de Manifestación</li>
                                    <li> Excursiones:</li>
                                    <li>Visita al Monkey Forest</li>
                                    <li>Visita a una hermosa Cascada Natural para soltar y fluir a través del
                                        agua
                                    </li>
                                    <li>integración/actividades sociales luego de la cena.</li>
                                </ul>
                                <p className="fw-bolder">Dia 6 - Lunes</p>
                                <ul>
                                    <li> Pranayama - (Ejercicios de Respiración)</li>
                                    <li> Práctica de Vinyasa Yoga Multinivel (Todos los Niveles)</li>
                                    <li>Baño de sonidos con cuencos tibetanos y de
                                        cristal
                                    </li>
                                    <li>Ceremonia de Cierre. <br/>(Check-out 12 pm)</li>
                                </ul>
                                <p>
                                    <i>Nota: Se pueden agregar más actividades y/o cambiar ligeramente en el orden y dia.</i>
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-center text-justify">Acomodación</h2>
                    <div className="sold-out-stamp-parent">
                        <div className="sold-out-stamp sold-out-text"><h3>Deluxe Room:</h3></div>
                    </div>
                    <p className="sold-out-text">
                        Espaciosa habitación de lujo cuenta con pisos de ladrillo bien pulidos, cómodas camas
                        tamaño
                        king o
                        dos camas individuales y un balcón privado con vista a las hermosas terrazas de arroz o
                        jardines
                        tropicales. Esta elegante habitación del resort está equipada con minibar, aire
                        acondicionado,
                        TV
                        por cable, servicio telefónico y acceso WiFi gratuito. La habitación incluye baño
                        privado
                        con
                        ducha
                        y bañera/tina de lujo. Se incluyen artículos de tocador.
                    </p>
                    <p  className="sold-out-text">Ubicación en Primer Piso.</p>

                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-sm-6">
                            <ImageGallery items={[
                                {original: deluxe1, thumbnail: deluxe1},
                                {original: deluxe2, thumbnail: deluxe2},
                                {original: deluxe3, thumbnail: deluxe3},
                                {original: deluxe4, thumbnail: deluxe4}
                            ]} autoPlay={false} showThumbnails={true}/>
                        </div>
                        <div className="col-md-3"/>
                    </div>

                    <p  className="sold-out-text">Escoge tu mejor opción de Alojamiento:</p>

                    <div className="row sold-out-text">
                        <div className="col-lg-7">
                            <p><s><span className="fw-bolder">OPCIÓN 1:</span></s> Habitación compartida con tu mejor amiga(o)/pareja
                                en una cama king (2 personas).</p>
                        </div>
                        <div className="col-lg-5">
                            {isPrivate() ? "Valor Total del Retiro Por Persona $1,890 AUD" : ""}
                        </div>
                    </div>
                    <div className="row space-before sold-out-text">
                        <div className="col-lg-7">
                            <p><s><span className="fw-bolder">OPCIÓN 2:</span></s> Habitación compartida con una cama king y
                                una
                                cama
                                individual (2 personas).</p>
                        </div>
                        <div className="col-lg-5">
                            {isPrivate() ? "Valor Total del Retiro Por Persona $2,090 AUD" : ""}
                        </div>
                    </div>
                    <div className="row space-before sold-out-text">
                        <div className="col-lg-7">
                            <p><s><span className="fw-bolder">OPCIÓN 3:</span></s> Habitación privada cama king.</p>
                        </div>
                        <div className="col-lg-5">
                            {isPrivate() ? "Valor Total del Retiro $2,690 AUD" : ""}
                        </div>
                    </div>


                    <h3 className="double-space-before">Suite Room:</h3>
                    <p>Sofisticada Suite, cuenta con todas las comodidades del hogar combinadas con una
                        variedad de
                        instalaciones y servicios de lujo. La habitación está disponible con opciones de
                        cama tamaño
                        king o
                        dos camas individuales y también cuenta con un espacioso balcón privado con vista a
                        la más
                        hermosa
                        terraza de arroz. La suite cuenta con baño privado, ofrece una ducha así como una
                        bañera/tina de
                        lujo y una gama completa de artículos de tocador. Las suites de nuestro retiro de
                        yoga en
                        Ubud
                        cuentan con aire acondicionado y también incluyen minibar, TV por cable y acceso
                        WiFi
                        gratuito.</p>
                    <p>Ubicación en Segundo Piso.</p>
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-sm-6">
                            <ImageGallery items={[
                                {original: suite2, thumbnail: suite2},
                                {original: suite1, thumbnail: suite1},
                                {original: suite4, thumbnail: suite4},
                                {original: suite3, thumbnail: suite3}
                            ]} autoPlay={false} showThumbnails={true}/>
                        </div>
                        <div className="col-md-3"/>
                    </div>


                    <p>Escoge tu mejor opción de Alojamiento:</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <p><span className="fw-bolder">OPCIÓN 1:</span> Habitación compartida, dos camas
                                sencillas
                                (2
                                personas).</p>
                        </div>
                        <div className="col-lg-6">
                            {isPrivate() ? "Valor Total del Retiro Por Persona $2,090 AUD" : ""}
                        </div>
                    </div>
                    <div className="row space-before">
                        <div className="col-lg-6">
                            <p><span className="fw-bolder">OPCIÓN 2:</span> Habitación privada cama king.</p>
                        </div>
                        <div className="col-lg-6">
                            {isPrivate() ? "Valor Total del Retiro $2,790 AUD" : ""}
                        </div>
                    </div>


                    <h3 className="double-space-before">Pool Villa: <span className="limited">(Sólo queda una)</span></h3>
                    <p>
                        Nuestra Villa ofrece 167 metros cuadrados de lujosa sala de estar, equipada con
                        una cama
                        King
                        (extra
                        cama individial si se requiere), TV de pantalla plana y pisos de mármol. Esta
                        lujosa
                        villa
                        de un
                        dormitorio cuenta con una amplia terraza y jardín privados y una piscina privada
                        con
                        tumbonas
                        con
                        vistas al valle. Grandes ventanales rodean la villa, proporcionando cálida luz
                        natural y
                        una
                        vista
                        espectacular. El cuarto de baño privado está equipado con ducha y gran
                        bañera/tina de
                        lujo
                        orientada
                        a las terrazas de arroz.</p>


                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-sm-6">
                            <ImageGallery items={[
                                {original: villa3, thumbnail: villa3},
                                {original: villa1, thumbnail: villa1},
                                {original: villa2, thumbnail: villa2},
                                {original: villa4, thumbnail: villa4},
                                {original: villa5, thumbnail: villa5},
                                {original: villa6, thumbnail: villa6},
                            ]} autoPlay={false} showThumbnails={true}/>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                    <p>Escoge tu mejor opción de Alojamiento:</p>
                    <div className="row">
                        <div className="col-lg-7">
                            <p><span className="fw-bolder">OPCIÓN 1:</span> Villa compartida con tu mejor amiga(o)/pareja
                                en una cama king (2 personas).</p>
                        </div>
                        <div className="col-lg-5">
                            {isPrivate() ? "Valor Total del Retiro Por Persona $2,290 AUD" : ""} <sup>*Recomendado
                            de Lujo</sup>
                        </div>
                    </div>
                    <div className="row space-before">
                        <div className="col-lg-7">
                            <p><span className="fw-bolder">OPCIÓN 2:</span> Villa compartida con una cama king y
                                cama sencilla (2 personas).</p>
                        </div>
                        <div className="col-lg-5">
                            {isPrivate() ? "Valor Total del Retiro Por persona $2,490 AUD" : ""}
                        </div>
                    </div>

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
