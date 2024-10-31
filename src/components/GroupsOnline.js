import cardGroupsOnline from '../images/groups-online/card-groups-online.jpg';


import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import PreparationItems from "./classDetails/PreparationItems";
import {ClassType} from "../model/ClassType";

function GroupsOnline() {
  return (<>
      <main role="main" className="container">

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
                  <div className="col-md-6">

                      <h3>Clases Grupales Online</h3>
                      <p>Serán grupos de hasta máximo 15 personas.</p>

                      <h3>Cuando?</h3>
                      <p>Este Jueves 24 de Octubre de 7 pm (hora Sydney) hasta las 8:30 pm</p>

                      <h3>Valor</h3>
                      <p>Sesión Gratuita</p>
                      <p>Ingresa a la sesión con este link <a className="call-link" href="https://calendar.app.google/rwEN3NioCvXFfGvn9">Clase Gratuita de Yoga y Charla Retiro de Bienestar Bali</a></p>
                      {/*<p>$21 AUD.</p>*/}
                      {/*<p className="text-justify">Realiza la transferencia de la clase al número celular 0413147237*/}
                      {/*    para separar tu espacio, se reciben*/}
                      {/*    confirmaciones y pago para la clase hasta el Miercoles.</p>*/}
                  </div>

                  <div className="col-md-1"/>

                  <div className="col-md-5">
                      <img src={cardGroupsOnline} alt="Online group class"/>
                  </div>
              </div>

              {/*<div className="row">*/}
              {/*    <div className="col">*/}
              {/*        <h3 className="heading-with-note">PRECIO</h3>*/}
              {/*        <p><b>$15 AUD por clase</b>, Pago Anticipado.</p>*/}
              {/*    </div>*/}
              {/*</div>*/}

              <div className="row">
                  <div className="col-md-6">
                      <PreparationItems preparationItems={[
                          'Preferiblemente encuentra un espacio amplio y cómodo en donde puedas moverte durante la práctica.',
                          // 'Debes realizar el pago por anticipado para separar tu cupo.',
                          'Es recomendable utilizar el portátil para que la imagen sea más amplia, si lo puedes conectar al TV estaría perfecto.',
                          'Si tu conexión a wifi no es muy estable, te recomiendo conectar el portátil a tus datos a través de hotspot y así evitar que se congele la imaginen o te desconectes de la video llamada.',
                          'Ser puntuales es muy importante, así evitan perderse parte de la clase.',
                          'Preferible recogerse el cabello, aunque si les gusta suelto esta perfecto. (Chicas)',
                          'Ten una botellita de agua para hidratarte.',
                          // 'Luego de confirmada la clase no se hace devolución del dinero, puedes aplazar la clase solo una vez.',
                      ]}/>
                  </div>

                  <div className="col-md-1"/>

                  <div className="col-md-5">
                      <ContactForm yogaClassType={ClassType.GroupsOnline}/>
                  </div>
              </div>


          </div>

      </main>

      <br/>

      <Footer/>
  </>);
}

export default GroupsOnline;
