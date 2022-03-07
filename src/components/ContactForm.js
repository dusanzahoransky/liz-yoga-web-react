import EnquiryService from "../service/EnquiryService.js";

function ContactForm(props) {
    const enquiryService = new EnquiryService();

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        if (!data.mobile) {
            return alert('Please fill up your phone number.')
        } else if (!data.enquiry) {
            return alert('Please fill up your enquiry.')
        } else {
            try {
                await enquiryService.postEnquiry(props.yogaClassType.value, data)
            } catch (e) {
                return alert('Failed to send you enquiry, please try again later.')
            }
            const form = document.querySelector('form')
            form.reset()
            return alert('Thank you for your enquiry, I will be in touch with you soon!')
        }
    }

    let horario
    if(props.hasHours){
        horario = <div className="form-group">
            <label htmlFor="preferredTime">Horario Preferido</label>
            <input type="text" className="form-control" name="preferredTime" id="preferredTime"
                   aria-describedby="preferredTimeHelp" placeholder="Hora preferida de clase"/>
        </div>
    }

    return (
        <>
            <h2>Contáctame</h2>
            <form onSubmit={handleSubmit}>
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
                {horario}
                <div className="form-group">
                    <label className="required" htmlFor="enquiry">Pregunta sobre {props.yogaClassType.label}</label>
                    <textarea className="form-control" name="enquiry" id="enquiry" required rows="6"
                              placeholder="Tu pregunta o consulta de reserva"/>
                </div>
                <input type="submit" className="btn btn-primary" value="Enviar"/>
            </form>
        </>
    );
}

export default ContactForm;
