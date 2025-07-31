<<<<<<< HEAD
import React from 'react';  // Eliminar 'useState' ya que no lo estamos utilizando
import Slider from 'react-slick';
=======
import React from 'react';
>>>>>>> dd4219250c26ae66d2bf921b9621ccc03d735b36
import './Home.css';
import gruaBanner from '../assets/grua-banner.png';
import alianza from '../assets/alianza.png';
import iso from '../assets/iso.png';
<<<<<<< HEAD
import proyecto from '../assets/proyecto.jpg'; // Ruta corregida y revisada

function Home() {
  const proyectos = [
    { title: 'Proyecto 1', description: '', img: proyecto },
    { title: 'Proyecto 2', description: '', img: proyecto },
    { title: 'Proyecto 3', description: '', img: proyecto },
    { title: 'Proyecto 4', description: '', img: proyecto },
    { title: 'Proyecto 5', description: '', img: proyecto },
    { title: 'Proyecto 6', description: '', img: proyecto },
    { title: 'Proyecto 7', description: '', img: proyecto },
    { title: 'Proyecto 8', description: '', img: proyecto },
  ];

  // Configuración del slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,  // Deshabilitar los botones de navegación
    autoplay: true,  // Activar el movimiento automático
    autoplaySpeed: 5000,  // Cambia a 5000 (5 segundos) o más para un movimiento más lento
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

=======
import servicio1 from '../assets/servicio1.jpg';

function Home() {
>>>>>>> dd4219250c26ae66d2bf921b9621ccc03d735b36
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="bold">GRÚAS Y TRANSPORTES</span>{' '}
              <span className="highlight">SANCHEZ</span>
            </h1>
            <p className="subtitulo">Izamos progreso sin fronteras</p>
            <p className="descripcion">
<<<<<<< HEAD
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
=======
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
>>>>>>> dd4219250c26ae66d2bf921b9621ccc03d735b36
            </p>
            <button className="cotizar-btn">Solicitar Cotización</button>
          </div>
          <div className="hero-image">
            <img src={gruaBanner} alt="Banner grúa" />
          </div>
        </div>
      </section>

      {/* Sección Experiencia y Respaldo */}
      <section className="experiencia-section">
        <div className="experiencia-content">
          <div className="texto">
            <h2>EXPERIENCIA Y RESPALDO</h2>
            <hr />
            <p>
              Sánchez Grúas se especializa en brindar un servicio integral de izajes que incluye el{' '}
              <strong>alquiler de grúas, ingeniería y transporte sobredimensionado.</strong>
            </p>
            <button className="btn-verde">Conócenos Aquí</button>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-header verde">Más de</div>
              <div className="años">22 <span>años</span></div>
<<<<<<< HEAD
              <p>
                Somos líderes en Alquiler de Grúas desde hace <strong>más de 22 años</strong>
              </p>
=======
              <p>Somos líderes en Alquiler de Grúas desde hace <strong>más de 22 años</strong></p>
>>>>>>> dd4219250c26ae66d2bf921b9621ccc03d735b36
            </div>

            <div className="card">
              <div className="card-header negro">Homologaciones y Alianzas Estratégicas</div>
<<<<<<< HEAD
              <img src={alianza} alt="alianza" className="alianza-img" />
=======
              <img src={alianza} alt="alianza" className="alianza-img" style={{ width: '100%', maxHeight: '140px', objectFit: 'contain' }} />
>>>>>>> dd4219250c26ae66d2bf921b9621ccc03d735b36
            </div>

            <div className="card">
              <div className="card-header negro">Certificaciones ISO</div>
<<<<<<< HEAD
              <img src={iso} alt="ISO" className="iso-img" />
=======
              <img src={iso} alt="ISO" className="iso-img" style={{ width: '100%', maxHeight: '140px', objectFit: 'contain' }} />
>>>>>>> dd4219250c26ae66d2bf921b9621ccc03d735b36
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section className="servicios-section">
        <div className="container-servicios">
<<<<<<< HEAD
          <h2>
            <span className="black">NUESTROS</span> <span className="verde">SERVICIOS</span>
          </h2>

          <div className="servicios-grid">
            {[ 
              { title: 'Alquiler de Grúas Telescópicas', desc: 'Alquiler de grúas telescópicas potentes que van desde las 45 ton hasta las 650 ton' },
              { title: 'Alquiler de Transporte de Carga Pesada', desc: 'Transporte de carga pesada con plataformas cama baja y cama alta' },
              { title: 'Alquiler de Semitrailer Grúa', desc: 'Alquiler de semitrailer con grúa para proyectos especiales' },
              { title: 'Alquiler de Accesorios (Canastilla)', desc: 'Alquiler de accesorios como canastillas para trabajos en altura' },
              { title: 'Mantenimiento de Grúas Articuladas', desc: 'Servicios de mantenimiento para grúas articuladas de diversas capacidades' }
            ].map((servicio, index) => (
              <div className="servicio-card" key={index}>
                <div className="imagen-servicio" style={{ backgroundImage: `url(${proyecto})` }}>
                  <div className="overlay">
                    <h3>{servicio.title}</h3>
                  </div>
                </div>
                <div className="plus-bar">
                  <i className="fas fa-plus"></i>
                </div>
                <p>{servicio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra experiencia */}
      <section className="experiencia-proyectos">
        <div className="container-experiencia">
          <h2>
            <span className="black">NUESTRA</span> <span className="verde">EXPERIENCIA</span>
          </h2>
          <p>Te presentamos algunos de nuestros últimos proyectos más destacados</p>

          <Slider {...settings}>
            {proyectos.map((proyecto, index) => (
              <div className="proyecto" key={index}>
                <img src={proyecto.img} alt={`Proyecto ${index + 1}`} />
                <div className="overlay">
                  <h1>{proyecto.title}</h1>
                  <p>{proyecto.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
=======
          <h2><span className="black">NUESTROS</span> <span className="verde">SERVICIOS</span></h2>

          <div className="servicios-grid">

            {[
              { icon: 'fas fa-truck-monster', title: 'Alquiler de Grúas Telescópicas', desc: 'Alquiler de grúas telescópicas potentes que van desde las 45 ton hasta las 650 ton' },
              { icon: 'fas fa-industry', title: 'Alquiler de Grúas Celosía', desc: 'Alquiler de grúas celosía de alto tonelaje para proyectos de gran envergadura' },
              { icon: 'fas fa-truck-moving', title: 'Alquiler de Camiones Grúa', desc: 'Camiones grúa con brazo articulado de 9 a 21 toneladas' },
              { icon: 'fas fa-users-cog', title: 'Ingeniería de Izajes', desc: 'Diseño, simulación, optimización y planificación de los izajes' },
              { icon: 'fas fa-arrow-up', title: 'Alquiler de Manlift', desc: 'Plataformas de elevación con brazo articulado hasta 40 metros de altura.' },
              { icon: 'fas fa-truck', title: 'Transporte de Carga Pesada', desc: 'Vehículos especiales como modulares, plataformas cama alta y cama baja.' }
            ].map((servicio, index) => (
              <div className="servicio-card" key={index}>
                <div className="imagen-servicio" style={{ backgroundImage: `url(${servicio1})` }}>
                  <div className="overlay">
                    <i className={servicio.icon}></i>
                    <h3>{servicio.title}</h3>
                  </div>
                </div>
                <div className="plus-bar"><i className="fas fa-plus"></i></div>
                <p>{servicio.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
>>>>>>> dd4219250c26ae66d2bf921b9621ccc03d735b36
    </>
  );
}

export default Home;
