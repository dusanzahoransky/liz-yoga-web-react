import prog1 from '../images/retreat-tailandia-octubre-25/prog1.jpg';
import prog2 from '../images/retreat-tailandia-octubre-25/prog2.jpg';
import prog3 from '../images/retreat-tailandia-octubre-25/prog3b.jpg';
import prog4 from '../images/retreat-tailandia-octubre-25/prog4.jpg';
import prog5 from '../images/retreat-tailandia-octubre-25/prog5.jpg';
import prog6 from '../images/retreat-tailandia-octubre-25/prog6.jpg';
import prog7 from '../images/retreat-tailandia-octubre-25/prog7.jpg';

import room1 from '../images/retreat-tailandia-octubre-25/room1.jpg';
import room2 from '../images/retreat-tailandia-octubre-25/room2.jpg';
import room3 from '../images/retreat-tailandia-octubre-25/room3.jpg';
import room4 from '../images/retreat-tailandia-octubre-25/room4.jpg';
import room5 from '../images/retreat-tailandia-octubre-25/room5.jpg';
import room6 from '../images/retreat-tailandia-octubre-25/room6.jpg';
import room9 from '../images/retreat-tailandia-octubre-25/room9.jpg';
import room10 from '../images/retreat-tailandia-octubre-25/room10.jpg';

import food1 from '../images/retreat-tailandia-octubre-25/food1.jpg';
import food2 from '../images/retreat-tailandia-octubre-25/food2.jpg';
import food3 from '../images/retreat-tailandia-octubre-25/food3.jpg';
import food4 from '../images/retreat-tailandia-octubre-25/food4.jpg';
import food5 from '../images/retreat-tailandia-octubre-25/food5.jpg';

import hotel1 from '../images/retreat-tailandia-octubre-25/hotel1.jpg';
import hotel2 from '../images/retreat-tailandia-octubre-25/hotel2.jpg';
import hotel3 from '../images/retreat-tailandia-octubre-25/hotel3.webp';
import hotel4 from '../images/retreat-tailandia-octubre-25/hotel4.jpg';
import hotel5 from '../images/retreat-tailandia-octubre-25/hotel5.jpg';
import hotel6 from '../images/retreat-tailandia-octubre-25/hotel6.jpg';
import hotel7 from '../images/retreat-tailandia-octubre-25/hotel7.jpg';

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
    const foodImages = [
        {
            original: food2,
            thumbnail: food2,
        },
        {
            original: food1,
            thumbnail: food1,
        },
        {
            original: food3,
            thumbnail: food3,
        },
        {
            original: food4,
            thumbnail: food4,
        },
        {
            original: food5,
            thumbnail: food5,
        }
    ]

    return (<>
            <div className="cover-shot-container">
                <div className="cover-shot-caption cover-shot-caption-light">
                    <h1>Ananda, Retiro de Yoga y Bienestar</h1>

                </div>
                <div className="cover-shot-text">
                    <p className="text-justify">Únete a nuestro Retiro de Yoga y Bienestar en el Paraiso de Tailandia
                        y sumérgete en una experiencia transformadora para el cuerpo, mente y espiritu, un
                        espacio para explorar mucho más lo que habita en tí,
                        un paso crucial en el camino hacia la realización espiritual, ya que, al alejarnos de las distracciones externas, podemos lograr un estado de calma mental y una mayor conexión con nuestra esencia interna.</p>
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
                            <h3 className="text-center text-justify">Ananda, Retiro de Yoga y Bienestar</h3>
                            <h3 className="text-center text-justify">Dicha y Conexión Interior</h3>

                            <p> Únete a nosotros a nuestro Retiro en el Paraiso de Tailandia en un Resort
                               que te ofrecerá comodidad, comida nutritiva y deliciosa, espacios exclusivos para que te desconectes del dia a dia y te
                                relajes. Si eres un yogui/yogini experimentado o simplemente estás comenzando tu
                                viaje, te
                                damos la bienvenida para que abraces tu práctica y tu sentir en una comunidad
                                solidaria y diversa. Ten en cuenta que este Retiro no es exclusivo de yoga, tambien tendremos actividades de bienestar, rituales, salidas y mucho más.

                            </p>

                            <p><span className="fw-bolder">Cuándo: </span>
                                Desde el 19 al 25 de Octubre 2025 - 7 días, 6 noches de Pura Conexión y Transformación con tu Ser.</p>
                            <p><span className="fw-bolder">Dónde:</span> En el Paraiso de Phuket, Tailandia.</p>

                            <ImageGallery className="image-gallery-smaller" slideInterval={5000} slideDuration={2000}  items={images} autoPlay={true} showThumbnails={false} showNav={false} showPlayButton={false} showFullscreenButton={false}/>
                        </div>

                        <div className="col-md-1 text-justify"/>

                        <div className="col-md-5 text-justify">
                            <p><span className="fw-bolder">Nuestro Retiro Incluye:</span></p>
                            <ul>
                                <li> 6 noches - 7 días en habitación compartida</li>

                                     <li>Comidas saludables e inolvidablemente deliciosas elaboradas por el Executive Chef del Resort:
                                      <ul>
                                      <li>Desayuno Buffet: Disfruta de una amplia variedad de alimentos nutritivos y saludables </li>
                                      <li> Almuerzo y Cena Buffet: 3 Course Meal con ingredientes de alta calidad recomendados por el Executive Chef</li>

                                       </ul>
                                      </li>
                                <li>
                                    Transporte desde o hacia el Aeropuerto (un solo trayecto)
                                </li>

                                <li>Excursiones: (incluye transporte)
                                    <ul>
                                        <li>Exploraremos una Playa Hermosa al Sur de la Isla </li>
                                         <li> Caminata en la costa para disfrutar del Atardecer Mágico de Phuket</li>

                                        <li>Paseo Espectacular en Catamaran, Visita a 2 Islas Paradisiacas, tendremos la oportunidad de conectar más con la naturaleza, el mar y toda nuestra Sangha/Comunidad</li>
                                    </ul>

                                  <li>
                                   Todas las Actividades de Bienestar y Materiales a utilizar durante tu estadia
                                  </li>
                                   <li>
                                    Regalito y Sorpresas
                                  </li>
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
                        <h2 className="text-center text-justify double-space-before">Ananda- Programación:</h2>
                        <h3 className="text-center text-justify"></h3>

                        <div className="row space-before">
                            <p className="fw-bolder center ">Dia 1 - Domingo</p>
                            <div className="col-md-8">

                                <ul>
                                    <li>Ceremonia de Bienvenida 4:30 Pm <br/>(Check-in desde 2 pm)</li>
                                    <li>Ritual de Agradecimiento</li>
                                    <li>Cena de Integración</li>
                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog1}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 2 - Lunes</p>
                            <div className="col-md-8">
                                <ul>

                                    <li> Práctica de Vinyasa Yoga Multinivel y Meditación</li>
                                    <li> Pranayama Workshop, Aprenderás diferentes técnicas de Respiración para aplicarlas en tu dia a dia, tendrás un kit de herramientas al cual accederás para navegar y transformar tus emociones más bajas y volver a la tranquilidad y calma.
                                    </li>
                                    <li>Tiempo libre
                                        para
                                        descansar,
                                        escribir, leer, disfrutar de la piscina, o simplemente conectar con el resto de los
                                        integrantes del retiro
                                    </li>
                                    <li> Yin yoga al Atardecer para relajar cuerpo y mente</li>

                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog2}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 3 - Martes</p>
                            <div className="col-md-8">
                                <ul>
                                    <li>Yoga al Amanecer</li>
                                     <li>Pranayama, Meditación</li>
                                    <li>Taller Ir Hacia Adentro - Abraza tus emociones, vulnerabilidad y suelta aquello que no te deja avanzar libremente </li>
                                    <li>Excursión:</li>
                                    <li>Alista tu bikini porque visitaremos una playa hermosa al sur de la Isla.
                                    Caminata para disfrutar el atardecer, la vista hacia el mar y otras islas.
                                    </li>


                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog3}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 4 - Miercoles</p>
                            <div className="col-md-8">
                                <ul>
                                 <li> Ashtanga Yoga (Primera Serie, para Todos los Niveles) </li>
                                 <li> Pranayama, Meditación</li>
                                 <li>Workshop Zen Tai Massage, Aprenderemos a realizar este masaje para relajar cuerpo y mente </li>
                                  <li> Master Class: Movilidad y Flexibilidad, Asanas/Posturas Invertidas & Backbends</li>
                                  <li>   <li>Integración con la Sangha/Comunidad, charla, juegos o si prefieres tiempo para ti solito/a
                                  .</li>

.</li>
                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog4}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 5 - Jueves</p>
                            <div className="col-md-8">
                                <ul>
                          <li>Día Libre para que te relajes en el Resort o explores las Isla por tu cuenta, este día tendrás la oportunidad de estar tu solit@ o armar un plan lindo con otros participantes del Retiro que vaya de acuerdo a tu ritmo y energia. (El desayuno esta incluido si lo tomas en el Resort a las horas programadas)</li>

                           <li>Clase de Vinyasa Yoga al Amanecer (Opcional)</li>
                            <li>Integración con la Sangha/Comunidad, charla, juegos o si prefieres tiempo para ti solito/a (Opcional)
                                                             .</li>

                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog5}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 6 - Viernes</p>
                            <div className="col-md-8">
                                <ul>
                                <li>Clase de Vinyasa Flow al Amanecer</li>
                                    <li>Excursiones:</li>
                                    <li>Paseo en Catamaran en donde conectaremos aún mas con la naturaleza, podremos disfrutar de paisajes impresionantes, del sol, el viento, el mar cristalino y dos playas hermosas, serán unas horas de pura diversión
                                    </li>

                                    <li>Yin yoga para relajar mente y cuerpo.
                                    </li>
                                       <li>Actividad de Integración, Deja volar tu Imaginación</li>
                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog6}/>
                            </div>
                        </div>

                        <div className="row space-before">
                            <p className="fw-bolder center">Dia 7 - Sábado</p>
                            <div className="col-md-8">
                                <ul>
                                    <li> Pranayama - (Ejercicios de Respiración)</li>
                                    <li>Bhakti y Vinyasa Yoga, (Recitaremos Mantras, Cantaremos Canciones Devocionales y Moveremos el Cuerpo Fisico, Energetico, Mental, Espiritual y Emocional), </li>

                                    <li>Ceremonia de Cierre. <br/>(Check-out 12 pm)</li>
                                </ul>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-md-3">
                                <img src={prog7}/>
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
                    <div className="col">
                        <h2 className="text-center text-justify">Resort</h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-3">
                        <img className="max-width100"  src={hotel4}/>
                    </div>
                    <div className="col-sm-3">
                        <img className="max-width100" src={hotel1}/>

                        <img className="max-width100 space-before"  src={hotel2}/>
                    </div>
                    <div className="col-sm-3">
                        <img className="max-width100"  src={hotel3}/>

                        <img className="max-width100 space-before"  src={hotel7}/>
                    </div>
                    <div className="col-sm-3">
                        <img className="max-width100"  src={hotel5}/>
                    </div>
                </div>

                <br/>

                <div className="row double-space-before">
                    <div className="col-md-6">
                        <h2 className="text-center text-justify">Alimentación</h2>
                        <p>
                            Durante el Retiro Podrás disfrutar de una alimentación saludable y balanceada tipo buffet con una vista impresionante a la ciudad.
                        </p><p>
                        EL Restaurante Tailandés del Resort es reconocido como uno de los mejores en Phuket según los críticos más populares, como Top 25 de los Restaurantes
                        y la Autoridad de Turismo de Tailandia, y seleccionado entre los 200 mejores restaurantes de Tailandia por la revista Koktail.
                    </p>
                    </div>
                    <div className="col-md-6">
                        <ImageGallery items={foodImages} autoPlay={false} showThumbnails={true}/>
                    </div>
                </div>

                <br/>

                <div className="row double-space-before">
                    <div className="col-md-6">
                        <ImageGallery items={roomImages} autoPlay={false} showThumbnails={true}/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center text-justify">Acomodación</h2>
                        <p>
                            Alojamiento moderno en un Resort con una vista preciosa a la ciudad de Phuket y la bahía de Phang Nga.
                        </p><p>
                            Deluxe Room (con dos camas individuales): Espaciosa habitación con dos camas individuales, escritorio, aire
                            acondicionado y acceso a WiFi gratuito. La habitación incluye baño privado con ducha.
                        </p>
                    </div>

                </div>

                <br/>

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
            return <>
                <p>Pago Total del Retiro hasta el 11 de Agosto. </p>
                <p><i className="fa fa-tag"></i> <span className="fw-bolder">EARLY BIRD</span> descuento de
                    <span className="fw-bolder"> $111 AUD</span> antes del <span className="fw-bolder ">15 de Abril.</span></p>
                <p><i className="fa fa-tags"></i> <span className="fw-bolder">INVITA A UN AMIGA(O)</span> descuento
                    solo para ti desde <span className="fw-bolder">$122 AUD </span> o más por recomendar a tus
                    amigas(os) y realicen
                    la reservación.</p>
                <p><i className="fa fa-credit-card"></i> <span
                    className="fw-bolder">RESERVA TU ESPACIO:</span> Deposito
                    de <span className="fw-bolder">$600 AUD</span> con transferencia
                    electrónica al numero celular 0413147237.

                </p>
                <p>El resto del valor del Retiro se distribuirán en 3 y/o 4 cuotas, el Retiro debe pagarse por completo el 11 de Agosto
                    {/*<ul>*/}
                    {/*    <li>30 de Noviembre,</li>*/}
                    {/*    <li>31 de Enero,</li>*/}
                    {/*    <li>10 de Marzo.</li>*/}
                    {/*</ul>*/}
                </p>
                <p>
                    <i><span className="color-secondary">
                                    Los abonos/transferencias no son reembolsables ya que se utilizan para el pago de la acomodación, paquete de
                    comidas, transporte etc.</span></i>
                </p>
                <p className="space-before"></p> <p>Si deseas información más detallada que incluyea precios por
                favor dilegencia el formulario a continuación:
            </p>
            </>
        } else {
            return <>
                <p>
                Habitación Compartida con una persona en camas individuales, valor Total del Retiro Por Persona:
                <ul className="line-height-3 no-bottom-margin">
                    <li>
                        Sin Balcón <span className="fw-bolder "> $2.699 AUD</span>
                    </li><li>
                        Con Balcón <span className="fw-bolder "> $2.899 AUD</span>
                    </li>
                </ul>
                </p>
                <p>Pago Total del Retiro hasta el 11 de Agosto. </p>
                <p><s><i className="fa fa-tag"></i> <span className="fw-bolder">EARLY BIRD</span> descuento de
                    <span className="fw-bolder"> $111 AUD</span> antes del <span className="fw-bolder ">15 de Abril.</span></s></p>
                    <p><i className="fa fa-tag"></i> <span className="fw-bolder">EARLY BIRD</span> descuento de
                    <span className="fw-bolder"> $55 AUD</span> antes del <span className="fw-bolder ">15 de Junio.</span></p>
                <p><i className="fa fa-tags"></i> <span className="fw-bolder">INVITA A UN AMIGA(O)</span> descuento
                    solo para ti desde <span className="fw-bolder">$122 AUD </span> o más por recomendar a tus
                    amigas(os) y realicen
                    la reservación.</p>
                <p><i className="fa fa-credit-card"></i> <span
                    className="fw-bolder">RESERVA TU ESPACIO:</span> Deposito
                    de <span className="fw-bolder">$600 AUD</span> con transferencia
                    electrónica al numero celular 0413147237.

                </p>
                <p>El resto del valor del Retiro se distribuirán en 3 y/o 4 cuotas, el Retiro debe pagarse por completo el 11 de Agosto
                    {/*<ul>*/}
                    {/*    <li>30 de Noviembre,</li>*/}
                    {/*    <li>31 de Enero,</li>*/}
                    {/*    <li>10 de Marzo.</li>*/}
                    {/*</ul>*/}
                </p>
                <p>
                    <i><span className="color-secondary">
                                    Los abonos/transferencias no son reembolsables ya que se utilizan para el pago de la acomodación, paquete de
                    comidas, transporte etc.</span></i>
                </p>
            </>
        }
    }
}

export default RetreatTailandiaOctubre2025;
