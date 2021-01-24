import './Contact.css';

const Contact = () => {

    return (
        <section className="Contact">
            <div className="container">
                <h2 className="titulo-seccion">Contacto</h2>
                <article className="info">
                    
                    <div>

                        <p><span>Email:</span> <a href="mailto:milobakerybsas@gmail.com" >milobakerybsas@gmail.com</a></p>
                    </div>

                    <div>
                        <p><span>Direccion:</span> <a href="https://goo.gl/maps/Q5PWsV1Z5jNV1RMG7" target="_blank">Bogotá 849, Caballito. CABA</a></p>
                        <p><span>Horario:</span> Lunes a Lunes 12hs a 20hs</p>
                    </div>



                </article>
            </div>
        </section>
    )
}

export default Contact;