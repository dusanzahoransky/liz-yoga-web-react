import workshop1 from '../images/workshop-in-person/card-workshop-in-person-1.jpg';
import workshop2 from '../images/workshop-in-person/card-workshop-in-person-2.jpg';
import workshop3 from '../images/workshop-in-person/card-workshop-in-person-3.jpg';
import workshop4 from '../images/workshop-in-person/card-workshop-in-person-4.jpg';
import workshop5 from '../images/workshop-in-person/card-workshop-in-person-5.jpg';
import workshop6 from '../images/workshop-in-person/card-workshop-in-person-6.jpg';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import CarouselImages from "./classDetails/CarouselImages";
import ClassInfo from "./classDetails/ClassInfo";
import PreparationItems from "./classDetails/PreparationItems";
import ImageGallery from "react-image-gallery";
import {ClassType} from "../model/ClassType";


function WorkshopInPerson() {

    const imagesHorizontal = [
        {
            original: workshop2,
            thumbnail: workshop2,
        },
        {
            original: workshop1,
            thumbnail: workshop1,
        },
        {
            original: workshop3,
            thumbnail: workshop3,
        },
    ]
    const imagesVertical = [
        {
            original: workshop4,
            thumbnail: workshop4,
        },
        {
            original: workshop5,
            thumbnail: workshop5,
        },
        {
            original: workshop6,
            thumbnail: workshop6,
        },
    ]

    return (
        <main role="main">

            <DetailsHeading text='WORKSHOP AL AIRE LIBRE'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <ImageGallery items={imagesHorizontal} thumbnailPosition='bottom' autoPlay={false} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Ser?? un workshop enfocado a lograr una postura especifica, por
                            ejemplo, Sirsasana o Parada de Cabeza o Adho Mukha Vrksasana, Parada de Manos, entre otras.
                            En esta sesi??n aprender??s la t??cnica de como llegar a la postura mediante la demostraci??n y explicaci??n paso a paso de cada movimiento para asegurar una pr??ctica segura.</p>
                        <p>Decidiremos con anticipaci??n el sitio de encuentro, podr?? hacerse al
                            aire libre en parques centrales en la city ??? Sydney Australia, o en las playas de Eastern
                            suburs (Coogee, Maroubra, Bronte, Tamarama y alrededores).</p>
                        <p>Ser??n grupos de m??ximo de 7 personas.</p>
                    </div>
                </div>

                <div className="row class-description">
                    <div className="col-md-5">
                        <ClassInfo hour='Por Definir.'
                                   place='Por Definir.'
                                   price='$25 AUD'
                        />
                        <PreparationItems preparationItems={[
                            'Debes realizar el pago por anticipado para separar tu cupo.',
                            'Ser puntuales es muy importante, el Workshop inicia a la hora programada, asi que, te recomiendo puntualidad por respeto a los dem??s participantes.',
                            'Si no puedes asistir al Workshop deber??s informar 24 horas de antelaci??n para la devoluci??n del dinero, de lo contrario tendr??s la opci??n de asistir a una clase online.',
                            'Es importante que tengas una botellita de agua para que te hidrates.'
                        ]}/>
                    </div>
                    <div className="col-md-7">
                        <ImageGallery items={imagesVertical} thumbnailPosition='right' autoPlay={true} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <ContactForm yogaClassType={ClassType.WorkshopInPerson}/>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-5">

                    </div>
                </div>


            </div>

            <hr className="divider"/>
            <Footer/>
        </main>
    );
}

export default WorkshopInPerson;
