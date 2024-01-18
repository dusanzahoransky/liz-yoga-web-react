import inPerson1 from '../images/groups-in-person/card-groups-in-person-1.jpg';
import inPerson2 from '../images/groups-in-person/card-groups-in-person-2.jpg';
import inPerson3 from '../images/groups-in-person/card-groups-in-person-3.jpg';
import inPerson4 from '../images/groups-in-person/card-groups-in-person-4.jpg';
import inPerson5 from '../images/groups-in-person/card-groups-in-person-5.jpg';
import inPerson6 from '../images/groups-in-person/card-groups-in-person-6.jpg';
import inPerson1Thumbnail from '../images/groups-in-person-thumbnail/card-groups-in-person-1.jpg';
import inPerson2Thumbnail from '../images/groups-in-person-thumbnail/card-groups-in-person-2.jpg';
import inPerson3Thumbnail from '../images/groups-in-person-thumbnail/card-groups-in-person-3.jpg';
import inPerson4Thumbnail from '../images/groups-in-person-thumbnail/card-groups-in-person-4.jpg';
import inPerson5Thumbnail from '../images/groups-in-person-thumbnail/card-groups-in-person-5.jpg';
import inPerson6Thumbnail from '../images/groups-in-person-thumbnail/card-groups-in-person-6.jpg';
import groupClassLocation from '../images/groups-in-person/group-class-location.png';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import ClassInfo from "./classDetails/ClassInfo";
import PreparationItems from "./classDetails/PreparationItems";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";

function GroupsInPerson() {

    const images = [
       {
            original: inPerson2,
            thumbnail: inPerson2Thumbnail,
        },
        {
            original: inPerson1,
            thumbnail: inPerson1Thumbnail,
        },
        {
            original: inPerson3,
            thumbnail: inPerson3Thumbnail,
        },
        {
            original: inPerson4,
            thumbnail: inPerson4Thumbnail,
        },
        {
            original: inPerson6,
            thumbnail: inPerson6Thumbnail,
        },
        {
            original: inPerson5,
            thumbnail: inPerson5Thumbnail,
        },
    ]

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='CLASES GRUPALES PERSONALIZADAS OUTDOOR'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Clases Dinámicas de Vinyasa Yoga al
                            aire libre en parques centrales en la city – Sydney Australia, o en las playas de Eastern
                            suburs (Coogee, Maroubra, Bronte, Tamarama y alrededores).</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={true} />
                </div>

                <div className="row">

                    <div className="col-md-6">
                        <h3>Lugar</h3>
                        <p>Coogee Beach.</p>
                        <div>
                            <a href="https://maps.app.goo.gl/nNqTMuVW8QgsgqVe6" target='_blank'>
                                <img style={{ marginLeft: '2rem', height: 'auto', maxWidth: '12rem', float: 'right'}} height="auto"  src={groupClassLocation}></img>
                            </a>
                        </div>
                        <p>Sitio de encuentro: Dolphins Point. Llegas a Coogee Pavilion y caminas unos 200 metros hacia
                            arriba de la colina.</p>
                        <p>Si en algún caso cambiamos la locación, será justo a unos pocos metros de este lugar, sigues
                            caminando hacia la izquierda y nos encontrarás.</p>

                        <h3>Hora</h3>
                        <p>Yoga al Amanecer 5:50 am y 8:00 am</p>
                        <h3>Valor</h3>
                        <p>$23 AUD.</p>
                        <p>Realiza el pago de la clase al número celular 0413147237 para separar tu espacio, se reciben
                            confirmaciones hasta el dia Jueves.</p>
                        <PreparationItems preparationItems={[
                            'Ser puntuales es muy importante, la clase inicia a la hora programada, asi que, te recomiendo puntualidad para que no te pierdas ninguna parte de la clase.',
                            'Luego de confirmada tu asistencia no se hace devolución del dinero.',
                            'Es importante que tengas una botellita de agua para que te hidrates.',
                            'Lleva un mat de yoga o lo que se le parezca.',
                            'Bloqueador solar.',
                            'Una chaqueta o busito manga larga por si hace frio.',

                        ]}/>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-5">
                        <ContactForm yogaClassType={ClassType.GroupsInPerson}/>
                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default GroupsInPerson;
