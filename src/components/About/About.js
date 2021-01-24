import './About.css';
import imgCart from '../../assets/imgCart.svg'

const About = () => {

    return (
        <section className="About">
            <div className="container">
                <h2 className="titulo-seccion">Sobre Nosotros</h2>
                <article className="info">
                    <div>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ipsam quas molestiae dolor, eum quaerat voluptate doloribus cum dolore aperiam animi consequatur, nostrum minus pariatur maiores ex incidunt distinctio sequi! Corrupti optio, dolore temporibus molestiae ullam nostrum facilis numquam voluptate.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto odit sequi natus reprehenderit culpa ipsa error dolorem mollitia sapiente est, eos quaerat quas quasi non!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid dolorem repellat reiciendis numquam iure quos dicta minima inventore laboriosam magni sit, accusamus fugit tenetur autem unde nam aperiam dolorum, quo, assumenda dignissimos facere. Cum?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ea voluptatum optio numquam distinctio assumenda nulla incidunt velit praesentium totam.</p>
                    </div>
                    <div>
                        <img src={imgCart} alt="Imagen de muestra"/>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About;