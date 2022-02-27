import privateOnline from '../images/private-online/private-classes-progressive.jpeg';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import ClassInfo from "./classDetails/ClassInfo";
import PreparationItems from "./classDetails/PreparationItems";

function PrivateOnline() {
  return (
      <main role="main">

          <DetailsHeading text='CLASES PRIVADAS ONLINE'/>

          <div className="container details">

              <div className="row rem-2  align-items-end">
                  <div className="col-md-6">
                      <p className="text-justify">Aquí podrás reservar clases de Vinyasa Yoga dinámicas privadas solo
                          para ti, podrás elegir entre nivel principiante o intermedio, también tendrás la opción de
                          trabajar alguna postura en específico que quieras practicar, son clases de 45 a 50 minutos en
                          donde me aseguro que avances en la práctica, corrijo las posturas si es necesario y te explico
                          en detalle cada una de las asanas durante toda la clase, trabajaremos la respiración como base
                          fundamental durante la clase para que puedas conectarte contigo mismo/misma, finalizamos con
                          una meditación corta para terminar de relajar el cuerpo y la mente.</p>
                      <p>Una persona por clase.</p>
                      <ClassInfo hour='Acuerdo entre las partes'
                                 price='$40 AUD. Si reservas 3 clases tendrás un precio especial.'
                      />
                  </div>

                  <div className="col-md-1"/>

                  <div className="col-md-5">
                      <img src={privateOnline} alt="Online private class"
                           className="float-end"/>
                  </div>
              </div>


              <div className="row">
                  <div className="col-md-6">
                      <PreparationItems preparationItems={[
                          'Preferiblemente encuentra un espacio amplio y cómodo en donde puedas moverte durante la práctica.',
                          'Si no puedes asistir a la clase debes informar con 5 horas de anticipación para poder reagendarla.',
                          'Si la clase es relacionada con la Parada de Cabeza o Parada de Manos, te recomiendo tener una pared cerca que podamos utilizar para realizar algunas posturas, las cuales nos ayudaran a fortalecer los brazos y core antes de llegar a la postura deseada.',
                          'Es recomendable utilizar el portátil para que la imagen sea más amplia, si lo puedes conectar al TV estaría perfecto.',
                          'Si tu conexión a wifi no es muy estable, te recomiendo conectar el portátil a tus datos a través de hotspot y así evitar que se congele la imaginen o te desconectes de la videollamada.',
                          'Ser puntuales es muy importante, la clase empieza a la hora acordada.',
                          'Preferible recogerse el cabello, aunque si les gusta suelto está perfecto. (Chicas)',
                          'Ten una botellita de agua para hidratarte.',
                      ]}/>
                  </div>
                  <div className="col-md-1"/>
                  <div className="col-md-5">
                    <ContactForm yogaClassType='private-online'/>
                  </div>
              </div>

          </div>

          <hr className="divider"/>
          <Footer/>
      </main>
  );
}

export default PrivateOnline;
