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
                          nivel principiante a intermedio, son clases de 50 a 60 minutos en donde me aseguro que los
                          estudiantes avancen en la práctica, corrigiendo posturas y explicando en detalle cada una de
                          las asanas, finalizamos con una meditación corta para terminar de relajar el cuerpo y la
                          mente.</p>
                  </div>
              </div>

              <div className="row rem-2 align-items-end">
                  <div className="col-md-5">

                      <h3>CLASES GRUPALES ONLINE</h3>
                      <p>Serán grupos de hasta máximo 15 personas.</p>

                  </div>

                  <div className="col-md-1"/>

                  <div className="col-md-6">
                      <img src={cardGroupsOnline} alt="Online group class"/>
                  </div>
              </div>

              <div className="row">
                  <div className="col">
                      <h3 className="heading-with-note">PRECIO</h3>
                      <p><b>$15 AUD por clase</b>, Pago Anticipado.</p>
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
