import cover2 from '../images/home/cover-2-large-progressive.jpeg';
import cover2portrait from '../images/home/cover-2-portrait-progressive.jpeg';
import cover1 from '../images/home/cover-1-large-progressive.jpeg';
import cover1portrait from '../images/home/cover-1-portrait-progressive.jpeg';
import cover4 from '../images/home/cover-4-large-progressive.jpeg';
import cover4portrait from '../images/home/cover-4-large-portrait.jpeg';

import cardGroupsOnline from '../images/home/card-groups-online.jpg';
import cardPrivateOnline from '../images/home/card-private-online.jpg';
import cardWorkshopOnline from '../images/home/card-workshop-online.jpg';
import cardWorkshopInPerson from '../images/home/card-workshop-in-person.jpg';
import cardGroupsInPerson from '../images/home/card-groups-in-person.jpg';
import cardPrivateInPerson from '../images/home/card-private-in-person.jpg';
import Footer from "./Footer";

function Home() {
  return (
      <main role="main">

          <div id="home-page-carousel" className="carousel slide container" data-bs-ride="carousel">

              <div className="carousel-inner">

                  <div className="carousel-item active" data-bs-interval="4000">
                      <picture>
                          <source srcSet={cover2portrait}
    media="(max-width: 800px) and (orientation: portrait)"/>
                          <img src={cover2} alt="Private clases"
                               className="second-slide"/>
                      </picture>
                      <div className="container">
                          <div className="carousel-caption">
                              <h1 className="display-6">YOGA CLASES GRUPALES</h1>
                          </div>
                      </div>
                  </div>

                  <div className="carousel-item" data-bs-interval="4000">
                      <picture>
                          <source srcSet={cover1portrait}
                                  media="(max-width: 800px) and (orientation: portrait)"/>
                              <img src={cover1} alt="Private clases"/>
                      </picture>

                      <div className="container">
                          <div className="carousel-caption">
                              <h1 className="display-6">YOGA CLASES PRIVADAS</h1>
                          </div>
                      </div>
                  </div>

                  <div className="carousel-item" data-bs-interval="4000">
                      <picture>
                          <source srcSet={cover4portrait}
                                  media="(max-width: 800px) and (orientation: portrait)"/>
                          <img src={cover4} alt="Private clases"/>
                      </picture>

                      <div className="container">
                          <div className="carousel-caption">
                              <h1 className="display-6">YOGA WORKSHOP</h1>
                          </div>
                      </div>
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


          <div className="container introduction">
              <h1 className="display-6 rem-2">YOGA CON LIZ NEIRA</h1>
              <p className="text-justify">Desde hace 5 años el Yoga atrajo mi atención y descubrí un mundo fantástico en
                  donde
                  descubrí los beneficios físicos, mentales y espirituales que esta extraordinaria disciplina
                  ofrece.</p>
              <p className="text-justify">Desde hace 4 años me he especializado en Vinyasa Yoga, técnica enfocada en la
                  respiración, en los movimientos controlados por medio de asanas/posturas, estiramiento del cuerpo y
                  meditación.</p>
              <p className="text-justify">Profesora certificada de Vinyasa, Hatha, Yin y Ashtanga yoga, 500 horas de formación avanzada según los estandares establecidos por Yoga Alliance.
                  (200 horas de formación con los mejores profesores de Sydney - Australia. 300 horas de formación avanzada en Bali Indonesia con profesores de la India).
                  </p><p className="text-justify">Actualmente resido en Sydney-Australia un país
                  maravilloso en donde motivo a
                  las personas a que muevan su cuerpo especialmente a través del yoga o cualquier otro deporte; me enfoco en
                  demostrar que el bienestar físico y mental son parte
                  fundamental para tener calidad de vida, conección mente, cuerpo y alma.</p>
          </div>

          <div className="container marketing">

              <h3 className="display-7 rem-2 text-center">CLASES ONLINE</h3>

              <div className="row row-cols-1 row-cols-lg-3 g-4">

                  <div className="col">
                      <a href="/groups-online">
                          <div className="card h-100 text-center">
                              <img src={cardGroupsOnline} className="card-img-top" alt="card groups online"/>
                                  <div className="card-body">
                                      <p  className="card-title">CLASES GRUPALES ONLINE</p>
                                      <p className="card-text">Clases de Vinyasa Yoga dinámicas para grupos pequeños.</p>
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

                  <div className="col">
                      <a href="/workshop-online">
                          <div className="card h-100 text-center">
                              <img src={cardWorkshopOnline} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  <p className="card-title">WORKSHOP - POSTURAS ONLINE</p>
                                  <p className="card-text">Aprende la técnica de como llegar a la postura de Yoga que
                                      deseas.</p>
                              </div>
                          </div>
                      </a>
                  </div>

              </div>

              <br/>

              <h3 className="display-7 rem-2 text-center">CLASES AL AIRE LIBRE O EN CASA</h3>

              <div className="row row-cols-1 row-cols-lg-3 g-4">
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

                  <div className="col">
                      <a href="/workshop-in-person">
                          <div className="card h-100 text-center">
                              <img src={cardWorkshopInPerson} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  <p className="card-title">WORKSHOP - POSTURAS</p>
                                  <p className="card-text">Aprende la técnica de como llegar a la postura de Yoga que
                                      deseas.</p>
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
