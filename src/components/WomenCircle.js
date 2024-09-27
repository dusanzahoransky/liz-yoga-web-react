import sessionEspecial1 from '../images/session-especial/session-especial-1.jpg';
import sessionEspecial1Thumbnail from '../images/session-especial-thumbnail/session-especial-1-thumbnail.jpg';
import sessionEspecial2 from '../images/session-especial/session-especial-2.jpg';
import sessionEspecial2Thumbnail from '../images/session-especial-thumbnail/session-especial-2-thumbnail.jpg';
import sessionEspecial3 from '../images/session-especial/session-especial-3.jpg';
import sessionEspecial3Thumbnail from '../images/session-especial-thumbnail/session-especial-3-thumbnail.jpg';
import sessionEspecial4 from '../images/session-especial/session-especial-4.jpg';
import sessionEspecial4Thumbnail from '../images/session-especial-thumbnail/session-especial-4-thumbnail.jpg';
import sessionEspecial5 from '../images/session-especial/session-especial-5.jpg';
import sessionEspecial5Thumbnail from '../images/session-especial-thumbnail/session-especial-5-thumbnail.jpg';
import sessionEspecial6 from '../images/session-especial/session-especial-6.jpg';
import sessionEspecial6Thumbnail from '../images/session-especial-thumbnail/session-especial-6-thumbnail.jpg';
import sessionEspecial7 from '../images/session-especial/session-especial-7.jpg';
import sessionEspecial7Thumbnail from '../images/session-especial-thumbnail/session-especial-7-thumbnail.jpg';
import sessionEspecial8 from '../images/session-especial/session-especial-8.jpg';
import sessionEspecial8Thumbnail from '../images/session-especial-thumbnail/session-especial-8-thumbnail.jpg';
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import PreparationItems from "./classDetails/PreparationItems";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";
import YoutubeEmbed from "./socialMedia/YoutubeEmbed";

function WomenCircle() {

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
            original: sessionEspecial4,
            thumbnail: sessionEspecial4Thumbnail,
        },
        {
            original: sessionEspecial5,
            thumbnail: sessionEspecial5Thumbnail,
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
        }
    ]


    function isPrivate() {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams && queryParams.get('code') === 'WomenCircle'
    }

    function getPriceSection() {
        if (!isPrivate()) {
            return <>
            </>
        } else {
            return <>
                <h3>Precio</h3>
                <p>$111 AUD</p>
                <p>Separa tu espacio realizando transferencia al número celular 0413147237.</p>
            </>
        }
    }

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Circulo de Mujeres - Mayo'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Te invito a nuestro Circulo de Mujeres el Domingo 19 de Mayo, allí tendremos diferentes prácticas espirituales que nos ayudarán a seguir expandiendo nuestra conciencia. Adicionalmente es la
                            oportunidad perfecta para seguir fortaleciendo los lazos entre nosotras como mujeres, un
                            espacio para compartir reflexiones, experiencias y ofrecer apoyo emocional.</p>
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
                        <p className="text-justify"><b>Mini-Retiro muy especial de 4 Horas dedicadas a
                            nutrir
                            tu ser a través
                            de:
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <li>Ejercicios de Respiración para Activar tu Energía Vital.</li>
                            <li>Clase Multinivel de Vinyasa Yoga Conecta con tu Cuerpo.</li>
                            <li>Relajación Cuerpo y Mente a través de Instrumentos Musicales como
                                Cuencos Tibetanos y de
                                Cristal entre otros.
                                <li>Ritual para Abrir el Corazón - Anahata Chakra.</li>
                            </li>
                            <li>Meditación Activa con Colores - Pinta tu Vida de Colores.
                            </li>


                            <li>Snacks deliciosos
                            </li>
                            <li>Bebida Refrescante</li>


                        </ul>
                        <h3>Lugar</h3>
                        <p>Coogee Beach, Goldstein Reserve - Sydney.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Domingo 19 de Mayo, 8:00 AM a 12:00 PM.</p>
                        {getPriceSection()}

                        <span className="fw-bold">Información Importante: En caso de lluvia, cambiaremos el lugar (Indoor) y probablemente la hora de encuentro, te informaré el Martes 14 de Mayo, así que te sugiero reservar TODO el domingo para ti.</span>
                        <PreparationItems preparationItems={[
                            'Debes realizar el pago por anticipado para reservar tu espacio.',
                            'Ser puntuales es muy importante, nuestro circulo de mujeres inicia a la hora programada, asi que, te recomiendo puntualidad.',
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

export default WomenCircle;
