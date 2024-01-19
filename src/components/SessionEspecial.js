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

function SessionEspecial() {

    const images = [
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
        }
    ]

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Sesión Dirigida a Calmar tu Sistema Nervioso'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Tu sistema nervioso establece lo que es posible para ti, regula el funcionamiento de todos tus órganos, transmite señales entre el cerebro y el resto del cuerpo de modo que controla la capacidad de moverse, respirar, ver, pensar. De ti depende mantener un sistema nervioso en buen estado.</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />
                </div>

                <div className="row">
                    <div className="col-md-7">
                        <p className="text-justify"><b>Te invito a una sesión muy especial de 2 Horas dedicadas a nutrir
                            tu ser a través
                            de:
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <li>Diferentes técnicas para calmar el sistema nervioso (incluyendo
                                Pranayama/Ejercicios de
                                Respiración)</li>
                            <li>Clase Multinivel de Vinyasa enfocada a conectar y escuchar tu
                                cuerpo</li>
                            <li>Meditación Guiada</li>
                            <li>Relajación Cuerpo y Mente a través de Instrumentos Musicales como
                                Cuencos Tibetanos y de
                                Cristal entre otros</li>
                        </ul>
                        <h3>Lugar</h3>
                        <p>Estudio de Yoga en Mosman - Sydney.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Domingo 11 de Febrero, 11:00 AM a 1:15 PM.</p>

                        <PreparationItems preparationItems={[
                            'Debes realizar el pago por anticipado para reservar tu espacio.',
                            'Ser puntuales es muy importante, la sesión inicia a la hora programada, asi que, te recomiendo puntualidad.',
                            'Luego de confirmada tu asistencia no se realiza la devolución del dinero, en caso de no poder asistir puedes ceder tu espacio a alguien más.',
                            'Es importante que tengas un tarrito de agua para hidratarte.'
                        ]}/>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-4">
                    <ContactForm yogaClassType={ClassType.GroupsInPerson}/>
                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default SessionEspecial;
