import inPerson1 from '../images/groups-in-person/card-groups-in-person-1.jpg';
import inPerson2 from '../images/groups-in-person/card-groups-in-person-2.jpg';
import inPerson3 from '../images/groups-in-person/card-groups-in-person-3.jpg';
import inPerson4 from '../images/groups-in-person/card-groups-in-person-4.jpg';
import inPerson5 from '../images/groups-in-person/card-groups-in-person-5.jpg';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import ClassInfo from "./classDetails/ClassInfo";
import PreparationItems from "./classDetails/PreparationItems";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';

function GroupsInPerson() {

    const images = [
       {
            original: inPerson2,
            thumbnail: inPerson2,
        },
        {
            original: inPerson1,
            thumbnail: inPerson1,
        },
        {
            original: inPerson3,
            thumbnail: inPerson3,
        },
        {
            original: inPerson4,
            thumbnail: inPerson4,
        },
        {
            original: inPerson5,
            thumbnail: inPerson5,
        },
    ]

    return (
        <main role="main">

            <DetailsHeading text='CLASES GRUPALES PERSONALIZADAS OUTDOOR'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Decidiremos con anticipación el sitio de encuentro, podrá hacerse al
                            aire libre en parques centrales en la city – Sydney Australia, o en las playas de Eastern
                            suburs (Coogee, Maroubra, Bronte, Tamarama y alrededores).</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />
                </div>

                <div className="row">

                    <div className="col-md-6">
                        <ClassInfo hour='Por Definir.' place='Por Definir.' price='$15 AUD Clase'/>
                        {/*<ClassInfo hour='Sabádo 19 de Febrero, 9:30 a.m.' place='Coogee Beach, Sydney' price='$15 AUD Clase'/> */}
                        <PreparationItems preparationItems={[
                            'Debes realizar el pago por anticipado para separar tu cupo.',
                            'Ser puntuales es muy importante, la clase inicia a la hora programada, asi que, te recomiendo puntualidad para que no te pierdas ninguna parte de la clase.',
                            'Si no puedes asistir a la clase deberás informar 24 horas de antelación para la devolución del dinero, de lo contrario tendrás la opción de asistir a una clase online.',
                            'Es importante que tengas una botellita de agua para que te hidrates.'
                        ]}/>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-5">
                        <ContactForm yogaClassType='groups-in-person'/>
                    </div>

                </div>

            </div>

            <hr className="divider"/>
            <Footer/>
        </main>
    );
}

export default GroupsInPerson;
