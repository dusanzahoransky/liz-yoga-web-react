import retreat1 from '../images/retreat-bali-sept-24/card-reatreat-1.jpg';
import retreat2 from '../images/retreat-bali-sept-24/card-reatreat-2.jpg';
import retreat3 from '../images/retreat-bali-sept-24/card-reatreat-3.jpg';
import retreat4 from '../images/retreat-bali-sept-24/card-reatreat-4.jpg';
import retreat5 from '../images/retreat-bali-sept-24/card-reatreat-5.jpg';
import retreat1Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-1-thumb.jpg';
import retreat2Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-2-thumb.jpg';
import retreat3Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-3-thumb.jpg';
import retreat4Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-4-thumb.jpg';
import retreat5Thumbnail from '../images/retreat-bali-sept-24/card-reatreat-5-thumb.jpg';
import baliRetreatLocation from '../images/retreat-bali-sept-24/bali-retreat-location.jpg';
import groupClassLocationCentenial from '../images/groups-in-person/group-class-location-centenial.jpg';

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import DetailsHeading from "./classDetails/DetailsHeading";
import PreparationItems from "./classDetails/PreparationItems";

import ImageGallery from 'react-image-gallery';
import '../image-gallery.css';
import {ClassType} from "../model/ClassType";

function RetreatBaliSept2024() {

    const images = [

        {
            original: retreat2,
            thumbnail: retreat2Thumbnail,
        },       {
            original: retreat1,
            thumbnail: retreat1Thumbnail,
        },
        {
            original: retreat3,
            thumbnail: retreat3Thumbnail,
        },
        {
            original: retreat4,
            thumbnail: retreat4Thumbnail,
        },
        {
            original: retreat5,
            thumbnail: retreat5Thumbnail,
        },
    ]

    return (<>
        <main role="main" className="container">

            <DetailsHeading text='Yoga Retreat Bali September 2024'/>

            <div className="container details">

                <div className="row">
                    <div className="col">
                        <p className="text-justify">Clases Dinámicas de Vinyasa Yoga al
                            aire libre en parques centrales en la city – Sydney Australia, o en las playas de Eastern
                            suburs (Coogee, Maroubra, Bronte, Tamarama y alrededores).</p>
                    </div>
                </div>

                <div className="row rem-2">
                    <ImageGallery items={images} thumbnailPosition='bottom' autoPlay={false} />
                </div>

                <div className="row">

                    <div className="col-md-6">
                        <h3>Yoga al Amanecer</h3>
                        <div>
                            <a href="https://maps.app.goo.gl/4RKv4Be8Sg9sqneC7" target='_blank' rel="noreferrer">
                                <img className="classLocationMap"
                                     alt="map location Coogee beach" height="auto" src={baliRetreatLocation}></img>
                            </a>
                        </div>
                        <p>Hora: 5:50 am y 8:00 am</p>
                        <p>Lugar: Coogee Beach.</p>

                        <p className="text-justify">Sitio de encuentro: Dolphins Point. Llegas a Coogee Pavilion y
                            caminas unos 200 metros hacia
                            arriba de la colina. (haz click el mapa para que te muestre el lugar exacto de encuentro).</p>
                        <p>Si en algún caso cambiamos la locación, será justo a unos pocos metros de este lugar, sigues
                            caminando hacia la izquierda y nos encontrarás.</p>


                        <h3>Valor</h3>
                        <p>$23 AUD.</p>
                        <p className="text-justify">Realiza la transferencia de la clase al número celular 0413147237 para
                            separar tu espacio, se reciben
                            confirmaciones y pago para la clase entre semana al atardecer hasta el Martes 6 pm y la clase de la playa hasta el viernes a las 2 pm.</p>
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
                        <ContactForm yogaClassType={ClassType.RetreatBaliSept2024}/>
                    </div>

                </div>

            </div>

        </main>

        <br/>

        <Footer/>
    </>);
}

export default RetreatBaliSept2024;
