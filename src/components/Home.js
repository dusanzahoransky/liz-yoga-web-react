import cover2 from '../images/home/cover-2-large-progressive.jpg';
import cover2portrait from '../images/home/cover-2-portrait-progressive.jpg';
import cover6 from '../images/home/cover-6.jpg';
import cover6portrait from '../images/home/cover-6-portrait.jpg';
import miniRetiroCamping from '../images/home/cover-mini-retreat-camping.jpg';
import miniRetiroCampingPortrait from '../images/home/cover-mini-retreat-camping-portrait.jpg';
import coverRetreatMarch2025 from '../images/home/cover-retreat-march-2025.jpg';
import coverRetreatMarch2025Portrait from '../images/home/cover-retreat-march-2025-portrait.jpg';
import coverRetreatTailandia2025 from '../images/home/cover-retreat-tailandia-2025.jpg';
import coverRetreatTailandia2025Portrait from '../images/home/cover-retreat-tailandia-2025-vertical.jpg';
import cardPrivateOnline from '../images/home/card-private-online.jpg';
import cardWorkshopInPerson from '../images/home/card-workshop-in-person.jpg';
import cardSessionDeRelajacion from '../images/home/card-session-de-relajacion.jpg';
import cardGroupsInPerson from '../images/home/card-groups-in-person.jpg';
import cardPrivateInPerson from '../images/home/card-private-in-person.jpg';
import cardRetreatBali from '../images/home/card-retreat-bali-sept-2024.jpg';
import cardRetreatThailand2025 from '../images/home/card-retreat-thailand-2025.jpg';
import Footer from "./Footer";

function Home() {
  return (
      <main role="main">

          <div id="home-page-carousel" className="carousel slide " data-bs-ride="carousel">

              <div className="carousel-inner">

                  <div className="carousel-item active" data-bs-interval="6000">
                      <a href="/retreat-tailandia-mayo-26">
                      <picture>
                          <source srcSet={coverRetreatTailandia2025Portrait}
    media="(max-width: 800px) and (orientation: portrait)"/>
                          <img src={coverRetreatTailandia2025} alt="Retreat"/>
                      </picture>
                      <div className="container">
                          <div className="carousel-caption carousel-caption-light">
                              <h2>Santosha, Retiro de Yoga y Bienestar</h2>
                              <h3>Tailandia Mayo 2026</h3>
                          </div>
                      </div>
                      </a>
                  </div>
                  {/*<div className="carousel-item active" data-bs-interval="6000">*/}
                  {/*    <a href="/retreat-bali-march-25">*/}
                  {/*        <picture>*/}
                  {/*            <source srcSet={coverRetreatMarch2025Portrait}*/}
                  {/*                    media="(max-width: 800px) and (orientation: portrait)"/>*/}
                  {/*            <img src={coverRetreatMarch2025} alt="Retreat"/>*/}
                  {/*        </picture>*/}
                  {/*        <div className="container">*/}
                  {/*            <div className="carousel-caption carousel-caption-dark">*/}
                  {/*                <h2>Retiro de Yoga y Bienestar</h2>*/}
                  {/*                <h3>Bali Mayo 2025</h3>*/}
                  {/*            </div>*/}
                  {/*        </div>*/}
                  {/*    </a>*/}
                  {/*</div>*/}

                  <div className="carousel-item" data-bs-interval="3000">
                      <a href="/groups-in-person">
                          <picture>
                              <source srcSet={cover2portrait}
                                      media="(max-width: 800px) and (orientation: portrait)"/>
                              <img src={cover2} alt="Private clases"/>
                          </picture>
                          <div className="container">
                              <div className="carousel-caption carousel-caption-dark">
                                  <h2>Yoga Clases Grupales</h2>
                              </div>
                          </div>
                      </a>
                  </div>

                  {/*<div className="carousel-item" data-bs-interval="3000">*/}
                  {/*    <a href="/mini-retiro-camping">*/}
                  {/*        <picture>*/}
                  {/*            <source srcSet={miniRetiroCampingPortrait}*/}
                  {/*                    media="(max-width: 800px) and (orientation: portrait)"/>*/}
                  {/*            <img src={miniRetiroCamping} alt="Private clases"/>*/}
                  {/*        </picture>*/}

                  {/*        <div className="container">*/}
                  {/*            <div className="carousel-caption carousel-caption-light">*/}
                  {/*                <h2>MiniRetiro de Yoga y Aventura</h2>*/}
                  {/*            </div>*/}
                  {/*        </div>*/}
                  {/*    </a>*/}
                  {/*</div>*/}

                  <div className="carousel-item" data-bs-interval="3000">
                      <a href="/mini-retiro-diciembre">
                          <picture>
                              <source srcSet={cover6portrait}
                                      media="(max-width: 800px) and (orientation: portrait)"/>
                              <img src={cover6} alt="Private clases"/>
                          </picture>

                          <div className="container">
                              <div className="carousel-caption carousel-caption-light">
                                  <h2>Mini-Retiro Fin de Año</h2>
                              </div>
                          </div>
                      </a>
                  </div>

              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#home-page-carousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"/>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#home-page-carousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"/>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>


          <div className="container introduction rem-2">
              <h2> Facilitadora de Yoga y Bienestar LIZ <span className="color-secondary">NEIRA</span></h2>
              <h5 className="rem-2"><a href="https://www.instagram.com/lizneirar/">Instagram: @lizneirar</a></h5>
              <p className="text-justify">Desde hace 7 años el Yoga atrajo mi atención y descubrí un mundo fantástico en
                  donde
                  descubrí los beneficios físicos, mentales y espirituales que esta extraordinaria disciplina
                  ofrece.</p>
              <p className="text-justify">Desde hace 5 años me he especializado en Vinyasa Yoga, técnica enfocada en la
                  respiración, en los movimientos controlados por medio de asanas/posturas, estiramiento del cuerpo y
                  meditación.</p>
              <p className="text-justify">Profesora certificada de Vinyasa, Hatha, Yin y Ashtanga yoga, 500 horas de formación avanzada según los estandares establecidos por Yoga Alliance.
                  (200 horas de formación con los mejores profesores de Sydney - Australia. 300 horas de formación avanzada en Bali Indonesia con profesores de la India).
                  </p><p className="text-justify">Actualmente resido en Sydney-Australia un país
                  maravilloso en donde motivo a
                  las personas a que muevan su cuerpo especialmente a través del yoga o cualquier otro deporte; me enfoco en
                  demostrar que el bienestar físico y mental son parte
                  fundamental para tener calidad de vida, conexión mente, cuerpo y alma.</p>
          </div>

          <div className="container marketing">

              <h4 className="display-7 rem-2 text-center">SANTOSHA, RETIRO DE YOGA Y BIENESTAR</h4>

              <div className="row row-cols-1">
                  <div className="col-3"></div>
                  <div className="col-md">
                      <a href="/retreat-tailandia-mayo-26">
                          <div className="card h-100 text-center">
                              <img src={cardRetreatThailand2025} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  {/*<div className="sold-out-stamp-small-parent">*/}
                                  <div>
                                      {/*<div className="sold-out-stamp-small">*/}
                                      <div>
                                          <p href="/retreat-tailandia-mayo-26" className="card-title">TAILANDIA MAYO 2026</p>
                                      </div>
                                  </div>

                                  <p className="card-text">
                                      Únete a nuestro Retiro en el Paraíso de Tailandia en un Resort que te ofrecerá comodidad, comida nutritiva y deliciosa, espacios exclusivos para que te desconectes del día a día y te relajes.
                                  </p>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className="col-3"></div>
              </div>

              <h4 className="display-7 rem-2 text-center">CLASES</h4>

              <div className="row  row-cols-1 row-cols-md-2 rem-2">
                  <div className="col">
                      <a href="/groups-in-person">
                          <div className="card h-100 text-center">
                              <img src={cardGroupsInPerson} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  <p href="/groups-in-person" className="card-title">CLASES GRUPALES</p>
                                  <p className="card-text">Práctica de yoga grupal disfrutando los hermosos parques y
                                      playas de Sydney.</p>
                              </div>
                          </div>
                      </a>
                  </div>

                  <div className="col">
                      <a href="/private-in-person">
                          <div className="card h-100 text-center">
                              <img src={cardPrivateInPerson} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  <p className="card-title">CLASES PRIVADAS</p>
                                  <p className="card-text">Clase dirigida exclusivamente para ti teniendo en cuenta tus
                                      necesidades y requerimientos.</p>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>

              <div className="row  row-cols-1 row-cols-md-2">
                  <div className="col ">
                      <a href="/sesion-de-relajacion">
                          <div className="card h-100 text-center">
                              <img src={cardSessionDeRelajacion} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  <p className="card-title">CELEBRA TUS FECHAS ESPECIALES</p>
                                  <p className="card-text">Día de la Mujer, Cumpleaños, Día del Amor y la Amistad entre
                                      otros.</p>
                              </div>
                          </div>
                      </a>
                  </div>


                  <div className="col">
                      <a href="/private-online">
                          <div className="card h-100 text-center">
                              <img src={cardPrivateOnline} className="card-img-top" alt="card private online"/>
                              <div className="card-body">
                                  <p className="card-title">CLASES PRIVADAS ONLINE</p>
                                  <p className="card-text">Clases de Vinyasa Yoga dinámicas privadas solo para ti.</p>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>

          </div>

          <br/>

          <Footer/>
      </main>
  );
}

export default Home;
