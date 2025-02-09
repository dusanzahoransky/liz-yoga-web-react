import img1 from '../images/mini-retiro-camping/1.jpg';
import img2 from '../images/mini-retiro-camping/2.jpg';
import img3 from '../images/mini-retiro-camping/3.jpg';
import img4 from '../images/mini-retiro-camping/4.jpg';
import img5 from '../images/mini-retiro-camping/5.jpg';
import img6 from '../images/mini-retiro-camping/6.jpg';
import img7 from '../images/mini-retiro-camping/7.jpg';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import PreparationItems from "./classDetails/PreparationItems";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";
import img1vertical from "../images/retreat-tailandia-octubre-25/1-vertical.jpg";

function MiniRetiroCamping() {


    const images = [
        {
            original: img2,
        },
        {
            original: img3,
        },
        {
            original: img4,
        },
        {
            original: img5,
        },
        {
            original: img6,
        },
        {
            original: img7,
        },
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

        <div className="cover-shot-container">
            <div className="cover-shot-caption cover-shot-caption-light">
                <h1 className="display-3">Ananda, Retiro de Yoga y Bienestar</h1>

            </div>
            <picture>
                <img src={img1} alt="cover-shot" className="img-screen-width"/>
            </picture>
        </div>
        <main role="main" className="container">

            <DetailsHeading text='Mini-Retiro de Camping'/>

            <div className="container details">

                <div className="row">
                    <div className="col-md-8">
                        <p className="text-justify">Te invito a nuestro Primer Mini-Retiro de Inicio de Año el Domingo 09 de Febrero, en donde tendremos diferentes prácticas espirituales que nos ayudarán a seguir expandiendo nuestra conciencia. Adicionalmente es la oportunidad perfecta para seguir conectando con otros seres humanos que al igual que tú  buscan un espacio de relajación, movimiento y aprendizaje, un espacio para compartir reflexiones, experiencias y ofrecer apoyo emocional. Mujeres y Hombres bienvenidos.</p>

                        <p className="text-justify"><b>Mini-Retiro muy especial de casi 4 Horas dedicadas a nutrir tu ser a través de:
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <p>Campsite facilities:	picnic tables, fire pits, barbecue facilities, drinking water, warm showers, toilets, electric power, kettle</p>


                            <li>Ejercicios de Respiración para Activar tu Energía Vital.</li>
                            <li>Meditación Guiada con Baño de Sonido con Cuencos Tibetanos y de Cristal y otros
                                instrumentos.
                            </li>
                            <li>Sesión Multinivel de Yoga enfocada a al chakra de la intuición, Ajna Chakra, Sexto centro energético de tu sistema de chakras, Este chakra está asociado con la conciencia, la comprensión y la clarividencia. Es un centro de percepción extrasensorial, percepción de la verdad y comprensión intuitiva.
                            </li>
                            <li>Taller de Numerología, vas a reconocer en qué año estás, cual es la energía que tienes disponible ahora mismo utilizando nuestro nombre, fecha de nacimiento y otros aspectos que te darán muchísima información para que utilices esa energía para tu más alto beneficio..
                            </li>

                            <li>Snacks Nutritivos.
                            </li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Coogee Beach, Goldstein Reserve - Sydney.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Domingo 09 de Febrero, 7:15 AM a 10:30/11 AM.</p>
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
                    <div className="col-md-4">
                        <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />
                    </div>
                </div>



                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-6"><ContactForm yogaClassType={ClassType.MiniretiroCamping}/></div>
                    <div className="col-md-2">

                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default MiniRetiroCamping;
