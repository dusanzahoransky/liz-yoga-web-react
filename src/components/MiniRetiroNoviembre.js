import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import PreparationItems from "./classDetails/PreparationItems";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";
import sessionEspecial1 from "../images/session-especial/session-especial-1.jpg";
import sessionEspecial1Thumbnail from "../images/session-especial-thumbnail/session-especial-1-thumbnail.jpg";
import sessionEspecial2 from "../images/session-especial/session-especial-2.jpg";
import sessionEspecial2Thumbnail from "../images/session-especial-thumbnail/session-especial-2-thumbnail.jpg";
import sessionEspecial3 from "../images/session-especial/session-especial-3.jpg";
import sessionEspecial3Thumbnail from "../images/session-especial-thumbnail/session-especial-3-thumbnail.jpg";
import sessionEspecial12 from "../images/session-especial/session-especial-12.jpeg";
import sessionEspecial12Thumbnail from "../images/session-especial-thumbnail/session-especial-12-thumbnail.jpg";
import sessionEspecial13 from "../images/session-especial/session-especial-13.jpeg";
import sessionEspecial13Thumbnail from "../images/session-especial-thumbnail/session-especial-13-thumbnail.jpg";
import sessionEspecial14 from "../images/session-especial/session-especial-14.jpeg";
import sessionEspecial14Thumbnail from "../images/session-especial-thumbnail/session-especial-14-thumbnail.jpg";
import sessionEspecial15 from "../images/session-especial/session-especial-15.jpeg";
import sessionEspecial15Thumbnail from "../images/session-especial-thumbnail/session-especial-15-thumbnail.jpg";

function MiniRetiroNoviembre() {


    const images = [
        {
            original: sessionEspecial14,
            thumbnail: sessionEspecial14Thumbnail,
        },
        {
            original: sessionEspecial1,
            thumbnail: sessionEspecial1Thumbnail,
        },
        {
            original: sessionEspecial2,
            thumbnail: sessionEspecial2Thumbnail,
        },
        {
            original: sessionEspecial3,
            thumbnail: sessionEspecial3Thumbnail,
        },
        {
            original: sessionEspecial12,
            thumbnail: sessionEspecial12Thumbnail,
        },
        {
            original: sessionEspecial13,
            thumbnail: sessionEspecial13Thumbnail,
        },
        {
            original: sessionEspecial15,
            thumbnail: sessionEspecial15Thumbnail,
        }
    ]

    function isPrivate() {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams && queryParams.get('code') === 'MedicinaAlAlmaIndoor'
    }

    function getPriceSection() {
        if (!isPrivate()) {
            return <>
            </>
        } else {
            return <>
                <h3>Precio</h3>
                <p>Intercambio de Valor: 111 AUD
                    <ul>
                        <li>Separa Antes del 26 de Octubre: 99 AUD</li>
                        <li>Si has Participado en algún Círculo de Mujeres o Retiro de Yoga y Bienestar en Bali 88 AUD, hasta el 26 de Octubre.</li>
                    </ul>
                </p>
                <p>Separa tu espacio realizando transferencia al número celular 0413147237.</p>
            </>
        }
    }

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Mini-Retiro Medicina al Alma - Noviembre'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Te invito a nuestra Sesión Especial el Sábado 9 de Noviembre, en donde tendremos diferentes prácticas espirituales que nos ayudarán a seguir expandiendo nuestra conciencia. Adicionalmente es la oportunidad perfecta para seguir conectando con otros seres humanos que al igual que tú  buscan un espacio de relajación, movimiento y aprendizaje, un espacio para compartir reflexiones, experiencias y ofrecer apoyo emocional. Mujeres y Hombres bienvenidos.</p>
                    </div>
                </div>


                {/*<div className="row">*/}
                {/*    <div className="col-md-3"></div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        /!*<iframe width="429" height="762" src="https://www.youtube.com/embed/AbSXz3cPSpk"*!/*/}
                {/*        /!*        title="Círculo de Mujeres este 19 de Mayo, Sydney - Australia. No te lo puedes perder IG @lizneirar"*!/*/}
                {/*        /!*        frameBorder="0"*!/*/}
                {/*        /!*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*!/*/}
                {/*        /!*        allowFullScreen></iframe>*!/*/}
                {/*        /!*<ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />*!/*/}
                {/*    </div>*/}
                {/*    <div className="col-md-3"></div>*/}
                {/*</div>*/}

                <div className="row rem-2">
                    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />
                </div>

                <div className="row">
                    <div className="col-md-7">
                        <p className="text-justify"><b>Mini-Retiro muy especial de casi 4 Horas dedicadas a nutrir tu ser a través de:
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <li>Ejercicios de Respiración para Activar tu Energía Vital.</li>
                            <li>
                                Clase Multinivel de Vinyasa Yoga enfocada a liberar emociones
                                reprimidas.
                            </li>
                            <li>Relajación Cuerpo y Mente a través de Instrumentos Musicales como Cuencos Tibetanos y de
                                Cristal entre otros.
                            </li>
                            <li>Ritualitos: Activación Código Sagrado para la Abundancia.
                            </li>
                            <li>Tendremos diferentes ejercicios/técnicas de Dibujo en donde aprenderás a liberar el
                                estrés y ansiedad asi como un masajito para estimular el nervio vago.
                            </li>
                            <li>Snacks deliciosos y mucho mas.
                            </li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Our Yoga Space. 2/52 Ourimbah Rd, Mosman</p>
                        <h3>Fecha y Hora</h3>
                        <p>Sábado 9 de Noviembre, 11:00 AM a 2:30 PM.</p>
                        {getPriceSection()}

                        {/*<span className="fw-bold">*/}
                        {/*    Información Importante: En caso de lluvia, cambiaremos el lugar (Indoor) y probablemente la hora de encuentro, te informaré el Martes 8 de Octubre, así que te sugiero reservar el domingo hasta las 4 pm solo para ti.*/}
                        {/*</span>*/}
                        <PreparationItems preparationItems={[
                            'Debes realizar el pago por anticipado para reservar tu espacio.',
                            'Ser puntuales es muy importante, nuestro Sesión inicia a la hora programada, asi que, te recomiendo puntualidad.',
                            'Luego de confirmada tu asistencia no se realiza la devolución del dinero, en caso de no poder asistir puedes ceder tu espacio a alguien más.',
                            'Es importante que tengas un tarrito de agua para que te mantegas hidratada.'
                        ]}/>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-4">
                        <ContactForm yogaClassType={ClassType.WomenCircle}/>
                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default MiniRetiroNoviembre;
