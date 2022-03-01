import poses1 from '../images/workshop-online/poses-1-portrait.jpeg';
import poses2 from '../images/workshop-online/poses-2-portrait.jpg';
import poses3 from '../images/workshop-online/poses-3-portrait.jpg';
import poses4 from '../images/workshop-online/poses-4-portrait.jpg';
import poses5 from '../images/workshop-online/poses-5-portrait.jpg';
import poses6 from '../images/workshop-online/poses-6-portrait.jpg';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import CarouselImages from "./classDetails/CarouselImages";
import ClassInfo from "./classDetails/ClassInfo";
import PreparationItems from "./classDetails/PreparationItems";

function WorkshopOnline() {
  return (
      <main role="main">

          <DetailsHeading text='POSTURAS DE YOGA ONLINE EN GRUPO'/>

          <div className="container details">

              <div className="row class-description">
                  <div className="col-md-7">
                      <p className="text-justify">Será una clase enfocada a lograr la postura de yoga que desees, por
                          ejemplo, Sirsasana o Parada de Cabeza o Adho Mukha Vrksasana, Parada de Manos, por ejemplo. Tu
                          decides la postura y yo me encargaré de ofrecerte una clase dinámica en la cual tendrás las
                          herramientas necesarias para llegar a esa postura de yoga deseada.</p>

                      <p>Serán grupos máximos de 5 personas, tendrás que tener un espacio amplio y cómodo en donde puedas moverte durante la práctica.</p>
                      <ClassInfo hour='Por Definir.'
                                 price='$15 AUD'
                      />
                      <PreparationItems preparationItems={[
                          'Preferiblemente encuentra un espacio amplio y cómodo en donde puedas moverte durante la práctica.',
                          'Si la clase es relacionada con la Parada de Cabeza o Parada de Manos, te recomiendo tener una pared cerca que podamos utilizar para practicar posturas previas las cuales nos ayudaran a fortalecer los brazos y core antes de llegar a la postura deseada.',
                          'Es recomendable utilizar el portátil para que la imagen sea más amplia, si lo puedes conectar al TV estaría perfecto.',
                          'Si tu conexión a wifi no es muy estable, te recomiendo conectar el portátil a tus datos a través de hotspot y así evitar que se congele la imaginen o te desconectes de la videollamada.',
                          'Ser puntuales es muy importante, así evitan perderse parte de la clase.',
                          'Preferible recogerse el cabello, aunque si les gusta suelto está perfecto. (Chicas)',
                          'Ten una botellita de agua para hidratarte.',
                          'Por ser un grupo de 5 personas máximo en donde se garantiza tu cupo a la clase, no se realiza devolución del dinero si no puedes asistir.',
                      ]}/>
                  </div>
                  <div className="col-md-1"/>
                  <div className="col-md-4">
                      <CarouselImages carouselImages={[poses1, poses2, poses3, poses4, poses5, poses6]}/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-md-7">
                  <ContactForm yogaClassType='poses-online'/>
                  </div>
              </div>


          </div>

          <hr className="divider"/>
          <Footer/>
      </main>
  );
}

export default WorkshopOnline;
