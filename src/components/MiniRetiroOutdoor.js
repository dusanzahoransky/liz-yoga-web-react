import sessionEspecial6 from '../images/session-especial/session-especial-6.jpg';
import sessionEspecial6Thumbnail from '../images/session-especial-thumbnail/session-especial-6-thumbnail.jpg';
import sessionEspecial7 from '../images/session-especial/session-especial-7.jpg';
import sessionEspecial7Thumbnail from '../images/session-especial-thumbnail/session-especial-7-thumbnail.jpg';
import sessionEspecial8 from '../images/session-especial/session-especial-8.jpg';
import sessionEspecial8Thumbnail from '../images/session-especial-thumbnail/session-especial-8-thumbnail.jpg';
import sessionEspecial9 from '../images/session-especial/session-especial-9.jpeg';
import sessionEspecial9Thumbnail from '../images/session-especial-thumbnail/session-especial-9-thumbnail.jpeg';
import sessionEspecial10 from '../images/session-especial/session-especial-10.jpeg';
import sessionEspecial10Thumbnail from '../images/session-especial-thumbnail/session-especial-10-thumbnail.jpg';
import sessionEspecial11 from '../images/session-especial/session-especial-11.jpeg';
import sessionEspecial11Thumbnail from '../images/session-especial-thumbnail/session-especial-11-thumbnail.jpg';
// import sessionEspecial16 from '../images/session-especial/session-especial-16.jpg';
// import sessionEspecial16Thumbnail from '../images/session-especial-thumbnail/session-especial-16-thumbnail.jpg';
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import PreparationItems from "./classDetails/PreparationItems";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";

function MiniRetiroOutdoor() {

    // const images = [
    //    {
    //         original: sessionEspecial1,
    //         thumbnail: sessionEspecial1Thumbnail,
    //     },
    //     {
    //         original: sessionEspecial2,
    //         thumbnail: sessionEspecial2Thumbnail,
    //     },
    //     {
    //         original: sessionEspecial3,
    //         thumbnail: sessionEspecial3Thumbnail,
    //     }
    // ]

    const images = [
       {
            original: sessionEspecial9,
            thumbnail: sessionEspecial9Thumbnail,
        },
        {
            original: sessionEspecial10,
            thumbnail: sessionEspecial10Thumbnail,
        },
        {
            original: sessionEspecial6,
            thumbnail: sessionEspecial6Thumbnail,
        },
        {
            original: sessionEspecial7,
            thumbnail: sessionEspecial7Thumbnail,
        },
        {
            original: sessionEspecial8,
            thumbnail: sessionEspecial8Thumbnail,
        },
        {
            original: sessionEspecial11,
            thumbnail: sessionEspecial11Thumbnail,
        },
        // {
        //     original: sessionEspecial16,
        //     thumbnail: sessionEspecial16Thumbnail,
        // }
    ]


    function isPrivate() {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams && queryParams.get('code') === 'MiniRetiroFebrero'
    }

    function getPriceSection() {
        if (!isPrivate()) {
            return <>
            </>
        } else {
            return <>
                <h3>Precio</h3>
                <p>Intercambio de Valor: 99 AUD
                    <ul>
                        <li>CUPOS LIMITADOS</li>
                    </ul>
                </p>
                <p>Separa tu espacio realizando transferencia al número celular 0413147237.</p>
            </>
        }
    }

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Circulo de Mujeres'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Te invito a nuestro Circulo de Mujeres el Domingo 09 de Febrero, en donde tendremos diferentes prácticas espirituales que nos ayudarán a seguir expandiendo nuestra conciencia. Adicionalmente es la oportunidad perfecta para seguir conectando con otros seres humanos que al igual que tú  buscan un espacio de relajación, movimiento y aprendizaje, un espacio para compartir reflexiones, experiencias y ofrecer apoyo emocional.</p>
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
                            <li>Meditación Guiada con Baño de Sonido con Cuencos Tibetanos y de Cristal y otros
                                instrumentos.
                            </li>
                            <li>Sesión Multinivel de Yoga.
                            </li>
                            <li>Talleres, Rituales y Mucho Mas.
                            </li>

                            <li>Snacks Nutritivos.
                            </li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Coogee Beach, Goldstein Reserve - Sydney.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Domingo</p>
                        {getPriceSection()}

                        <span className="fw-bold">
                            Información Importante: En caso de lluvia, cambiaremos el lugar (Indoor) y probablemente la hora de encuentro, te informaré el Martes de esa misma semana, así que te sugiero reservar el domingo hasta las 3 pm solo para ti.
                        </span>
                        <PreparationItems preparationItems={[
                            'Debes realizar el pago por anticipado para reservar tu espacio.',
                            'Ser puntuales es muy importante, nuestro Sesión inicia a la hora programada, asi que, te recomiendo puntualidad.',
                            'Luego de confirmada tu asistencia no se realiza la devolución del dinero, en caso de no poder asistir puedes ceder tu espacio a alguien más.',
                            'Es importante que tengas un tarrito de agua para que te mantegas hidratado/da.'
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

export default MiniRetiroOutdoor;
