import '../styles/Cvstyles.css';
function Cv() {
    return (
        <div class="container" role="main" aria-labelledby="header-name">
            <header>
                <img
                    src="https://avatars.githubusercontent.com/u/103292498?s=400&u=175e635ba13d385e698d7b40eb9c2cebe64ea27e&v=4"
                    alt="Foto de Perfil de Andres Velez"
                    loading="lazy"
                    width="120" height="120"
                />
                <div>
                    <h1 id="header-name">Andres Felipe Velez Alcaraz</h1>
                    <h2>Desarrollador BackEnd | Ingeniero de sistemas</h2>
                    <nav class="social-links" aria-label="Redes sociales y contacto de Andres Velez">
                        <a href="https://wa.me/3057477830" target="_blank" rel="noopener noreferrer" aria-label="Contáctame por WhatsApp" title="WhatsApp">
                            <i class="fab fa-whatsapp"></i>

                        </a>
                        <a href="https://github.com/andrias01" target="_blank" rel="noopener noreferrer" aria-label="Mi perfil GitHub" title="GitHub" class="github">
                            <i class="fab fa-github"></i>
                        </a>
                    </nav>
                </div>
            </header>

            <main>

                <section class="profile" aria-labelledby="profile-heading">
                    <h3 id="profile-heading">Perfil Profesional</h3>
                    <p>
                        Soy estudiante de séptimo semestre de Ingeniería de Sistemas, apasionado por la tecnología y con una fuerte orientación a la resolución creativa de problemas. Me destaco por mi capacidad de trabajo en equipo, adaptabilidad y deseo constante de aprender sobre políticas organizacionales y metodologías de trabajo.

                        Tengo experiencia en desarrollo de software con enfoque en backend y frontend. Domino la programación orientada a objetos (POO) y el diseño orientado a objetos (DOO), así como el uso de patrones de diseño para arquitecturas escalables y mantenibles. En backend, manejo estructuras sólidas apoyadas en contenedores Docker, desplegando soluciones como APIs funcionales. En frontend, cuento con conocimientos prácticos en React, trabajando con componentes, routers, links y manejo de estado, además de su despliegue.

                        Trabajo con control de versiones usando GitHub y tengo experiencia en bases de datos relacionales, especialmente PostgreSQL. Poseo una lógica de programación clara y sólida, y mi lenguaje principal de desarrollo es Java.
                    </p>
                </section>

                <section class="personal-info" aria-labelledby="personal-info-heading">
                    <h3 id="personal-info-heading">Datos Personales</h3>
                    <ul>
                        <li><strong>Fecha de nacimiento:</strong> <span>5 de marzo del 1997</span></li>
                        <li><strong>Correo electrónico:</strong> <span>andresjobpk@gmail.com</span></li>
                        <li><strong>Teléfono:</strong> <span>+57 305 747 7830</span></li>
                        <li><strong>Dirección:</strong> <span>Guarne-Antioquia</span></li>
                    </ul>
                </section>
                <section class="skills" aria-labelledby="skills-heading">
                    <h3 id="skills-heading">Competencias</h3>
                    <ul class="skills-list">
                        <li>JavaScript (ES6+)</li>
                        <li>Java</li>
                        <li>PostgreSQL</li>
                        <li>React.js</li>
                        <li>MongoDB</li>
                        <li>HTML &amp; CSS (Sass)</li>
                        <li>Git y GitHub</li>
                        <li>Agile y SCRUM</li>
                    </ul>
                </section>

                <section class="education" aria-labelledby="education-heading">
                    <h3 id="education-heading">Formación</h3>
                    <ul class="education-list">
                        <li>
                            <h4>Ingeniería en Sistemas</h4>
                            <span class="date">Universidad Católica Del Oriente, 2021 - 2025</span>
                            <p>Estudiante aun de la carrera, semestre 7.</p>
                        </li>
                    </ul>
                    <ul class="education-list">
                        <li>
                            <h4>Estudios segundarios</h4>
                            <span class="date">Institución Educativa
                                Niño Jesús de Praga 2008-2011
                            </span>
                            <span class="date">Institución Educativa
                                Normal Superior de Medellín
                                2012-2013
                            </span>
                        </li>
                    </ul>


                </section>

                <section class="languages" aria-labelledby="languages-heading">
                    <h3 id="languages-heading">Idiomas</h3>
                    <ul class="languages-list">
                        <li>Español - Nativo</li>
                        <li>Inglés - Intermedio (B1)</li>
                    </ul>
                </section>

            </main>
        </div>
    )
}

export default Cv
