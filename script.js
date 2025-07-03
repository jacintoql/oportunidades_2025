// Datos de universidades para mostrar en detalle
const universities = {
  upq: {
    name: "Universidad Politécnica de Querétaro",
    img: "LogosUniversidades/LOGO_UPQ.png",
    courses: [
      "Licenciatura en Comercio Internacional y Aduanas",
      "Licenciatura en Administración",
      "Ingeniería Mecatrónica",
      "Ingeniería Mecatrónica (Modalidad Mixta)",
      "Ingeniería en Manufactura Avanzada",
      "Ingeniería en Tecnologías de la Información e Innovación Digital",
      "Ingeniería en Tecnología Automotriz",
      "Ingeniería de Datos e Inteligencia Artificial"
    ],
    convocationLink: "https://sistemaintegral.upq.edu.mx/admisiones.php"
  },
  up: {
    name: "Universidad Politécnica de Santa Rosa",
    img: "LogosUniversidades/LOGO_UP.png",
    courses: [
      "Ingeniería en Calidad y Metrología",
      "Ingeniería en Sistemas Automotrices",
      "Ingeniería en Tecnologías de la Información e Innovación Digital",
      "Ingeniería en Animación y Efectos Visuales",
      "Licenciatura en Terapia Física",
      "Ingeniería en Robótica Computacional"
    ],
    convocationLink: "https://upsrj.edu.mx/inscripciones-reinscripciones/"
  },
  uteq: {
    name: "Universidad Tecnológica de Querétaro",
    img: "LogosUniversidades/LOGO_HALCON.png",
    courses: [
      "Licenciatura En Administración",
      "Licenciatura en Negocios y Mercadotecnía",
      "Licenciatura en Ingeniería en Logística",
      "Licenciatura en Educación",
      "Licenciatura en Ingeniería Ambiental y Sustentabilidad",
      "Licenciatura en Ingeniería En Energía y Desarrollo Sostenible",
      "Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital",
      "Licenciatura en Ingeniería Mecatrónica",
      "Licenciatura en Ingeniería en Mantenimiento Industrial",
      "Licenciatura en Ingeniería en Nanotecnología",
      "Licenciatura en Ingeniería Industrial",
      "Licenciatura en Ingeniería Mecánica",
      "Licenciatura en Ingeniería Mecánica Automotriz",
      "Licenciatura en Ingeniería Semiconductores",
      "Licenciatura en Contaduría"
    ],
    convocationLink: "https://admisiones.uteq.edu.mx/"
  },
  utc: {
    name: "Universidad Tecnológica de Corregidora",
    img: "LogosUniversidades/LOGO_UTC.png",
    courses: [
      "Licenciatura en Gestión y Desarrollo Turístico",
      "Licenciatura en Ingeniería en Mantenimiento Industrial",
      "Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital",
      "Licenciatura en Ingeniería en Biotecnología",
      "Licenciatura en Ingeniería Mecatrónica"
    ],
    convocationLink: "https://captacion.utcorregidora.edu.mx/"
  },
  unaq: {
    name: "Universidad Aeronáutica de Querétaro",
    img: "LogosUniversidades/LOGO_UNAQ.png",
    courses: [
      "Ingeniería Aeronáutica en Manufactura",
      "Ingeniería en Diseño Mecánico Aeronáutico",
      "Ingeniería en Electrónica y Control de Sistemas de Aeronaves",
      "Ingeniería Aeronáutica en Mantenimiento"
    ],
    convocationLink: "https://www.unaq.edu.mx/admisiones/convocatoria-ingenieria/"
  },
  utsjr: {
    name: "Universidad Tecnológica de San Juan del Río",
    img: "LogosUniversidades/LOGO_UTSJR.png",
    courses: [
      "TSU en Mercadotecnia (Jalpan y SJR). Lic. en Negocios Y Mercadotecnia",
      "TSU en Química Tecnológica Farmacéutica. Ing. Química Farmacéutica",
      "TSU en Química Industrial. Ingeniería Química",
      "TSU en Energía Turbo Solar. Ing. Energía Y Desarrollo Sustentable",
      "TSU en Construcción. Ingeniería Civil",
      "TSU en Automotriz. Ingeniería Industrial",
      "TSU en Procesos Productivos. Ingeniería Industrial",
      "TSU en Sistemas de Gestión de Calidad. Ingeniería Industrial",
      "TSU en Desarrollo de Software Multiplataforma (Jalpan y SJR). Ing. en Tec. de la Información e Innovación Digital",
      "TSU en Entornos Virtuales Y Negocios Digitales. Ing. en Tec.de la Información e Innovación Digital",
      "TSU en IA – Ing. en Tec. de la Información e Innovación Digital",
      "TSU en Automatización. Ingeniería Mecatrónica",
      "TSU en Robótica. Ingeniería Mecatrónica",
      "TSU en Automatización. Ingeniería Mecatrónica Mixto (Virtual)",
      "TSU en Mantenimiento Industrial. Ing. en Mantenimiento Industrial",
      "TSU en Turismo. Lic. Gestión Y Desarrollo Turístico"
    ],
    convocationLink: "http://200.188.14.50/admision/admision.jsp?C=2"
  },
  itq: {
    name: "TECNM Campus Querétaro",
    img: "LogosUniversidades/LOGO_ITQ.png",
    courses: [
      "Ingeniería en Sistemas Computacionales",
      "Ingeniería Electrónica",
      "Ingeniería Industrial",
      "Ingeniería Mecánica",
      "Ingeniería Mecatrónica",
      "Ingeniería Eléctrica",
      "Ingeniería en Materiales",
      "Ingeniería en Semiconductores",
      "Ingeniería en Ciencia De Datos",
      "Ingeniería en Logística",
      "Licenciatura en Arquitectura",
      "Licenciatura en Gestión Empresarial"
    ],
    convocationLink: "https://queretaro.tecnm.mx/wp-content/uploads/2024/06/CONVOCATORIA-NUEVO-INGRESO-AGO-DIC-2024-Extraordinaria-1.pdf"
  },
  tecnm: {
    name: "TECNM Campus San Juan del Río",
    img: "LogosUniversidades/LOGO_ITQ.png",
    courses: [
      "Ingeniería Industrial",
      "Ingeniería en Sistemas Computacionales",
      "Ingeniería Electrónica",
      "Ingeniería en Gestión Empresarial",
      "Ingeniería en Tecnologías de la Información y Comunicaciones",
      "Ingeniería en Electromecánica"
    ],
    convocationLink: "https://cetech.sjuanrio.tecnm.mx/convocatoriaAdmision/6462448e1fcfda3330afe6fc5b50d53b"
  }
};

// Selección de elementos DOM
const cards = document.querySelectorAll('.card[data-university]');
const detailPanel = document.getElementById('university-detail');
const detailImg = document.getElementById('detail-img');
const detailName = document.getElementById('detail-name');
const detailCoursesList = document.getElementById('detail-courses-list');
const detailConvocation = document.getElementById('detail-convocation');
const closeBtn = document.getElementById('close-detail');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const uniKey = card.getAttribute('data-university');
    if (!universities[uniKey]) return;

    const uni = universities[uniKey];

    // Actualizar contenido del panel detalle
    detailImg.src = uni.img;
    detailImg.alt = `Logo de ${uni.name}`;
    detailName.textContent = uni.name;

    // Limpiar y llenar lista de cursos
    detailCoursesList.innerHTML = '';
    uni.courses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course;
      detailCoursesList.appendChild(li);
    });

    detailConvocation.href = uni.convocationLink;
    detailConvocation.textContent = "Convocatoria";

    // Mostrar panel detalle
    detailPanel.style.display = 'block';

    // Scroll suave al panel
    detailPanel.scrollIntoView({ behavior: 'smooth' });
  });
});

closeBtn.addEventListener('click', () => {
  detailPanel.style.display = 'none';
});
