import retreat1 from '../images/retreat-bali-march-25/card-reatreat-1.jpg';
import retreat2 from '../images/retreat-bali-march-25/card-reatreat-2.jpg';
import retreat3 from '../images/retreat-bali-march-25/card-reatreat-3.jpg';
import retreat5 from '../images/retreat-bali-march-25/card-reatreat-5.jpg';
import retreat6 from '../images/retreat-bali-march-25/card-reatreat-6.jpg';
import retreat9 from '../images/retreat-bali-march-25/card-reatreat-9.jpg';
import retreat11 from '../images/retreat-bali-march-25/card-reatreat-11.jpg';
import retreat14 from '../images/retreat-bali-march-25/card-reatreat-14.jpg';
import retreat15 from '../images/retreat-bali-march-25/card-reatreat-15.jpg';
import retreat17 from '../images/retreat-bali-march-25/card-reatreat-17.jpg';
import retreat18 from '../images/retreat-bali-march-25/card-reatreat-18.jpg';
import retreat19 from '../images/retreat-bali-march-25/card-reatreat-19.jpg';
import retreat20 from '../images/retreat-bali-march-25/card-reatreat-20.jpg';
import retreat21 from '../images/retreat-bali-march-25/card-reatreat-21.jpg';
import retreat24 from '../images/retreat-bali-march-25/card-reatreat-24.jpg';
import retreat25 from '../images/retreat-bali-march-25/card-reatreat-25.jpg';
import retreat26 from '../images/retreat-bali-march-25/card-reatreat-26.jpg';
import retreat27 from '../images/retreat-bali-march-25/card-reatreat-27.jpg';
import retreat28 from '../images/retreat-bali-march-25/card-reatreat-28.jpg';
import retreat29 from '../images/retreat-bali-march-25/card-reatreat-29.jpg';
import retreat30 from '../images/retreat-bali-march-25/card-reatreat-30.jpg';
import retreat1Thumbnail from '../images/retreat-bali-march-25/card-reatreat-1-thumb.jpg';
import retreat2Thumbnail from '../images/retreat-bali-march-25/card-reatreat-2-thumb.jpg';
import retreat3Thumbnail from '../images/retreat-bali-march-25/card-reatreat-3-thumb.jpg';
import retreat5Thumbnail from '../images/retreat-bali-march-25/card-reatreat-5-thumb.jpg';
import retreat6Thumbnail from '../images/retreat-bali-march-25/card-reatreat-6-thumb.jpg';
import retreat9Thumbnail from '../images/retreat-bali-march-25/card-reatreat-9-thumb.jpg';
import retreat11Thumbnail from '../images/retreat-bali-march-25/card-reatreat-11-thumb.jpg';
import retreat14Thumbnail from '../images/retreat-bali-march-25/card-reatreat-14-thumb.jpg';
import retreat15Thumbnail from '../images/retreat-bali-march-25/card-reatreat-15-thumb.jpg';
import retreat17Thumbnail from '../images/retreat-bali-march-25/card-reatreat-17-thumb.jpg';
import retreat18Thumbnail from '../images/retreat-bali-march-25/card-reatreat-18-thumb.jpg';
import retreat19Thumbnail from '../images/retreat-bali-march-25/card-reatreat-19-thumb.jpg';
import retreat20Thumbnail from '../images/retreat-bali-march-25/card-reatreat-20-thumb.jpg';
import retreat21Thumbnail from '../images/retreat-bali-march-25/card-reatreat-21-thumb.jpg';
import retreat24Thumbnail from '../images/retreat-bali-march-25/card-reatreat-24-thumb.jpg';
import retreat25Thumbnail from '../images/retreat-bali-march-25/card-reatreat-25-thumb.jpg';
import retreat26Thumbnail from '../images/retreat-bali-march-25/card-reatreat-26-thumb.jpg';
import retreat27Thumbnail from '../images/retreat-bali-march-25/card-reatreat-27-thumb.jpg';
import retreat28Thumbnail from '../images/retreat-bali-march-25/card-reatreat-28-thumb.jpg';
import retreat29Thumbnail from '../images/retreat-bali-march-25/card-reatreat-29-thumb.jpg';
import retreat30Thumbnail from '../images/retreat-bali-march-25/card-reatreat-30-thumb.jpg';

import deluxe1 from '../images/retreat-bali-march-25/room-1.jpg'
import deluxe2 from '../images/retreat-bali-march-25/room-2.jpg'
import deluxe3 from '../images/retreat-bali-march-25/room-3.jpg'
import deluxe4 from '../images/retreat-bali-march-25/room-4.jpg'


import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";

function RetreatBaliMayo2025() {

    const images = [
        {
            original: retreat15,
            thumbnail: retreat15Thumbnail,
        },
        {
            original: retreat3,
            thumbnail: retreat3Thumbnail,
        },
        {
            original: retreat1,
            thumbnail: retreat1Thumbnail,
        },
        {
            original: retreat5,
            thumbnail: retreat5Thumbnail,
        },
        {
            original: retreat9,
            thumbnail: retreat9Thumbnail,
        },
        {
            original: retreat11,
            thumbnail: retreat11Thumbnail,
        },
        {
            original: retreat25,
            thumbnail: retreat25Thumbnail,
        },
        {
            original: retreat14,
            thumbnail: retreat14Thumbnail,
        },
        {
            original: retreat17,
            thumbnail: retreat17Thumbnail,
        },
        {
            original: retreat18,
            thumbnail: retreat18Thumbnail,
        },
        {
            original: retreat19,
            thumbnail: retreat19Thumbnail,
        },
        {
            original: retreat29,
            thumbnail: retreat29Thumbnail,
        },
        {
            original: retreat20,
            thumbnail: retreat20Thumbnail,
        },
        {
            original: retreat21,
            thumbnail: retreat21Thumbnail,
        },
        {
            original: retreat24,
            thumbnail: retreat24Thumbnail,
        },
        {
            original: retreat30,
            thumbnail: retreat30Thumbnail,
        },
        {
            original: retreat26,
            thumbnail: retreat26Thumbnail,
        },
        {
            original: retreat27,
            thumbnail: retreat27Thumbnail,
        },
        {
            original: retreat28,
            thumbnail: retreat28Thumbnail,
        }
    ]

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Satya Retiro de Yoga y Bienestar - Crea tu Realidad'/>
            <h3 className="details-subheading">Ubud - Bali, Mayo 2025</h3>

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
                    <ImageGallery className="image-gallery-smaller" items={images} thumbnailPosition='bottom'
                                  autoPlay={false}/>
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
                        <p> Únete a nosotros en un Retiro de Yoga y Bienestar en un espacio mágico exclusivo para
                            nuestro grupo,
                            este hotel esta situado
                            en medio de la naturaleza a las afueras de Ubud, con espacios exclusivos para que te
                            relajes y te
                            rejuvenezcas. Si eres un yogui experimentado o simplemente estás comenzando tu
                            viaje, te
                            damos la bienvenida para que abraces tu práctica y tu sentir en una comunidad
                            solidaria
                            y
                            diversa.

                        </p>

                        <p><span className="fw-bolder">Cuándo: </span>
                            Desde el 2 al 8 de Mayo 2025 - 7 días, 6 noches de Pura Transformación.</p>
                        <p><span className="fw-bolder">Dónde:</span> En el Paraiso de Ubud- Bali, Indonesia.</p>

                        <p><span className="fw-bolder">Nuestro Retiro Incluye:</span></p>
                        <ul>
                            <li> 6 noches - 7 días en habitación compartida</li>
                            <li>
                                Bebida de Bienvenida
                            </li>
                            <li>
                                Comidas saludables e inolvidablemente deliciosas (desayuno, almuerzo y cena)
                            </li>
                            <li>
                                Transporte desde o hacia el Aeropuerto (un solo trayecto)
                            </li>
                            <li>
                                Regalito Y Sorpresas
                            </li>
                            <li>Dos Tardes de Excursiones (incluye transporte y entrada) a:
                                <ul>
                                    <li>Cascada Natural</li>
                                    <li>Arrozales</li>
                                    <li>Exploraremos el Centro de Ubud</li>
                                    <li>Caminada al Volcán Batur para disfrutar del Amanecer</li>
                                </ul>
                            </li>
                        </ul>
                        <p><span className="fw-bolder">Nuestro Retiro No Incluye:</span></p>
                        <ul>
                            <li>Tiquetes aéreos</li>
                            <li>Visa (Si aplica a tu Pasaporte - Colombianos no necesitan)</li>
                            <li>Seguro Médico de Viaje - mandatorio</li>

                        </ul>


                    </div>

                    <h2 className="text-center text-justify space-before">Un Viaje hacia Adentro</h2>
                    <h3 className="text-center text-justify">Programación</h3>

                    <div className="row">
                        <div className="col">
                            <p className="fw-bolder">Dia 1 - Viernes</p>
                            <ul>
                                <li>Ceremonia de Bienvenida 4 Pm <br/>(Check-in desde 2 pm)</li>
                                <li>Cena de Integración</li>
                            </ul>
                            <p className="fw-bolder">Dia 2 - Sábado</p>
                            <ul>
                                <li>Pranayama(EJercicios de Respiración)</li>
                                <li> Práctica de Vinyasa Yoga Multinivel (Todos los niveles)</li>
                                <li> Taller de Meditación, Irémos más profundo
                                    en los diferentes tipos de Meditación.
                                </li>
                                <li>Tiempo libre
                                    para
                                    descansar,
                                    escribir, leer, disfrutar la piscina, o simplemente conectar con el resto de los
                                    integrantes del retiro
                                </li>
                                <li> Yin yoga para relajar cuerpo y mente</li>
                                <li> Baño de sonidos con instrumentos musicales.</li>
                            </ul>
                            <p className="fw-bolder">Dia 3 - Domingo</p>
                            <ul>
                                <li>Pranayama(EJercicios de Respiración)</li>
                                <li> Ashtanga Yoga (Primera Serie, para Todos los Niveles)</li>
                                <li> Taller de Ayurveda</li>
                                <li>Excursiones:</li>
                                <li>Visita a una hermosa Cascada Natural para soltar y fluir a través del
                                    agua
                                </li>
                                <li> Visita a los Arrozales</li>
                                <li>Exploraremos la magia del Centro de Ubud
                                </li>

                            </ul>
                            <p className="fw-bolder">Dia 4 - Lunes</p>
                            <ul>
                                <li>Pranayama(EJercicios de Respiración)</li>
                                <li>Bhakti Yoga (Yoga Devocional, Todos los Niveles)</li>
                                <li>Baño de sonidos con instumentos musicales</li>
                                <li>Meditación Activa con Colores</li>
                                <li>Tiempo libre para ti</li>
                                <li>Clase de Vinyasa para Avanzar en tu Práctica.</li>
                            </ul>
                            <p className="fw-bolder">Dia 5 - Martes</p>
                            <ul>
                                <li>Pranayama(EJercicios de Respiración)</li>
                                <li>Práctica de Vinyasa Yoga Multinivel (Todos los Niveles)</li>
                                <li>Aprenderemos Técnicas para Calmar el Sistema Nervioso</li>
                                <li>Tiempo libre
                                    para
                                    descansar,
                                    escribir, leer, disfrutar la piscina, o simplemente conectar con el resto de los
                                    integrantes del retiro
                                </li>
                                <li>Taller de Manifestacion y Ritual Podereso para Manifestar tus Sueños</li>
                                <li> Sesión de Relajación.</li>
                                <li> Baño de sonidos con instrumentos musicales.</li>
                            </ul>
                            <p className="fw-bolder">Dia 6 - Miércoles</p>
                            <ul>
                                <li>Excursiones:</li>
                                <li>Caminada al Volcán Batur para disfrutar de la naturaleza y la magia del
                                    Amanecer.
                                </li>
                                <li>Yin yoga para relajar mente y cuerpo.
                                </li>
                            </ul>


                            <p className="fw-bolder">Dia 7 - Jueves</p>
                            <ul>
                                <li> Pranayama - (Ejercicios de Respiración)</li>
                                <li> Práctica de Vinyasa Yoga Multinivel (Todos los Niveles)</li>
                                <li>Baño de sonidos con instumentos musicales</li>
                                <li>Ceremonia de Cierre. <br/>(Check-out 12 pm)</li>
                            </ul>
                            <p><span style={{fontSize: 14}}>
                                    <i>Nota: Se pueden agregar o modificar actividades y/o cambiar ligeramente el orden de los
                                        dias.</i><br/>
                                    <i>Los Pagos no son reembolsables ya que se utilizan para el pago de la acomodación, paquete de comidas, transporte etc.</i></span>
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-center text-justify">Acomodación</h2>
                {/*<div className="sold-out-stamp-parent">*/}
                {/*    <div className="sold-out-stamp sold-out-text"><h3>Deluxe Room:</h3></div>*/}
                </div>
            {/*</div>*/}
            <p>
                Deluxe Room (con dos camas individuales): Espaciosa habitación con dos camas individuales y un balcón privado, escritorio, aire
                acondicionado y acceso WiFi gratuito. La habitación incluye baño privado con ducha.
            </p>

            <div className="row">
                <div className="col-md-3"/>
                <div className="col-sm-6">
                    <ImageGallery items={[
                        {original: deluxe2, thumbnail: deluxe2},
                        {original: deluxe3, thumbnail: deluxe3},
                        {original: deluxe1, thumbnail: deluxe1},
                        {original: deluxe4, thumbnail: deluxe4},
                    ]} autoPlay={false} showThumbnails={true}/>
                </div>
                <div className="col-md-3"/>
            </div>

            <div className="row space-before">
                {getDepositSection()}
            </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <ContactForm yogaClassType={ClassType.RetreatBaliMayo2025}/>
                </div>
                <div className="col-md-3"></div>
            </div>

        </main>

        <br/>

        <Footer/>
        </>
    );

    function isPrivate() {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams && (queryParams.get('code') === 'BaliMayo2025' || queryParams.get('code') === 'BaliMarzo2025')
    }

    function getDepositSection() {
        if (!isPrivate()) {
            return <><p className="space-before"></p> <p>Si deseas información más detallada que incluyea precios por
                favor dilegencia el formulario a continuación:
            </p>
            </>
        } else {
            return <>
                <p>Habitación Compartida con una persona, valor Total del Retiro Por Persona
                    <span className="fw-bolder">$2.444 AUD</span> Pago Total del Retiro hasta el 01 de Febrero.
                </p>
                <p><i className="fa fa-tag"></i> <span className="fw-bolder">EARLY BIRD</span> descuento de
                    <span className="fw-bolder"> $150 AUD</span> antes del 31 de Octubre.</p>
                <p><i className="fa fa-tags"></i> <span className="fw-bolder">INVITA A UN AMIGA(O)</span> descuento
                    solo para ti desde <span className="fw-bolder">$100 AUD </span> o más por recomendar a tus
                    amigas(os) y realicen
                    la reservación.</p>
                <p><i className="fa fa-credit-card"></i> <span
                    className="fw-bolder">RESERVA TU ESPACIO:</span> Deposito
                    de <span className="fw-bolder">$500 AUD</span> con transferencia
                    electrónica al numero celular 0413147237.

                </p>
                <p>El resto del valor del Retiro se distribuirán en 3 cuotas así:
                    <ul>
                        <li>30 de Noviembre,</li>
                        <li>31 de Enero,</li>
                        <li>10 de Marzo.</li>
                    </ul>
                    <b><i><span className="fw-bolder" style={{fontSize: 14}}>
                                    Los Pagos no son reembolsables ya que se utilizan para el pago de la acomodación, paquete de
                    comidas, transporte etc.</span></i></b>
                </p>
            </>
        }
    }
}

export default RetreatBaliMayo2025;
