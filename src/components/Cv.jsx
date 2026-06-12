import '../styles/Cvstyles.css';

function Cv() {
  return (
    <div className="cv-wrapper" role="main" aria-labelledby="header-name">

      {/* ══ HERO / ENCABEZADO ══ */}
      <header className="cv-hero">
        <div className="hero-avatar">
          <img
            src="https://avatars.githubusercontent.com/u/103292498?s=400&u=175e635ba13d385e698d7b40eb9c2cebe64ea27e&v=4"
            alt="Foto de perfil de Andrés Vélez"
            loading="lazy"
            width="140"
            height="140"
          />
          <span className="avatar-badge" aria-label="Disponible" title="Disponible para trabajar"></span>
        </div>

        <div className="hero-info">
          <h1 className="hero-name" id="header-name">Andrés Felipe Vélez Alcaraz</h1>
          <p className="hero-title">
            Analista de Datos
            <span>|</span>
            Desarrollador Backend
            <span>|</span>
            Ingeniería de Sistemas
          </p>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <i className="fas fa-id-card"></i> CC: 1017245136
            </span>
            <span className="hero-meta-item">
              <i className="fas fa-map-marker-alt"></i> Medellín, Antioquia, Colombia
            </span>
            <span className="hero-meta-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+573057477830">+57 305 747 7830</a>
            </span>
            <span className="hero-meta-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:andresjobpk@gmail.com">andresjobpk@gmail.com</a>
            </span>
          </div>

          <nav className="hero-links" aria-label="Redes sociales y contacto">
            <a href="https://wa.me/3057477830" target="_blank" rel="noopener noreferrer"
               className="hero-link whatsapp" aria-label="Contactar por WhatsApp">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://github.com/andrias01" target="_blank" rel="noopener noreferrer"
               className="hero-link github" aria-label="Perfil de GitHub">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-v%C3%A9lez-alcaraz-264519292/" target="_blank" rel="noopener noreferrer"
               className="hero-link linkedin" aria-label="Perfil de LinkedIn">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://platzi.com/p/Andrias01" target="_blank" rel="noopener noreferrer"
               className="hero-link platzi" aria-label="Perfil de Platzi">
              <i className="fas fa-graduation-cap"></i> Platzi
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=andresjobpk@gmail.com" target="_blank" rel="noopener noreferrer"
               className="hero-link email" aria-label="Enviar correo por Gmail">
              <i className="fas fa-paper-plane"></i> Correo
            </a>
          </nav>
        </div>
      </header>

      {/* ══ GRID PRINCIPAL ══ */}
      <div className="cv-grid">

        {/* ══ COLUMNA PRINCIPAL ══ */}
        <div className="cv-col-main">

          {/* Perfil Profesional */}
          <section className="card" aria-labelledby="profile-heading">
            <h2 className="card-title" id="profile-heading">
              <i className="fas fa-user"></i> Perfil Profesional
            </h2>
            <p className="profile-text">
              Estudiante de Ingeniería de Sistemas (7.° semestre) con experiencia en desarrollo backend
              (Java, Spring Boot, Python, AWS), análisis de datos y automatización de procesos. Habilidad
              comprobada para diseñar soluciones tecnológicas que optimizan operaciones y apoyan la toma de
              decisiones. Certificado en Python, Java, Git, AWS y fundamentos de Ingeniería de Software.
              Disponible de tiempo completo de lunes a viernes, con vehículo propio para desplazamiento a
              Medellín y Oriente Antioqueño.
            </p>
          </section>

          {/* Experiencia Laboral */}
          <section className="card" aria-labelledby="exp-heading">
            <h2 className="card-title" id="exp-heading">
              <i className="fas fa-briefcase"></i> Experiencia Laboral
            </h2>
            <div className="exp-list">

              {/* Exp 1 */}
              <article className="exp-item">
                <div className="exp-header">
                  <h3 className="exp-company">Proyecto Independiente (Restaurante)</h3>
                  <span className="exp-date">Ene 2024 — Presente</span>
                </div>
                <p className="exp-role">Desarrollador Backend Junior — Analítica y Automatización</p>
                <p className="exp-location">
                  <i className="fas fa-map-marker-alt"></i> Antioquia, Colombia · Remoto / Freelance
                </p>
                <ul className="exp-bullets">
                  <li>Diseñé, desarrollé y desplegué un chatbot que atiende más de <strong>100 consultas mensuales</strong> de clientes reales en producción continua.</li>
                  <li>Integré <strong>API de ChatGPT (GPT-3.5 Turbo)</strong> para NLP y Google Sheets API como fuente de datos dinámica, eliminando redespliegues.</li>
                  <li>Automaticé la gestión de datos del negocio (menú, horarios, precios) con integración en tiempo real, reduciendo tiempo de actualización a cero.</li>
                  <li>Desarrollé el backend con <strong>Node.js + Express</strong>; desplegado en cloud con disponibilidad del <strong>99%+</strong>.</li>
                  <li>Documenté la arquitectura para facilitar la escalabilidad a múltiples sucursales.</li>
                </ul>
              </article>

              {/* Exp 2 */}
              <article className="exp-item">
                <div className="exp-header">
                  <h3 className="exp-company">Restaurante La Curva Del Gordo</h3>
                  <span className="exp-date">7 años — Actual</span>
                </div>
                <p className="exp-role">Supervisor de Operaciones y Gestión Comercial</p>
                <p className="exp-location">
                  <i className="fas fa-map-marker-alt"></i> Antioquia, Colombia · Presencial
                </p>
                <ul className="exp-bullets">
                  <li>Controlé y analicé <strong>indicadores operativos diarios</strong> (ventas, inventario, costos), reportando a gerencia.</li>
                  <li>Administré y cuadré caja diariamente, manejando <strong>altas sumas de dinero</strong> con precisión y generando reportes financieros.</li>
                  <li>Gestioné y actualicé la base de datos del restaurante (productos, precios, clientes), apoyando decisiones comerciales basadas en datos.</li>
                  <li>Supervisé equipo de <strong>más de 5 personas</strong> (cocina, meseros, cajeros, auxiliares), asignando turnos y estándares de calidad.</li>
                  <li>Controlé inventarios de frutas, verduras e insumos, minimizando pérdidas por caducidad.</li>
                  <li>Gestioné proveedores: negociación, pedidos, recepción y verificación de mercancía.</li>
                </ul>
                <p className="exp-contact">
                  <i className="fas fa-user-tie"></i>
                  Jefe: Sebastián Toro Botero (Propietario) &nbsp;·&nbsp; Tel: 310 831 9189
                </p>
              </article>

              {/* Exp 3 */}
              <article className="exp-item">
                <div className="exp-header">
                  <h3 className="exp-company">Universidad Católica de Oriente</h3>
                  <span className="exp-date">2023</span>
                </div>
                <p className="exp-role">Desarrollador Backend — Proyecto Institucional (REDIS)</p>
                <p className="exp-location">
                  <i className="fas fa-map-marker-alt"></i> Rionegro, Antioquia · Presencial
                </p>
                <ul className="exp-bullets">
                  <li>Diseñé e implementé <strong>base de datos relacional normalizada en MySQL</strong> (3FN) para gestión institucional.</li>
                  <li>Desarrollé módulos backend en <strong>Java con SOLID y Clean Code</strong> en equipo de 4 personas (+60% cobertura con JUnit y Mockito).</li>
                  <li>Colaboré con Git y GitHub para control de versiones, pull requests y revisión de código.</li>
                </ul>
              </article>

            </div>
          </section>

          {/* Habilidades Técnicas */}
          <section className="card" aria-labelledby="skills-heading">
            <h2 className="card-title" id="skills-heading">
              <i className="fas fa-code"></i> Habilidades Técnicas
            </h2>
            <div className="skills-grid">
              <div className="skill-category">
                <p className="skill-cat-label">Lenguajes</p>
                <div className="skill-tags">
                  <span className="skill-tag">Java (Avanzado)</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>
              <div className="skill-category">
                <p className="skill-cat-label">Frameworks</p>
                <div className="skill-tags">
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">Spring Security</span>
                  <span className="skill-tag">Spring Data JPA</span>
                  <span className="skill-tag">Hibernate</span>
                  <span className="skill-tag">Angular</span>
                  <span className="skill-tag">React</span>
                </div>
              </div>
              <div className="skill-category">
                <p className="skill-cat-label">Bases de Datos</p>
                <div className="skill-tags">
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">AWS DynamoDB</span>
                  <span className="skill-tag">Diseño relacional</span>
                  <span className="skill-tag">SQL avanzado</span>
                </div>
              </div>
              <div className="skill-category">
                <p className="skill-cat-label">Cloud & DevOps</p>
                <div className="skill-tags">
                  <span className="skill-tag">AWS EC2</span>
                  <span className="skill-tag">AWS S3</span>
                  <span className="skill-tag">AWS RDS</span>
                  <span className="skill-tag">AWS Lambda</span>
                  <span className="skill-tag">API Gateway</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">GitHub Actions (CI/CD)</span>
                </div>
              </div>
              <div className="skill-category">
                <p className="skill-cat-label">Analítica & BI</p>
                <div className="skill-tags">
                  <span className="skill-tag">SQL para análisis</span>
                  <span className="skill-tag">Dashboards</span>
                  <span className="skill-tag">KPIs</span>
                  <span className="skill-tag">Integración de APIs</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">Automatización de reportes</span>
                </div>
              </div>
              <div className="skill-category">
                <p className="skill-cat-label">Arquitectura & Herramientas</p>
                <div className="skill-tags">
                  <span className="skill-tag">Microservicios</span>
                  <span className="skill-tag">RESTful APIs</span>
                  <span className="skill-tag">Hexagonal</span>
                  <span className="skill-tag">MVC</span>
                  <span className="skill-tag">SOLID</span>
                  <span className="skill-tag">Clean Code</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Scrum</span>
                  <span className="skill-tag">Azure DevOps</span>
                </div>
              </div>
              <div className="skill-category">
                <p className="skill-cat-label">En aprendizaje</p>
                <div className="skill-tags">
                  <span className="skill-tag learning">Kafka</span>
                  <span className="skill-tag learning">Kubernetes</span>
                  <span className="skill-tag learning">Machine Learning</span>
                  <span className="skill-tag learning">Power BI Avanzado</span>
                  <span className="skill-tag learning">Modelos estadísticos</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ══ COLUMNA LATERAL ══ */}
        <aside className="cv-col-side">

          {/* Competencias Clave */}
          <section className="card" aria-labelledby="comp-heading">
            <h2 className="card-title" id="comp-heading">
              <i className="fas fa-star"></i> Competencias Clave
            </h2>
            <div className="key-competencies">
              <div className="competency-item">
                <i className="fas fa-chart-line"></i>
                <span>Análisis de datos e indicadores de desempeño (KPIs)</span>
              </div>
              <div className="competency-item">
                <i className="fas fa-table"></i>
                <span>Tableros de control y reportes con SQL y herramientas BI</span>
              </div>
              <div className="competency-item">
                <i className="fas fa-cogs"></i>
                <span>Automatización y optimización de procesos operativos</span>
              </div>
              <div className="competency-item">
                <i className="fas fa-database"></i>
                <span>Modelado y gestión de bases de datos relacionales</span>
              </div>
              <div className="competency-item">
                <i className="fas fa-server"></i>
                <span>Desarrollo backend: Java, Spring Boot, Python, Node.js</span>
              </div>
              <div className="competency-item">
                <i className="fab fa-aws"></i>
                <span>Cloud Computing: AWS (EC2, S3, RDS, Lambda, API Gateway)</span>
              </div>
              <div className="competency-item">
                <i className="fas fa-users"></i>
                <span>Metodologías ágiles (Scrum) y control de versiones (Git)</span>
              </div>
              <div className="competency-item">
                <i className="fas fa-search"></i>
                <span>Diagnóstico de necesidades de mejora en procesos y sistemas</span>
              </div>
              <div className="competency-item">
                <i className="fas fa-handshake"></i>
                <span>Gestión comercial, servicio al cliente y reporte a gerencia</span>
              </div>
            </div>
          </section>

          {/* Formación Académica */}
          <section className="card" aria-labelledby="edu-heading">
            <h2 className="card-title" id="edu-heading">
              <i className="fas fa-university"></i> Formación Académica
            </h2>
            <div className="edu-list">
              <div className="edu-item">
                <div className="edu-icon">🎓</div>
                <div className="edu-body">
                  <p className="edu-degree">Ingeniería de Sistemas</p>
                  <p className="edu-institution">Universidad Católica de Oriente</p>
                  <p className="edu-period">2021 — En curso (7.° semestre)</p>
                  <p className="edu-note">Rionegro, Antioquia · Presencial</p>
                  <p className="edu-note">POO · Estructuras de Datos · BD · Arquitectura de Software · Metodologías Ágiles</p>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-icon">🏫</div>
                <div className="edu-body">
                  <p className="edu-degree">Estudios Secundarios</p>
                  <p className="edu-institution">I.E. Niño Jesús de Praga / Normal Superior de Medellín</p>
                  <p className="edu-period">2008 — 2013</p>
                </div>
              </div>
            </div>
          </section>

          {/* Certificaciones */}
          <section className="card" aria-labelledby="cert-heading">
            <h2 className="card-title" id="cert-heading">
              <i className="fas fa-certificate"></i> Certificaciones
            </h2>
            <div className="cert-list">
              {[
                'Fundamentos de Ingeniería de Software',
                'Fundamentos de Python',
                'Curso de Java',
                'Git y GitHub',
                'AWS: Cómputo, Almacenamiento y Bases de Datos',
                'AWS: Fundamentos del Cloud Computing',
                'Introducción al Desarrollo Backend',
              ].map((cert) => (
                <div className="cert-item" key={cert}>
                  <div className="cert-icon"><i className="fas fa-check"></i></div>
                  <div>
                    <p className="cert-name">{cert}</p>
                    <p className="cert-provider">Platzi · 2026</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Idiomas */}
          <section className="card" aria-labelledby="lang-heading">
            <h2 className="card-title" id="lang-heading">
              <i className="fas fa-language"></i> Idiomas
            </h2>
            <div className="lang-list">
              <div className="lang-item">
                <div className="lang-header">
                  <span className="lang-name">Español</span>
                  <span className="lang-level">Nativo</span>
                </div>
                <div className="lang-bar"><div className="lang-fill" style={{width:'100%'}}></div></div>
              </div>
              <div className="lang-item">
                <div className="lang-header">
                  <span className="lang-name">Inglés</span>
                  <span className="lang-level">B1 — Intermedio</span>
                </div>
                <div className="lang-bar"><div className="lang-fill" style={{width:'55%'}}></div></div>
                <p style={{fontSize:'0.78rem',color:'var(--text-muted)',marginTop:'5px'}}>
                  Lectura y escritura técnica fluida (documentación, lenguajes de programación)
                </p>
              </div>
            </div>
          </section>

          {/* Información Adicional */}
          <section className="card" aria-labelledby="info-heading">
            <h2 className="card-title" id="info-heading">
              <i className="fas fa-info-circle"></i> Información Adicional
            </h2>
            <div className="info-grid">
              <div className="info-chip">
                <i className="fas fa-calendar-check"></i>
                <span>Tiempo completo Lun–Vie</span>
              </div>
              <div className="info-chip">
                <i className="fas fa-user-check"></i>
                <span>Mayor de edad</span>
              </div>
              <div className="info-chip">
                <i className="fas fa-car"></i>
                <span>Vehículo propio</span>
              </div>
              <div className="info-chip">
                <i className="fas fa-map-signs"></i>
                <span>Medellín y Oriente Antioqueño</span>
              </div>
            </div>
          </section>

        </aside>
      </div>
    </div>
  );
}

export default Cv;
