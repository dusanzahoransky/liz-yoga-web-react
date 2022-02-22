import inPerson1 from '../images/card-groups-in-person-1.jpg';
import inPerson2 from '../images/card-groups-in-person-2.jpg';
import inPerson3 from '../images/card-groups-in-person-3.jpg';

import Footer from "./Footer";

function GroupsInPerson() {
  return (
      <main role="main">

          <h1 className="details-heading">CLASES GRUPALES PERSONALIZADAS OUTDOOR</h1>

          <div className="container details">

              <div className="row">
                  <div className="col">
                      <p className="text-justify">Decidiremos con anticipación el sitio de encuentro, podrá hacerse al
                          aire libre en parques centrales en la city –Sydney Australia, o en las playas de Eastern
                          suburs (Coogee, Maroubra, Bronte, Tamarama y alrededores).</p>
                  </div>
              </div>

              <div className="row rem-2">

                  <div className="col-md-12">
                      <div id="myCarousel" className="carousel slide no-margin" data-bs-ride="carousel">
                          <div className="carousel-inner">
                              <div className="carousel-item active">
                                  <picture>
                                      <img src={inPerson1}
                                           alt="In person group class picture"/>
                                  </picture>
                              </div>
                              <div className="carousel-item">
                                  <picture>
                                      <img src={inPerson2}
                                           alt="In person group class picture"/>
                                  </picture>
                              </div>
                              <div className="carousel-item">
                                  <picture>
                                      <img src={inPerson3}
                                           alt="In person group class picture"/>
                                  </picture>
                              </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                                  data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"/>
                              <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                                  data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"/>
                              <span className="visually-hidden">Next</span>
                          </button>
                      </div>
                  </div>
              </div>

              <div className="row">

                  <div className="col-md-6">

                      <h3>HORARIO</h3>
                      {/*<p>Sabádo 19 de Febrero, 9:30 a.m.</p>*/}
                      <p>Por Definir.</p>
                      <h3>LUGAR</h3>
                      {/*<p>Coogee Beach, Sydney</p>*/}
                      <h3>PRECIO</h3>
                      <p>$15 AUD Clase</p>

                      <h3>Aspectos a Tener en cuenta</h3>
                      <ul className="class-preparation-list text-justify">
                          <li>Debes realizar el pago por anticipado para separar tu cupo.</li>

                          <li>Ser puntuales es muy importante, la clase inicia a la hora programada, asi que, te
                              recomiendo puntualidad para que no te pierdas ninguna parte de la clase.
                          </li>

                          <li>Si no puedes asistir a la clase deberás informar 24 horas de antelación para la devolución
                              del dinero, de lo contrario tendrás la opción de asistir a una clase online.
                          </li>

                          <li>Es importante que tengas una botellita de agua para que te hidrates.</li>
                      </ul>
                  </div>
                  <div className="col-md-1"/>
                  <div className="col-md-5">
                      <h2>Contáctame</h2>
                      <form>
                          <div className="form-group">
                              <label htmlFor="name">Nombre</label>
                              <input type="text" className="form-control" name="name" id="name"
                                     aria-describedby="nameHelp" placeholder="Tu nombre"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" className="form-control" name="email" id="email"
                                     aria-describedby="emailHelp" placeholder="Tu email"/>
                          </div>
                          <div className="form-group">
                              <label className="required" htmlFor="mobile">Celular</label>
                              <input type="text" className="form-control" name="mobile" id="mobile" required
                                     aria-describedby="mobileHelp" placeholder="Tu número de Celular"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="preferredTime">Horario Preferido</label>
                              <input type="text" className="form-control" name="preferredTime" id="preferredTime"
                                     aria-describedby="preferredTimeHelp" placeholder="Hora preferida de clase"/>
                          </div>
                          <div className="form-group">
                              <label className="required" htmlFor="enquiry">Pregunta sobre la Clase</label>
                              <textarea className="form-control" name="enquiry" id="enquiry" required rows="6"
    placeholder="Tu pregunta o consulta de reserva"/>
                          </div>
                          <button type="submit" className="btn btn-primary">Enviar</button>
                      </form>
                  </div>

              </div>

          </div>

          <hr className="divider"/>
          <Footer/>
      </main>
  );
}

export default GroupsInPerson;
