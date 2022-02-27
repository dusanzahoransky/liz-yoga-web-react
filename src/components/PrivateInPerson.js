import inPerson1 from '../images/private-in-person/card-private-in-person.jpg';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import ClassInfo from "./classDetails/ClassInfo";
import PreparationItems from "./classDetails/PreparationItems";

function PrivateInPerson() {
  return (
      <main role="main">

          <DetailsHeading text='CLASES PRIVADAS PERSONALIZADAS OUTDOOR O EN CASA'/>

          <div className="container details">

              <div className="row">
                  <div className="col">
                      <p className="text-justify">Decidiremos con anticipación el sitio de encuentro, podrá hacerse al
                          aire libre en parques centrales en la city –Sydney Australia, o en las playas de Eastern
                          suburs (Coogee, Maroubra, Bronte, Tamarama y alrededores) o si lo prefieres podrá programarse
                          desde tu casa si vives en un lugar central en Sydney.</p>
                  </div>
              </div>

              <div className="row rem-2">

              </div>

              <div className="row">

                  <div className="col-md-6">
                      <p>Una persona máximo.</p>
                      <ClassInfo hour='Por Definir.'
                                 place='Por Definir.'
                                 price='Dependiendo del lugar y del dia de la semana el precio estará en un rango de $50 y $70 AUD. Si reservas 3 clases tendrás un precio especial'
                                 />
                  </div>
                  <div className="col-md-1"/>
                  <div className="col-md-5">
                      <img src={inPerson1} alt="Online group class"
                           className="float-end"/>
                  </div>

                  <div className="row">
                      <div className="col-md-6">
                             <PreparationItems preparationItems={[
                              'Por respeto al tiempo de las dos partes, ser puntuales es muy importante. Se acepta un retraso de 10 minutos, si el retraso es mayor se contará el tiempo desde la hora pactada de la clase.',
                              'Debes realizar el pago por anticipado para separar tu cupo.',
                              'Si no puedes asistir a la clase se debe informar con 24 horas de antelación para poder reagendarla.',
                              'Es importante que tengas una botellita de agua para que te hidrates.'
                          ]}/>
                      </div>

                      <div className="col-md-1"/>
                      <div className="col-md-5">
                          <ContactForm yogaClassType='private-in-person'/>
                      </div>
                  </div>

              </div>

          </div>

          <hr className="divider"/>
          <Footer/>
      </main>
  );
}

export default PrivateInPerson;
