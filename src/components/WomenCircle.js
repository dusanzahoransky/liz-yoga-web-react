import sessionEspecial1 from '../images/session-especial/session-especial-1.jpg';
import sessionEspecial1Thumbnail from '../images/session-especial-thumbnail/session-especial-1-thumbnail.jpg';
import sessionEspecial2 from '../images/session-especial/session-especial-2.jpg';
import sessionEspecial2Thumbnail from '../images/session-especial-thumbnail/session-especial-2-thumbnail.jpg';
import sessionEspecial3 from '../images/session-especial/session-especial-3.jpg';
import sessionEspecial3Thumbnail from '../images/session-especial-thumbnail/session-especial-3-thumbnail.jpg';

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

            <DetailsHeading text='Circulo de Mujeres - Abril'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Te invito a nuestro Circulo de Mujeres el Domingo 21 de Abril, allí tendremos diferentes prácticas espirituales que nos ayudarán a seguir expandiendo nuestra conciencia. Adicionalmente es la
                            oportunidad perfecta para seguir fortaleciendo los lazos entre nosotras como mujeres, un
                            espacio para compartir reflexiones, experiencias y ofrecer apoyo emocional.</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <iframe width="429" height="762" src="https://www.youtube.com/embed/AbSXz3cPSpk"
                                title="Círculo de Mujeres este 21 de Abril, Sydney - Australia. No te lo puedes perder IG @lizneirar"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                {/*<div className="row rem-2">*/}
                {/*    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />*/}
                {/*</div>*/}

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
                        <p>Domingo 21 de Abril, 8:00 AM a 12:00 PM.</p>
                        {getPriceSection()}

                        <span className="fw-bold">Información Importante: En caso de lluvia, cambiaremos el lugar (Indoor) y probablemente la hora de encuentro, te informaré el Martes 16 de Abril, así que te sugiero reservar TODO el domingo para ti.</span>
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
