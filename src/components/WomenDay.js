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

function WomenDay() {

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
        return queryParams && queryParams.get('code') === 'WomenDay2024'
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

            <DetailsHeading text='Conmemoración Día Internacional de la Mujer'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Te invito a conmemorar el Día Internacional de La Mujer a través de
                            un circulo de mujeres en donde tendremos diferentes prácticas espirituales que fomentarán la
                            solidaridad y el apoyo mutuo. Esta conmemoración del Día de la Mujer, puede ser la
                            oportunidad perfecta para seguir fortaleciendo los lazos entre nosotras como mujeres, un
                            espacio para compartir reflexiones, experiencias y ofrecer apoyo emocional.</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <iframe width="429" height="762" src="https://www.youtube.com/embed/gqmnU6jWwjo"
                                title="Te invito a conmemorar el Día Internacional de la Mujer en un Círculo de Mujeres-Domingo 10 de Marzo"
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
                            <li>Meditación Guiada.</li>
                            <li>Relajación Cuerpo y Mente a través de Instrumentos Musicales como
                                Cuencos Tibetanos y de
                                Cristal entre otros.
                            </li>
                            <li>Taller de Manifestación, exploraremos los niveles de manifestación e identificaremos en
                                que nivel te encuentras, concluimos con ejercicio práctico.
                            </li>
                            <li>Taller Conéctate con tu Energía Femenina, con una invitada muy especial, Gaby Escobar
                                quien es Mentora Espiritual, hablaremos de:
                                <ul>
                                    <li>En que consiste la energía femenina, Pilares: El ser/sentir y el recibir.</li>
                                    <li>Energía femenina sana y energía femenina herida.</li>
                                    <li>Como equilibriar el exceso de energia ya sea femenina o masculina</li>
                                    <li>Activación energética para conectar con tu poder creador femenino.</li>
                                </ul>
                            </li>
                            <li>Brunch delicioso preparado por Lovely Grazing Boards (Tabla de quesos, fruta, sliders, entre otros).
                            </li>
                            <li>Bebida Refrescante</li>
                            <li>Regalito pensado en ti</li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Coogee Beach, Goldstein Reserve - Sydney.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Domingo 10 de Marzo, 8:30 AM a 12:30 PM.</p>
                        <p>Domingo 17 de Marzo, 8:30 AM a 12:30 PM.</p>
                        {getPriceSection()}

                        <span className="fw-bold">Información Importante: En caso de lluvia, cambiaremos el lugar y probablemente la hora de encuentro, te informaré el lunes 4 y 11 de Marzo, así que te sugiero reservar todo el domingo para ti.</span>
                        <PreparationItems preparationItems={[
                            'Debes realizar el pago por anticipado para reservar tu espacio.',
                            'Ser puntuales es muy importante, nuestro circulo de mujeres inicia a la hora programada, asi que, te recomiendo puntualidad.',
                            'Luego de confirmada tu asistencia no se realiza la devolución del dinero, en caso de no poder asistir puedes ceder tu espacio a alguien más.',
                            'Es importante que tengas un tarrito de agua para que te mantegas hidratada.'
                        ]}/>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-4">
                        <ContactForm yogaClassType={ClassType.WomenDay}/>
                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default WomenDay;
