import sessionEspecial3 from '../images/session-de-relajacion/session-especial-3.jpg';

import Footer from "./Footer";
import DetailsHeading from "./classDetails/DetailsHeading";
import '../image-gallery.css';

function SesionDeRelajacion() {

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Celebra tus Fechas Especiales'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Una manera distinta de celebrar tus fechas especiales de cumpleaños, despedida de soltera, cierre de año, inicio de año, entre otras.</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <img src={sessionEspecial3}></img>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="text-justify"><b>Será una sesión de hasta 90 minutos dedicados a nutrir tu ser a través de:
                            dedicados a nutrir
                            tu ser a través
                            de:
                        </b></p>
                        <ul className="class-preparation-list text-justify">
                            <li>Ejercicios de
                                Respiración/Pranayama para anclarnos al momento presente, llegar a la calma y relajacion del cuerpo y mente acompañado de baño de sonidos con cuencos tibetanos y de cristal.
                            </li>
                            <li>Practica corta de yoga con movimientos suaves y estiramiento a tu cuerpo para dejar fluir la campo energetico y con ello liberar tensión, estrés,
                                ansiedad, preocupaciones y
                                aliviar dolores corporales y del alma.
                            </li>
                            <li>Meditación Guiada (dirigida al tema de la celebración)
                            </li>
                            <li>Ritual enfocado al tema de Celebración
                            </li>

                        </ul>
                        <h3>Lugar</h3>
                        <p>Lo decidiremos en común acuerdo.</p>
                        <h3>Fecha y Hora</h3>
                        <p>Por Definir.</p>
                        <h3>Intercambio de Valor</h3>
                        <p>Por Acordar dependiendo lugar, dia y numero de personas</p>
                        {/*<h3>Link de Acceso:</h3>*/}
                        {/*<p><a className="call-link" href="https://meet.google.com/dxw-pzbd-mtx">Sesión de Relajación Jueves 4 Julio 7:30 pm Hora Sydney</a></p>*/}

                        {/*<h3>Que debes tener listo para la sesión?</h3>*/}
                        {/*<ul className="class-preparation-list text-justify">*/}
                            {/*<li>Ten a la mano tu mat de yoga/esterilla o algo que se le parezca.</li>*/}
                            {/*<li>Ten a la mano una cobija para que te abrigues bien.</li>*/}
                            {/*<li>Ten a la mano un cojin de meditacion, no es mandatario sino cuentas con el.</li>*/}
                            {/*<li>Si tienes un candle utilizalo para que intensiones la sesión.</li>*/}

                            {/*<h3>Aspectos a Tener en cuenta</h3>*/}
                            {/*<li>Asegurate que el espacio en el que tomes la sesión sea tranquilo y sin mucho ruido.</li>*/}
                            {/*<li>Conéctate a traves de tu portatil y utiliza tus audifonos, sino tienes portatil utiliza*/}
                            {/*    tu celular.*/}
                            {/*</li>*/}
                            {/*<li>Te recomiendo conectarte a las 7:25 pm, aunque si no alcanzas a llegar puntual, puedes*/}
                            {/*    unirte cuando te sea posible.*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default SesionDeRelajacion;
