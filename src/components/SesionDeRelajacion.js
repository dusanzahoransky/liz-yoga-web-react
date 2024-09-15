import sessionEspecial3 from '../images/session-especial/session-especial-3.jpg';

import Footer from "./Footer";
import DetailsHeading from "./classDetails/DetailsHeading";
import '../image-gallery.css';

function SesionDeRelajacion() {

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Sesión de Relajación Online'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Tu sistema nervioso establece lo que es posible para ti, regula el funcionamiento de todos tus órganos, transmite señales entre el cerebro y el resto del cuerpo de modo que controla la capacidad de moverse, respirar, ver, pensar. De ti depende mantener un sistema nervioso en buen estado.</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <img src={sessionEspecial3}></img>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="text-justify"><b>Te invito a una sesión online muy especial de 75 minutos (máximo)
                            dedicados a nutrir
                            tu ser a través
                            de:
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <li>Ejercicios de
                                Respiración/Pranayama
                            </li>
                            <li>Movimientos suaves a tu cuerpo que te ayudaran a soltar tensión, liberar estrés,
                                ansiedad, preocupaciones, tristeza y
                                aliviar dolores corporales y del alma.
                            </li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Sesión Online (a través de Google Meet).</p>
                        <h3>Fecha y Hora</h3>
                        <p>Jueves 4 de Julio, 7:30 PM (Hora Sydney) Revisa tu zona horaria si vives en otra ciudad o
                            país.</p>
                        {/*<h3>Precio</h3>*/}
                        {/*<p>GRATUITO</p>*/}
                        <h3>Link de Acceso:</h3>
                        <p><a className="call-link" href="https://meet.google.com/dxw-pzbd-mtx">Sesión de Relajación Jueves 4 Julio 7:30 pm Hora Sydney</a></p>

                        <h3>Que debes tener listo para la sesión?</h3>
                        <ul className="class-preparation-list text-justify">
                            <li>Ten a la mano tu mat de yoga/esterilla o algo que se le parezca.</li>
                            <li>Ten a la mano una cobija para que te abrigues bien.</li>
                            <li>Ten a la mano un cojin de meditacion, no es mandatario sino cuentas con el.</li>
                            <li>Si tienes un candle utilizalo para que intensiones la sesión.</li>

                            <h3>Aspectos a Tener en cuenta</h3>
                            <li>Asegurate que el espacio en el que tomes la sesión sea tranquilo y sin mucho ruido.</li>
                            <li>Conéctate a traves de tu portatil y utiliza tus audifonos, sino tienes portatil utiliza
                                tu celular.
                            </li>
                            <li>Te recomiendo conectarte a las 7:25 pm, aunque si no alcanzas a llegar puntual, puedes
                                unirte cuando te sea posible.
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default SesionDeRelajacion;
