import workshop1 from '../images/workshop-in-person/card-workshop-in-person-1.jpg';
import workshop2 from '../images/workshop-in-person/card-workshop-in-person-2.jpg';
import workshop3 from '../images/workshop-in-person/card-workshop-in-person-3.jpg';
import workshop4 from '../images/workshop-in-person/card-workshop-in-person-4.jpg';
import workshop5 from '../images/workshop-in-person/card-workshop-in-person-5.jpg';
import workshop6 from '../images/workshop-in-person/card-workshop-in-person-6.jpg';
import workshop1Thumbnail from '../images/workshop-in-person-thumbnail/card-workshop-in-person-1.jpg';
import workshop2Thumbnail from '../images/workshop-in-person-thumbnail/card-workshop-in-person-2.jpg';
import workshop3Thumbnail from '../images/workshop-in-person-thumbnail/card-workshop-in-person-3.jpg';
import workshop4Thumbnail from '../images/workshop-in-person-thumbnail/card-workshop-in-person-4.jpg';
import workshop5Thumbnail from '../images/workshop-in-person-thumbnail/card-workshop-in-person-5.jpg';
import workshop6Thumbnail from '../images/workshop-in-person-thumbnail/card-workshop-in-person-6.jpg';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import CarouselImages from "./classDetails/CarouselImages";
import ClassInfo from "./classDetails/ClassInfo";
import PreparationItems from "./classDetails/PreparationItems";
import ImageGallery from "react-image-gallery";
import {ClassType} from "../model/ClassType";


function WorkshopInPerson() {

    const imagesVertical = [
        {
            original: workshop4,
            thumbnail: workshop4Thumbnail,
        },
        {
            original: workshop5,
            thumbnail: workshop5Thumbnail,
        },
        {
            original: workshop6,
            thumbnail: workshop6Thumbnail,
        },
    ]

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='CELEBRA TUS FECHAS ESPECIALES'/>

            <div className="container details">

                <div className="row class-description">
                    <div className="col-md-6">
                        <p className="text-justify">Sesión Privada para que celebres tus fechas más especiales,
                            cumpleaños, día de la mujer, entre otros.</p>
                        <p>Decidiremos con anticipación el sitio de encuentro, podrá hacerse al
                            aire libre en parques centrales en la city – Sydney Australia, o en las playas de Eastern
                            suburs (Coogee, Maroubra, Bronte, Tamarama y alrededores).
                        </p>
                        <ClassInfo hour='Por Definir.'
                                   place='Por Definir.'
                                   price='$25 AUD'
                        />
                        <PreparationItems preparationItems={[
                            'Debes realizar el pago por anticipado para reservar tu espacio.',
                            'Ser puntuales es muy importante, la sesión inicia a la hora programada, asi que, te recomiendo puntualidad.',
                            'Luego de confirmada la sesión no se realiza la devolución del dinero.',
                            'Es importante que tengas una botellita de agua para que te hidrates.'
                        ]}/>
                    </div>
                    <div className="col-md-5">
                        <ImageGallery items={imagesVertical} thumbnailPosition='right' autoPlay={true}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <ContactForm yogaClassType={ClassType.WorkshopInPerson} hasHours='true'/>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-5">

                    </div>
                </div>


            </div>
        </main>

        <br/>

        <Footer/>
    </>);
}

export default WorkshopInPerson;
