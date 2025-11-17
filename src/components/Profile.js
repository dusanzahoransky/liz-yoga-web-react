import Footer from "./Footer";
import YoutubeEmbed from "./socialMedia/YoutubeEmbed";
import instagram from "../images/profile/instagram.jpg";

function Profile() {
    return (
        <main role="main">

            <div className="container marketing">

                <div className="row d-flex align-items-center">
                    <div className="col">
                        <h3 className="display-7 rem-2 text-center">SÍGUEME EN <a href="https://instagram.com/lizneirar"
                                                                                  target="_blank"
                                                                                  className="link-highlihted"
                                                                                  rel="noopener noreferrer">INSTAGRAM @lizneirar</a>
                        </h3>
                        <p className="text-justify">Aquí podrás encontrar mucho más de mi vida cotidiana con fotos y videos inspirados en diferentes posturas de yoga, secuencias,
                            retos y como inspiro a las personas a mover el cuerpo y tranquilizar la mente. Es un espacio más cercano para interactuar con aquellos que quieren
                            explorar y conocer mucho más de cerca esta fantástica disciplina. Namaste.</p>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col">
                        <center>
                            <a href="https://instagram.com/lizneirar" target="_blank">
                                <img src={instagram} alt="Online group class"/>
                            </a>
                        </center>
                    </div>
                </div>

                <br/><br/>

                <div className="row d-flex align-items-center">
                    <div className="col text-center">
                        <h3 className="display-7 rem-2">VISITA MI CANAL DE <a
                            href="https://www.youtube.com/channel/UC20D0ArlDwjfLkpaW07pGKw/featured" target="_blank"
                            className="link-highlihted">YOUTUBE @LizNeira</a></h3>
                        <p className="text-justify">Aquí podrás encontrar clases cortas y muy variadas de Vinyasa Yoga nivel principiante e intermedio. Aprenderás a tener una
                            respiración consciente, a mover tu cuerpo y relajar tu mente a través de diferentes asanas/posturas y meditación. Juntos aprenderemos a descubrir y
                            practicar este mundo maravilloso del YOGA.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 video-container">
                        <YoutubeEmbed postUrl="https://www.youtube.com/embed/ZZ-6STCCLoQ?loop=1&mute=1&autoplay=0"
                                      title="Yoga de Principiante a Nivel Intermedio Dia 10 | Tonifica el Cuerpo | 20 Min | Alpes Franceses"/>
                    </div>
                </div>


            </div>

            <Footer/>
        </main>
    );
}

export default Profile;
