import EnquiryService from "../service/EnquiryService.js";

function ContactForm(props) {
    const enquiryService = new EnquiryService();

    const handleSubmit = (event) =>
        enquiryService.handleEnquirySubmit(props.yogaClassType, event);

    return (
        <>
            <h2>Contáctame</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" name="name" id="name"
                           aria-describedby="nameHelp" placeholder="Tu nombre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email"
                           aria-describedby="emailHelp" placeholder="Tu email"/>
                </div>
                <div className="form-group">
                    <label className="required" htmlFor="mobile">Celular</label>
                    <input type="text" className="form-control" name="mobile" id="mobile" required
                           aria-describedby="mobileHelp" placeholder="Tu número de Celular"/>
                </div>
                <div className="form-group">
                    <label htmlFor="preferredTime">Horario Preferido</label>
                    <input type="text" className="form-control" name="preferredTime" id="preferredTime"
                           aria-describedby="preferredTimeHelp" placeholder="Hora preferida de clase"/>
                </div>
                <div className="form-group">
                    <label className="required" htmlFor="enquiry">Pregunta sobre la Clase</label>
                    <textarea className="form-control" name="enquiry" id="enquiry" required rows="6"
                              placeholder="Tu pregunta o consulta de reserva"/>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Enviar</button>
            </form>
        </>
    );
}

export default ContactForm;
