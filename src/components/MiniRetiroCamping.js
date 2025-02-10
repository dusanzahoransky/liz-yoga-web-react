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
        return queryParams && queryParams.get('code') === 'MiniRetiroyogaaventura'
    }

    function getPriceSection() {
        if (!isPrivate()) {
            return <>
            </>
        } else {
            return <>
                <h3>Intercambio de Valor</h3>
                <p> 111 AUD, Plazo para Reservar tu Particiáción hasta el <b>Martes 18 de Febrero.</b></p>

                <p><b>CUPOS LIMITADOS</b></p>


                <p>Separa tu espacio realizando transferencia al número celular 0413147237.</p>
            </>
        }
    }

    return (<>

        <div className="cover-shot-container">
            <div className="cover-shot-caption cover-shot-caption-light">
                <h1 className="display-3">MiniRetiro de Yoga y Aventura</h1>

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
                        <p className="text-justify">Te invito a nuestro Primer Mini-Retiro de Yoga y Aventura el primer fin de semana de Marzo, será un espacio exclusivo para los practicantes de mi Comunidad, un espacio para compartir y elevar la energia del grupo, tendremos diferentes actividades pensadas en el Bienestar Fisico, Mental, Espiritual, Energetico y Emocional, un MiniRetiro de Aventura para que salgamos de la rutina del dia a dia y tengamos un fin de semana de pura transformación y contacto con la naturaleza.</p>
                        <p className="text-justify">Adicionalmente es la oportunidad perfecta para seguir conectando con otros seres humanos que al igual que tú  buscan un espacio de relajación, movimiento y aprendizaje, un espacio para compartir reflexiones, experiencias y ofrecer apoyo emocional.</p>


                        <p className="text-justify"><b>Mini-Retiro especial de fin de Semana dedicado a nutrir tu ser con:
                        </b></p>
                        <p className="text-justify"><b>Sabado en la Tarde
                                                </b></p>
                        <ul className="class-preparation-list text-justify">

                            <li>Ejercicios de Respiración para Activar tu Energía Vital.</li>
                            <li>Meditación Guiada con Baño de Sonidos
                            </li>
                            <li>Sesión de Vinyasa Flow. </li>
                             <li>Camping and Hiking Masterclass by Dusan Zahoranksy</li>
                             <li>Caminata</li>
                             <li>Excursión al Rio</li>
                             <li>Juegos, Conversaciones y Mucho Más</li>
                             </ul>

                         <p className="text-justify"><b>
                        </b></p>
                          <p className="text-justify"><b>Domingo en la Mañana
                                                                          </b></p>
                                                  <ul className="class-preparation-list text-justify">

                              <li>Ejercicios de Respiración para Activar tu Energía Vital</li>
                              <li>Meditación Guiada con Baño de Sonidos
                              </li>
                               <li>Vinyasa Yoga</li>
                               <li>Caminata</li>
                               <li>Excursión al Rio</li>
 </ul>

<p className="text-justify"><b>
                        </b></p>
                          <p className="text-justify"><b>Campsite Facilities
                                                                          </b></p>
                                                  <ul className="class-preparation-list text-justify">

                            <li>
                             <p>Mesas de picnic, fogatas, BBQs, cocina, duchas con agua caliente, baños, Tomacorrientes, kettle, microondas.</p>
                            </li>
 <p className="text-justify"><b>
                        </b></p>
                          <p className="text-justify"><b>Que NO incluye el MiniRetiro
                                                                          </b></p>

                           <li>Comida, trae tus propios alimentos </li>
                           <li>Tienda de Acampar/Carpa </li>
                           <li>Valor del Alquiler del campamento, la idea es compartir los spots para acampar y dividir el valor entre los que compartamos el spot, nosotros nos encargaremos de hacer la reservación </li>
                           <li>Transporte, deberas ir en carro, la idea será que salgamos en grupo y compartamos el carro entre las personas que se registren, primero para comenzar a integrarnos como grupo, segundo para ayudar con el medio ambiente y tercero para que se compartan gastos de gasolina.</li>


                        </ul>
                        <h3>Lugar</h3>
                        <p>Campsite localizado a 3 horas en carro, salida hacia el sur de Sydney.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Fin de Semana del 1 al 2 de Marzo, idealmente saliendo de Sydney a las 6 am.</p>
                        <p>El horario para hacer Check in el Sabado es a las 2 pm y Checkout 10 am, sin embargo llegaremos al lugar el sabado temprano y exploraremos el sitio y luego haremos el checkin para armar las tiendas de acampar.</p>
                        {getPriceSection()}

                        <span className="fw-bold">
                            Información Importante: En caso de lluvia, se aplazará el MiniRetiro para el fin de semana del 8 y 9 de Marzo,es por ello que es indispensable reserves ese fin de semana tambien, el Martes 24 de Febrero sabremos el clima y decidiremos, sin embargo estamos convencidos que contaremos con un muy buen clima.
                        </span>
                        <PreparationItems preparationItems={[
                          'Será un espacio exclusivo para mi comunidad, así que el requisito indispensable es que te diviertas, descanses y sonrias.',
                          'Lleva tu Mat y Props de Yoga.',
                          'Es importante que tengas un tarrito de agua para que te mantegas hidratado/da.',
                            'Debes realizar el pago por anticipado para reservar tu espacio.',
                            'Luego de confirmada tu asistencia no se realiza la devolución del dinero, en caso de no poder asistir puedes ceder tu espacio a alguien más.',

                        ]}/>
                    </div>
                    <div className="col-md-4">
                        <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />
                    </div>
                </div>



                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-6"><ContactForm yogaClassType={ClassType.WomenCircle}/></div>
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
