import prog1 from '../images/retreat-tailandia-octubre-25/prog1.jpg';
import prog2 from '../images/retreat-tailandia-octubre-25/prog2.jpg';
import prog3 from '../images/retreat-tailandia-octubre-25/prog3.jpg';
import prog4 from '../images/retreat-tailandia-octubre-25/prog4.jpg';
import prog5 from '../images/retreat-tailandia-octubre-25/prog5.jpg';

import room1 from '../images/retreat-tailandia-octubre-25/room1.jpg';
import room2 from '../images/retreat-tailandia-octubre-25/room2.jpg';
import room3 from '../images/retreat-tailandia-octubre-25/room3.jpg';
import room4 from '../images/retreat-tailandia-octubre-25/room4.jpg';
import room5 from '../images/retreat-tailandia-octubre-25/room5.jpg';
import room6 from '../images/retreat-tailandia-octubre-25/room6.jpg';
import room9 from '../images/retreat-tailandia-octubre-25/room9.jpg';
import room10 from '../images/retreat-tailandia-octubre-25/room10.jpg';

import img1 from '../images/retreat-tailandia-octubre-25/1.jpg';
import img2 from '../images/retreat-tailandia-octubre-25/2.jpg';
import img3 from '../images/retreat-tailandia-octubre-25/3.jpg';
import img1vertical from '../images/retreat-tailandia-octubre-25/1-vertical.jpg';


import Footer from "./Footer";
import ContactForm from "./ContactForm";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";

function RetreatTailandiaOctubre2025() {

    const images = [
        {
            original: img2,
            thumbnail: img2,
        },
        {
            original: img3,
            thumbnail: img3,
        }
    ]

    const roomImages = [
        {
            original: room1,
            thumbnail: room1,
        },
        {
            original: room9,
            thumbnail: room9,
        },
        {
            original: room10,
            thumbnail: room10,
        },
        {
            original: room2,
            thumbnail: room2,
        },
        {
            original: room3,
            thumbnail: room3,
        },
        {
            original: room4,
            thumbnail: room4,
        },
        {
            original: room5,
            thumbnail: room5,
        },
        {
            original: room6,
            thumbnail: room6,
        }
    ]

    return (<>
            <div className="cover-shot-container">
                <div className="cover-shot-caption cover-shot-caption-light">
                    <h1 className="display-3">Satya Retiro de Yoga y Bienestar - Crea tu Realidad</h1>
                </div>
                <div className="cover-shot-text">
                    <p className="text-justify">Únete a nuestro Retiro de Yoga y Bienestar en el paraiso de Bali
                        y sumérgete en una experiencia transformadora para el cuerpo, mente y espiritu, un
                        espacio
                        para conectar, para explorar mucho más lo que habita en tí, para ir más profundo,
                        para
                        que
                        dejes las capas a un lado y encuentres tu ser más autentico.</p>
                </div>
                <picture>
                    <source srcSet={img1vertical}
                            media="(max-width: 1440px) and (orientation: portrait)"/>
                    <img src={img1} alt="cover-shot" className="img-screen-width"/>
                </picture>
            </div>
            <main role="main" className="container">

                <div className="container details text-justify">

                    <div className="row">
                        <div className="col-md-6 text-justify">
                            <h3 className="text-center text-justify">Retiro de Yoga y Bienestar</h3>
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

                            <ImageGallery className="image-gallery-smaller" slideInterval={5000} slideDuration={2000}  items={images} autoPlay={true} showThumbnails={false} showNav={false} showPlayButton={false} showFullscreenButton={false}/>
                        </div>

                        <div className="col-md-1 text-justify"/>

                        <div className="col-md-4 text-justify">
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
                    </div>


                    <div>
                        <h2 className="text-center text-justify double-space-before">Un Viaje hacia Adentro - Programación:</h2>
                        <h3 className="text-center text-justify"></h3>

                        <div className="row space-before">
                            <p className="fw-bolder center ">Dia 1 - Viernes</p>
                            <div className="col-md-8">

                                <ul>
                                    <li>Ceremonia de Bienvenida 4 Pm <br/>(Check-in desde 2 pm)</li>
                                    <li>Cena de Integración</li>
                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog1}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 2 - Sábado</p>
                            <div className="col-md-8">
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
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog2}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 3 - Domingo</p>
                            <div className="col-md-8">
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
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog3}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 4 - Lunes</p>
                            <div className="col-md-8">
                                <ul>
                                    <li>Pranayama(EJercicios de Respiración)</li>
                                    <li>Bhakti Yoga (Yoga Devocional, Todos los Niveles)</li>
                                    <li>Baño de sonidos con instumentos musicales</li>
                                    <li>Meditación Activa con Colores</li>
                                    <li>Tiempo libre para ti</li>
                                    <li>Clase de Vinyasa para Avanzar en tu Práctica.</li>
                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog4}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 5 - Martes</p>
                            <div className="col-md-8">
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
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog5}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 6 - Miércoles</p>
                            <div className="col-md-8">
                                <ul>
                                    <li>Excursiones:</li>
                                    <li>Caminada al Volcán Batur para disfrutar de la naturaleza y la magia del
                                        Amanecer.
                                    </li>
                                    <li>Taller Botanico de Acuarela: Arte Terapia para conectar con tu energía femenina y expandir tu alma creativa Facilitado por Valentina
                                        Marín.
                                    </li>
                                    <li>Yin yoga para relajar mente y cuerpo.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog3}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 7 - Jueves</p>
                            <div className="col-md-8">
                                <ul>
                                    <li> Pranayama - (Ejercicios de Respiración)</li>
                                    <li> Práctica de Vinyasa Yoga Multinivel (Todos los Niveles)</li>
                                    <li>Baño de sonidos con instumentos musicales</li>
                                    <li>Ceremonia de Cierre. <br/>(Check-out 12 pm)</li>
                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog3}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p><span className="color-secondary">
                                    <i>Se pueden agregar o modificar actividades y/o cambiar ligeramente el orden de los
                                        dias.</i>
                                </span></p>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="row double-space-before">
                    <div className="col-md-6">
                        <ImageGallery items={roomImages} autoPlay={false} showThumbnails={true}/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center text-justify">Acomodación</h2>
                        <p>
                            Deluxe Room (con dos camas individuales): Espaciosa habitación con dos camas individuales y un balcón privado, escritorio, aire
                            acondicionado y acceso WiFi gratuito. La habitación incluye baño privado con ducha.
                        </p>
                    </div>

                </div>

                <div className="row double-space-before">
                    {getDepositSection()}
                </div>

                <div className="row double-space-before">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <ContactForm yogaClassType={ClassType.RetreatTailandiaOctubre2025}/>
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
        return queryParams && (queryParams.get('code') === 'TailandiaOctubre2025')
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
                    <span className="fw-bolder ">$2.444 AUD</span> Pago Total del Retiro hasta el 01 de Febrero.
                </p>
                <p><i className="fa fa-tag"></i> <span className="fw-bolder">EARLY BIRD</span> descuento de
                    <span className="fw-bolder"> $150 AUD</span> antes del 30 de Noviembre.</p>
                {/*<p><i className="fa fa-tags"></i> <span className="fw-bolder">INVITA A UN AMIGA(O)</span> descuento*/}
                {/*    solo para ti desde <span className="fw-bolder">$150 AUD </span> o más por recomendar a tus*/}
                {/*    amigas(os) y realicen*/}
                {/*    la reservación.</p>*/}
                <p><i className="fa fa-credit-card"></i> <span
                    className="fw-bolder">RESERVA TU ESPACIO:</span> Deposito
                    de <span className="fw-bolder">$600 AUD</span> con transferencia
                    electrónica al numero celular 0413147237.

                </p>
                <p>El resto del valor del Retiro se distribuirán en 3 cuotas, el Retiro debe pagarse por completo el 5 de Abril
                    {/*<ul>*/}
                    {/*    <li>30 de Noviembre,</li>*/}
                    {/*    <li>31 de Enero,</li>*/}
                    {/*    <li>10 de Marzo.</li>*/}
                    {/*</ul>*/}
                </p>
                <p>
                    <i><span className="color-secondary">
                                    Los Pagos no son reembolsables ya que se utilizan para el pago de la acomodación, paquete de
                    comidas, transporte etc.</span></i>
                </p>
            </>
        }
    }
}

export default RetreatTailandiaOctubre2025;
