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

import logoYoutube from '../images/home/logo-picture-progressive.jpeg';
import logoInstagram from '../images/home/instagram-logo-progressive.jpeg';
import Instagram1 from '../images/home/Instagram1.jpg';
import Instagram2 from '../images/home/Instagram2.jpg';
import Instagram3 from '../images/home/Instagram3.jpg';
import Footer from "./Footer";
import InstagramPost from "./socialMedia/InstagramPost";
import YoutubeEmbed from "./socialMedia/YoutubeEmbed";

function Home() {
  return (
      <main role="main">

          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

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
                          <div className="carousel-caption light">
                              <h1 className="display-6">YOGA WORKSHOP</h1>
                          </div>
                      </div>
                  </div>

              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"/>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"/>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>


          <div className="container introduction">
              <h1 className="display-5 rem-2">YOGA CON LIZ NEIRA</h1>
              <p className="text-justify">Desde hace 5 años el Yoga atrajo mi atención y descubrí un mundo fantástico en
                  donde
                  descubrí los beneficios físicos, mentales y espirituales que esta extraordinaria disciplina
                  ofrece.</p>
              <p className="text-justify">Desde hace 4 años me he especializado en Vinyasa Yoga, técnica enfocada en la
                  respiración, en los movimientos controlados por medio de asanas/posturas, estiramiento del cuerpo y
                  meditación.</p>
              <p className="text-justify">Profesora de yoga certificada, actualmente resido en Sydney-Australia un país
                  maravilloso en donde intento motivar a
                  las personas a que muevan su cuerpo a través de esta disciplina o cualquier otro deporte; me enfoco en
                  demostrar que el bienestar físico y mental son parte
                  fundamental para tener calidad de vida.</p>
          </div>

          <div className="container marketing">

              <h3 className="display-7 rem-2 text-center">CLASES ONLINE</h3>

              <div className="row row-cols-1 row-cols-lg-3 g-4">

                  <div className="col">
                      <div className="card h-100 text-center">
                          <img src={cardGroupsOnline} className="card-img-top" alt="card groups online"/>
                              <div className="card-body">
                                  <a href="/groups-online" className="btn btn-primary">CLASES GRUPALES ONLINE</a>

                                  <p className="card-text">Clases de Vinyasa Yoga dinámicas para grupos pequeños.</p>
                              </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card h-100 text-center">
                          <img src={cardPrivateOnline} className="card-img-top" alt="card private online"/>
                              <div className="card-body">
                                  <a href="/private-online" className="btn btn-primary">CLASES PRIVADAS ONLINE</a>

                                  <p className="card-text">Clases de Vinyasa Yoga dinámicas privadas solo para ti.</p>
                              </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card h-100 text-center">
                          <img src={cardWorkshopOnline} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <a href="/workshop-online" className="btn btn-primary">WORKSHOP - POSTURAS ONLINE</a>
                              <p className="card-text">Aprende la técnica de como llegar a la postura de Yoga que
                                  deseas.</p>
                          </div>
                      </div>
                  </div>

              </div>

              <br/>

              <h3 className="display-7 rem-2 text-center">CLASES AL AIRE LIBRE O EN CASA</h3>

              <div className="row row-cols-1 row-cols-lg-3 g-4">
                  <div className="col">
                      <div className="card h-100 text-center">
                          <img src={cardGroupsInPerson} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  <a href="/groups-in-person" className="btn btn-primary">CLASES GRUPALES</a>
                                  <p className="card-text">Práctica de yoga grupal disfrutando los hermosos parques y
                                      playas de Sydney.</p>
                              </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card h-100 text-center">
                          <img src={cardPrivateInPerson} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  <a href="/private-in-person" className="btn btn-primary">CLASES PRIVADAS</a>
                                  <p className="card-text">Clase dirigida exclusivamente para ti teniendo en cuenta tus
                                      necesidades y requerimientos.</p>
                              </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card h-100 text-center">
                          <img src={cardWorkshopInPerson} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <a href="/workshop-in-person" className="btn btn-primary">WORKSHOP - POSTURAS</a>
                              <p className="card-text">Aprende la técnica de como llegar a la postura de Yoga que
                                  deseas.</p>
                          </div>
                      </div>
                  </div>

              </div>

              <br/><br/><br/>

              <div className="row d-flex align-items-center">
                  <div className="col-lg-3 text-center ">
                      <p>
                      <a href="https://www.youtube.com/channel/UC20D0ArlDwjfLkpaW07pGKw/featured" target="_blank"
                         rel="noopener noreferrer">
                          <img className="rounded-circle"
                               src={logoYoutube}
                               alt="Youtube channel logo" width="140" height="140"/></a>
                      </p>
                      <p><a className="btn btn-outline-primary"
                            href="https://www.youtube.com/channel/UC20D0ArlDwjfLkpaW07pGKw/featured" target="_blank"
                            rel="noopener noreferrer">Sígueme en Youtube</a></p>
                  </div>
                  <div className="col-lg-9 text-center">
                      <h3 className="display-7 rem-2">VISITA MI CANAL DE YOUTUBE</h3>
                      <p className="text-justify">Aquí podrás encontrar clases cortas y muy variadas de Vinyasa Yoga nivel
                          principiante e intermedio.</p>
                      <p className="text-justify">Aprenderás a tener una respiración consciente, a mover tu cuerpo y relajar
                          tu mente a través de diferentes asanas/posturas y meditación.</p>
                      <p className="text-justify">Juntos aprenderemos a descubrir y practicar este mundo maravilloso del
                          YOGA.</p>
                  </div>
              </div>

              <br/>

              <div className="row">
                  <div className="col-lg-12 video-container">
                    <YoutubeEmbed postUrl="https://www.youtube.com/embed/ENWbwYkibC0?start=35&loop=1&mute=1&playlist=ENWbwYkibC0&autoplay=0"/>
                  </div>
              </div>

              <br/><br/><br/>

              <div className="row d-flex align-items-center">
                  <div className="col-lg-3 text-center ">
                      <p>
                          <a href="https://instagram.com/lizneirar" target="_blank" rel="noopener noreferrer"><img
                              className="rounded-circle" src={logoInstagram}
                              alt="Instagram profile logo" width="140" height="140"/>
                          </a>
                      </p>
                      <p><a className="btn btn-outline-primary" href="https://instagram.com/lizneirar" target="_blank"
                            rel="noopener noreferrer">Sígueme en Instagram</a></p>
                  </div>
                  <div className="col-lg-9">
                      <h3 className="display-7 rem-2 text-center">SÍGUEME EN INSTAGRAM</h3>
                      <p className="text-justify">Aquí podrás encontrar mucho más de mi vida cotidiana con fotos y
                          videos inspirados en diferentes posturas de yoga, secuencias, retos y como inspiro a las
                          personas a mover el cuerpo y tranquilizar la mente.</p>
                      <p className="text-justify">Es un espacio más cercano para interactuar con aquellos que quieren
                          explorar y conocer mucho más de cerca esta fantástica disciplina. Namaste.</p>
                  </div>
              </div>

              <br/>

              <div className="row">

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/p/CZpuTaqBaGN/?" errorImage={Instagram3}/>
                  </div>

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/p/CbqRLvRBtx-/?" errorImage={Instagram1}/>
                  </div>

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/tv/CVJkErFjmBW/?" errorImage={Instagram2}/>
                  </div>
              </div>


              <div className="row">

                  <div className="col-lg-6">
                      <InstagramPost postUrl="https://www.instagram.com/p/CbWBi3GPKIa/?" errorImage={Instagram3}/>
                  </div>

                  <div className="col-lg-6">
                      <InstagramPost postUrl="https://www.instagram.com/p/CWb0BJkBIyt/?" errorImage={Instagram3}/>
                  </div>

              </div>

              <div className="row">
                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/p/CfjS3gdIRZO/?" errorImage={Instagram3}/>
                  </div>

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/p/CZP-t_EBzRs/?" errorImage={Instagram1}/>
                  </div>

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/p/CfACvMUjMXn/?" errorImage={Instagram2}/>
                  </div>
              </div>


          </div>

          <Footer/>
      </main>
  );
}

export default Home;
