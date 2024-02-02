import Instagram1 from '../images/home/Instagram1.jpg';
import Instagram2 from '../images/home/Instagram2.jpg';
import Instagram3 from '../images/home/Instagram3.jpg';
import Footer from "./Footer";
import InstagramPost from "./socialMedia/InstagramPost";
import YoutubeEmbed from "./socialMedia/YoutubeEmbed";

function Profile() {
  return (
      <main role="main">

          <div className="container marketing">

              <div className="row d-flex align-items-center">
                  <div className="col text-center">
                      <h3 className="display-7 rem-2">VISITA MI CANAL DE <a href="https://www.youtube.com/channel/UC20D0ArlDwjfLkpaW07pGKw/featured" target="_blank">YOUTUBE</a></h3>
                      <p className="text-justify">Aquí podrás encontrar clases cortas y muy variadas de Vinyasa Yoga nivel
                          principiante e intermedio. Aprenderás a tener una respiración consciente, a mover tu cuerpo y relajar
                          tu mente a través de diferentes asanas/posturas y meditación. Juntos aprenderemos a descubrir y practicar este mundo maravilloso del
                          YOGA.</p>
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-12 video-container">
                    <YoutubeEmbed postUrl="https://www.youtube.com/embed/ZZ-6STCCLoQ?loop=1&mute=1&autoplay=0"
                                  title="Yoga de Principiante a Nivel Intermedio Dia 10 | Tonifica el Cuerpo | 20 Min | Alpes Franceses"/>
                  </div>
              </div>

              <br/><br/>

              <div className="row d-flex align-items-center">
                  <div className="col">
                      <h3 className="display-7 rem-2 text-center">SÍGUEME EN <a href="https://instagram.com/lizneirar" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></h3>
                      <p className="text-justify">Aquí podrás encontrar mucho más de mi vida cotidiana con fotos y
                          videos inspirados en diferentes posturas de yoga, secuencias, retos y como inspiro a las
                          personas a mover el cuerpo y tranquilizar la mente. Es un espacio más cercano para interactuar con aquellos que quieren
                          explorar y conocer mucho más de cerca esta fantástica disciplina. Namaste.</p>
                  </div>
              </div>

              <br/>

              <div className="row">

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/p/CZpuTaqBaGN/?" errorImage={Instagram3}/>
                  </div>

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/p/CbqRLvRBtx-/?" errorImage={Instagram1}/>
                  </div>

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/tv/CVJkErFjmBW/?" errorImage={Instagram2}/>
                  </div>
              </div>


              <div className="row">

                  <div className="col-lg-6">
                      <InstagramPost postUrl="https://www.instagram.com/p/CbWBi3GPKIa/?" errorImage={Instagram3}/>
                  </div>

                  <div className="col-lg-6">
                      <InstagramPost postUrl="https://www.instagram.com/p/CWb0BJkBIyt/?" errorImage={Instagram3}/>
                  </div>

              </div>

              <div className="row">
                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/reel/CaN_EaMjIXb/?" errorImage={Instagram3}/>
                  </div>

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/p/CZP-t_EBzRs/?" errorImage={Instagram1}/>
                  </div>

                  <div className="col-lg-4">
                      <InstagramPost postUrl="https://www.instagram.com/reel/CkrT3grjUZL/?" errorImage={Instagram2}/>
                  </div>
              </div>


          </div>

          <Footer/>
      </main>
  );
}

export default Profile;
