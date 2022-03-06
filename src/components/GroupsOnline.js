import cardGroupsOnline from '../images/groups-online/card-groups-online.jpg';


import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import PreparationItems from "./classDetails/PreparationItems";
import {ClassType} from "../model/ClassType";

function GroupsOnline() {
  return (
      <main role="main">

          <DetailsHeading text='CLASES GRUPALES ONLINE'/>

          <div className="container details">

              <div className="row">
                  <div className="col">
                      <p className="text-justify">Aquí encontrarás clases de Vinyasa Yoga dinámicas para grupos pequeños
                          nivel principiante a intermedio, son clases de 45 a 50 minutos en donde me aseguro que los
                          estudiantes avancen en la práctica, corrigiendo posturas y explicando en detalle cada una de
                          las asanas, finalizamos con una meditación corta para terminar de relajar el cuerpo y la
                          mente.</p>
                  </div>
              </div>

              <div className="row rem-2 align-items-end">
                  <div className="col-md-5">

                      <h3>CLASES GRUPALES ONLINE</h3>
                      <p>Serán grupos de hasta máximo 15 personas.</p>

                      <h3>HORARIO</h3>
                      <ul>
                          <li>
                              <p><b>NIVEL 1:</b> Lunes, Martes, Miercoles y Jueves <b>6:30 pm</b></p>
                          </li>
                          <li>
                              <p><b>NIVEL 2:</b> Lunes, Martes, Miercoles y Jueves <b>7:30 pm</b></p>
                              <p><b>NIVEL 2:</b> Martes y Miercoles <b>6:00 am</b></p>
                          </li>
                      </ul>
                      <p><i>Luego que termine el verano las clases serán a las 6:00 y 7:00 pm</i></p>
                      <p><i>Si estas en las clases de Nivel 1 y quieres experimentar uniéndote a alguna clase
                          de Nivel 2 tendrás la opción de participar en ella.</i></p>
                      <p><i>Si estás en las clases de Nivel 2 y deseas unirte a alguna clase de Nivel 1 porque
                          deseas una clase un poco más sencilla, tendrás la opción de unirte a ella.</i></p>
                  </div>

                  <div className="col-md-1"/>

                  <div className="col-md-6">
                      <img src={cardGroupsOnline} alt="Online group class"/>
                  </div>
              </div>

              <div className="row">
                  <div className="col">
                      <h3 className="heading-with-note">PRECIO</h3>
                      <ul>
                          <li>
                              <p>VALOR DE LA MEMBRESÍA <b>2 CLASES A LA SEMANA:</b></p>
                              <p>PAQUETE DE <b>4 SEMANAS $99 AUD.</b> Puedes ingresar a 2 clases cualquier día de la
                                  semana, lunes, martes, miercoles
                                  o jueves. Tu decides los dias.</p>
                          </li>
                          <li>
                              <p>VALOR DE LA MEMBRESÍA <b>3 CLASES A LA SEMANA:</b></p>
                              <p>PAQUETE DE <b>4 SEMANAS $135 AUD.</b> Puedes ingresar a 3 clases cualquier día de la
                                  semana, lunes, martes, miercoles
                                  o jueves. Tu decides los dias.</p>
                          </li>
                          <li>
                              <p>VALOR DE LAS CLASES <b>SIN MEMBRESÍA:</b></p>
                              <p><b>$15 AUD por clase</b>, Pago Anticipado.</p>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="row">
                  <div className="col-md-6">
                      <PreparationItems preparationItems={[
                          'Preferiblemente encuentra un espacio amplio y cómodo en donde puedas moverte durante la práctica.',
                          'Debes realizar el pago por anticipado para separar tu cupo.',
                          'Es recomendable utilizar el portátil para que la imagen sea más amplia, si lo puedes conectar al TV estaría perfecto.',
                          'Si tu conexión a wifi no es muy estable, te recomiendo conectar el portátil a tus datos a través de hotspot y así evitar que se congele la imaginen o te desconectes de la video llamada.',
                          'Ser puntuales es muy importante, así evitan perderse parte de la clase.',
                          'Preferible recogerse el cabello, aunque si les gusta suelto esta perfecto. (Chicas)',
                          'Ten una botellita de agua para hidratarte.',
                          'Si no puedes asistir a la clase debes informar con 3 horas de anticipación para poder re-agendarla durante la semana según disponibilidad.',
                      ]}/>
                  </div>

                  <div className="col-md-1"/>

                  <div className="col-md-5">
                      <ContactForm yogaClassType={ClassType.GroupsOnline}/>
                  </div>
              </div>


          </div>

          <hr className="divider"/>
          <Footer/>
      </main>
  );
}

export default GroupsOnline;
