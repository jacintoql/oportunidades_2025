// Datos de universidades para mostrar en detalle
const universities = {
  upq: {
    name: "Universidad Politécnica de Querétaro",
    img: "LogosUniversidades/LOGO_UPQ.png",
    courses: [
      "LICENCIATURA EN COMERCIO INTERNACIONAL Y ADUANAS",
      "LICENCIATURA EN ADMINISTRACIÓN",
      "LICENCIATURA EN INGENIERÍA MECATRÓNICA",
      "LICENCIATURA EN INGENIERÍA MECATRÓNICA (MODALIDAD MIXTA)",
      "LICENCIATURA EN INGENIERÍA EN MANUFACTURA AVANZADA",
      "LICENCIATURA EN INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL",
      "LICENCIATURA EN INGENIERÍA EN TECNOLOGÍA AUTOMOTRIZ",
      "LICENCIATURA EN INGENIERÍA DE DATOS E INTELIGENCIA ARTIFICIAL"
    ],
    convocationLink: "https://sistemaintegral.upq.edu.mx/admisiones.php"
  },
  up: {
    name: "Universidad Politécnica de Santa Rosa",
    img: "LogosUniversidades/LOGO_UP.png",
    courses: [
      "INGENIERÍA EN CALIDAD Y METROLOGÍA",
      "INGENIERÍA EN SISTEMAS AUTOMOTRICES",
      "INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL",
      "INGENIERÍA EN ANIMACIÓN Y EFECTOS VISUALES",
      "LICENCIATURA EN TERAPIA FÍSICA",
      "INGENIERÍA EN ROBÓTICA COMPUTACIONAL"
    ],
    convocationLink: "https://upsrj.edu.mx/inscripciones-reinscripciones/"
  },
  uteq: {
    name: "Universidad Tecnológica de Querétaro",
    img: "LogosUniversidades/LOGO_HALCON.png",
    courses: [
      "LICENCIATURA EN ADMINISTRACIÓN",
      "LICENCIATURA EN NEGOCIOS Y MERCADOTECNÍA",
      "LICENCIATURA EN INGENIERÍA EN LOGÍSTICA",
      "LICENCIATURA EN EDUCACIÓN",
      "LICENCIATURA EN INGENIERÍA AMBIENTAL Y SUSTENTABILIDAD",
      "LICENCIATURA EN INGENIERÍA EN ENERGÍA Y DESARROLLO SOSTENIBLE",
      "LICENCIATURA EN INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL",
      "LICENCIATURA EN INGENIERÍA MECATRÓNICA",
      "LICENCIATURA EN INGENIERÍA EN MANTENIMIENTO INDUSTRIAL",
      "LICENCIATURA EN INGENIERÍA EN NANOTECNOLOGÍA",
      "LICENCIATURA EN INGENIERÍA INDUSTRIAL",
      "LICENCIATURA EN INGENIERÍA MECÁNICA",
      "LICENCIATURA EN INGENIERÍA MECÁNICA AUTOMOTRIZ",
      "LICENCIATURA EN INGENIERÍA SEMICONDUCTORES",
      "LICENCIATURA EN CONTADURÍA"
    ],
    convocationLink: "https://admisiones.uteq.edu.mx/"
  },
  utc: {
    name: "Universidad Tecnológica de Corregidora",
    img: "LogosUniversidades/LOGO_UTC.png",
    courses: [
      "LICENCIATURA EN GESTIÓN Y DESARROLLO TURÍSTICO",
      "LICENCIATURA EN INGENIERÍA EN MANTENIMIENTO INDUSTRIAL",
      "LICENCIATURA EN INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL",
      "LICENCIATURA EN INGENIERÍA EN BIOTECNOLOGÍA",
      "LICENCIATURA EN INGENIERÍA MECATRÓNICA"
    ],
    convocationLink: "https://captacion.utcorregidora.edu.mx/"
  },
  unaq: {
    name: "Universidad Aeronáutica de Querétaro",
    img: "LogosUniversidades/LOGO_UNAQ.png",
    courses: [
      "INGENIERÍA AERONÁUTICA EN MANUFACTURA",
      "INGENIERÍA EN DISEÑO MECÁNICO AERONÁUTICO",
      "INGENIERÍA EN ELECTRÓNICA Y CONTROL DE SISTEMAS DE AERONAVES",
      "INGENIERÍA AERONÁUTICA EN MANTENIMIENTO"
    ],
    convocationLink: "https://www.unaq.edu.mx/admisiones/convocatoria-ingenieria/"
  },
  utsjr: {
    name: "Universidad Tecnológica de San Juan del Río",
    img: "LogosUniversidades/LOGO_UTSJR.png",
    courses: [
      "TSU EN MERCADOTECNIA (JALPAN). LICENCIATURA EN NEGOCIOS Y MERCADOTECNIA",
      "TSU EN MERCADOTECNIA (SJR). LICENCIATURA EN NEGOCIOS Y MERCADOTECNIA",
      "TSU EN QUÍMICA TECNOLÓGICA FARMACÉUTICA. LIC. E INGENIERÍA QUÍMICA FARMACÉUTICA",
      "TSU EN QUÍMICA INDUSTRIAL. LICENCIATURA EN INGENIERÍA QUÍMICA",
      "TSU EN ENERGÍA TURBO SOLAR. LIC. EN ING. ENERGÍA Y DESARROLLO SUSTENTABLE",
      "TSU EN CONSTRUCCIÓN. LICENCIATURA EN INGENIERÍA CIVIL",
      "TSU EN AUTOMOTRIZ. LICENCIATURA EN INGENIERÍA INDUSTRIAL",
      "TSU EN PROCESOS PRODUCTIVOS. LICENCIATURA EN INGENIERÍA INDUSTRIAL",
      "TSU EN SISTEMAS DE GESTIÓN DE CALIDAD. LICENCIATURA EN INGENIERÍA INDUSTRIAL",
      "TSU EN DESARROLLO DE SOFTWARE MULTIPLATAFORMA (JALPAN). INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL",
      "TSU EN DESARROLLO DE SOFTWARE MULTIPLATAFORMA (SJR). INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL",
      "TSU EN ENTORNOS VIRTUALES Y NEGOCIOS DIGITALES. INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL",
      "TSU EN INTELIGENCIA ARTIFICIAL - INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL",
      "TSU EN AUTOMATIZACIÓN. LICENCIATURA EN INGENIERÍA MECATRÓNICA",
      "TSU EN ROBÓTICA. LICENCIATURA EN INGENIERÍA MECATRÓNICA",
      "TSU EN AUTOMATIZACIÓN. LIC. INGENIERÍA MECATRÓNICA MIXTO (VIRTUAL)",
      "TSU EN MANTENIMIENTO INDUSTRIAL. LICENCIATURA EN INGENIERÍA EN MANTENIMIENTO INDUSTRIAL",
      "TSU EN TURISMO. LIC. GESTIÓN Y DESARROLLO TURÍSTICO"
    ],
    convocationLink: "http://200.188.14.50/admision/admision.jsp?C=2"
  },
  itq: {
    name: "TECNM Campus Querétaro",
    img: "LogosUniversidades/LOGO_ITQ.png",
    courses: [
      "INGENIERÍA EN SISTEMAS COMPUTACIONALES",
      "INGENIERÍA ELECTRÓNICA",
      "INGENIERÍA INDUSTRIAL",
      "INGENIERÍA MECÁNICA",
      "INGENIERÍA MECATRÓNICA",
      "INGENIERÍA ELÉCTRICA",
      "INGENIERÍA EN MATERIALES",
      "INGENIERÍA EN SEMICONDUCTORES",
      "INGENIERÍA EN CIENCIA DE DATOS",
      "INGENIERÍA EN LOGÍSTICA",
      "LICENCIATURA EN ARQUITECTURA",
      "LICENCIATURA EN GESTIÓN EMPRESARIAL"
    ],
    convocationLink: "https://queretaro.tecnm.mx/wp-content/uploads/2024/06/CONVOCATORIA-NUEVO-INGRESO-AGO-DIC-2024-Extraordinaria-1.pdf"
  },
  tecnm: {
    name: "TECNM Campus San Juan del Río",
    img: "LogosUniversidades/LOGO_ITQ.png",
    courses: [
      "INGENIERÍA INDUSTRIAL",
      "INGENIERÍA EN SISTEMAS COMPUTACIONALES",
      "INGENIERÍA ELECTRÓNICA",
      "INGENIERÍA EN GESTIÓN EMPRESARIAL",
      "INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIONES",
      "INGENIERÍA EN ELECTROMECÁNICA"
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
