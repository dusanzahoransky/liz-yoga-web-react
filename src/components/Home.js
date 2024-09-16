import cover2 from '../images/home/cover-2-large-progressive.jpg';
import cover2portrait from '../images/home/cover-2-portrait-progressive.jpg';
import coverRetreatMarch2025 from '../images/home/cover-retreat-march-2025.jpg';
import coverRetreatMarch2025Portrait from '../images/home/cover-retreat-march-2025-portrait.jpg';
import cardPrivateOnline from '../images/home/card-private-online.jpg';
import cardWorkshopInPerson from '../images/home/card-workshop-in-person.jpg';
import cardGroupsInPerson from '../images/home/card-groups-in-person.jpg';
import cardPrivateInPerson from '../images/home/card-private-in-person.jpg';
import cardRetreatBali from '../images/home/card-retreat-bali-sept-2024.jpg';
import Footer from "./Footer";

function Home() {
  return (
      <main role="main">

          <div id="home-page-carousel" className="carousel slide container" data-bs-ride="carousel">

              <div className="carousel-inner">

                  <div className="carousel-item active" data-bs-interval="6000">
                      <a href="/retreat-bali-march-25">
                      <picture>
                          <source srcSet={coverRetreatMarch2025Portrait}
    media="(max-width: 800px) and (orientation: portrait)"/>
                          <img src={coverRetreatMarch2025} alt="Retreat"/>
                      </picture>
                      <div className="container">
                          <div className="carousel-caption carousel-caption-light">
                              <h2>RETIRO DE YOGA Y BIENESTAR</h2>
                              <h3>Bali Marzo 2025</h3>
                          </div>
                      </div>
                      </a>
                  </div>

                  <div className="carousel-item" data-bs-interval="3000">
                      <a href="/groups-in-person">
                          <picture>
                              <source srcSet={cover2portrait}
                                      media="(max-width: 800px) and (orientation: portrait)"/>
                              <img src={cover2} alt="Private clases"/>
                          </picture>
                          <div className="container">
                              <div className="carousel-caption carousel-caption-light">
                                  <h2>YOGA CLASES GRUPALES</h2>
                              </div>
                          </div>
                      </a>
                  </div>

                  {/*<div className="carousel-item" data-bs-interval="3000">*/}
                  {/*    <a href="/women-day">*/}
                  {/*        <picture>*/}
                  {/*            <source srcSet={cover5portrait}*/}
                  {/*                    media="(max-width: 800px) and (orientation: portrait)"/>*/}
                  {/*            <img src={cover5} alt="Private clases"/>*/}
                  {/*        </picture>*/}

                  {/*        <div className="container">*/}
                  {/*            <div className="carousel-caption carousel-caption-light">*/}
                  {/*                <h2>CIRCULO DE MUJERES</h2>*/}
                  {/*                <h3>Marzo 10</h3>*/}
                  {/*            </div>*/}
                  {/*        </div>*/}
                  {/*    </a>*/}
                  {/*</div>*/}

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
              <h1 className="display-6 rem-2">YOGA CON LIZ <span className="color-secondary">NEIRA</span></h1>
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

              <h3 className="display-7 rem-2 text-center">RETIRO DE YOGA Y BIENESTAR</h3>

              <div className="row row-cols-1">
                  <div className="col-3"></div>
                  <div className="col-md">
                      <a href="/retreat-bali-march-25">
                          <div className="card h-100 text-center">
                              <img src={cardRetreatBali} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  {/*<div className="sold-out-stamp-small-parent">*/}
                                  <div>
                                      {/*<div className="sold-out-stamp-small">*/}
                                      <div>
                                          <p href="/groups-in-person" className="card-title">BALI MARZO 2025</p>
                                      </div>
                                  </div>

                                  <p className="card-text">Únete a nuestro Retiro de Yoga y Bienestar en el paraiso de
                                      Bali, un espacio para conectar e ir mucho más profundo con tu verdadera
                                      escencia.</p>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className="col-3"></div>
              </div>

              <h3 className="display-7 rem-2 text-center">CLASES</h3>

              <div className="row  row-cols-1 row-cols-md-2">
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
