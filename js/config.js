/* =====================================================================
   LICITUM · ABOGADOS Y NOTARIOS
   ARCHIVO DE CONTENIDO — EDITE AQUÍ TEXTOS, IMÁGENES Y CONTACTOS
   ---------------------------------------------------------------------
   • Solo cambie lo que está entre comillas "..." (no borre comas ni llaves).
   • Las imágenes van en la carpeta /img. Para cambiar una, súbala con
     otro nombre y actualice la ruta aquí, o reemplácela con el mismo nombre.
   • Iconos disponibles para servicios:
     notaria, empresa, balanza, familia, contrato, casa, trabajo, escudo,
     documento, herencia
   ===================================================================== */

window.SITIO = {

  /* ---------- DATOS GENERALES ---------- */
  general: {
    nombre: "Licitum",
    subtitulo: "Abogados y Notarios",
    tituloPestana: "Licitum | Abogados y Notarios en Guatemala",
    descripcionSEO: "Bufete Licitum, Abogados y Notarios en zona 9, Ciudad de Guatemala. Asesoría legal, notariado, derecho corporativo, civil, familia y laboral. Lic. Henry Barreda y Lic. Juan Luis Martínez.",
    logo: "img/logo-emblema.png",          // emblema del menú
    logoGrande: "img/logo-completo.png",   // logo con texto (hero y pie)
    colorPrincipal: "#143a28",             // verde
    colorAcento: "#c9a96e"                 // dorado
  },

  /* ---------- CONTACTO (se usa en toda la página) ---------- */
  contacto: {
    abogado: "Lic. Henry Barreda · Lic. Juan Luis Martínez",
    telefono: "+502 3357 7288",            // teléfono de la oficina
    whatsapp: "50233577288",               // WhatsApp de la oficina: solo números, con código de país
    email: "licitumabogados@gmail.com",
    direccion: "6ta Avenida 9-85, zona 9, Edificio Galerías Tívoli, 3er nivel, Of. 301, interior No. 5, Ciudad de Guatemala",
    horario: "Lunes a viernes: 8:00 a 17:00 · Sábado: con cita previa",
    // Mapa: busque la dirección en Google Maps > Compartir > Insertar mapa > copie solo el enlace src
    mapa: "https://www.google.com/maps?q=Edificio+Galerias+Tivoli+6a+Avenida+9-85+zona+9+Guatemala&output=embed",
    mensajeWhatsapp: "Hola Licitum, me gustaría agendar una consulta legal."
  },

  /* ---------- REDES SOCIALES (deje "" para ocultar) ---------- */
  redes: {
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: ""
  },

  /* ---------- MENÚ ---------- */
  menu: [
    { texto: "Inicio",    enlace: "#inicio" },
    { texto: "Nosotros",  enlace: "#nosotros" },
    { texto: "Servicios", enlace: "#servicios" },
    { texto: "Proceso",   enlace: "#proceso" },
    { texto: "Equipo",    enlace: "#equipo" },
    { texto: "Contacto",  enlace: "#contacto" }
  ],
  botonMenu: "Agendar consulta",

  /* ---------- PORTADA (HERO) ---------- */
  portada: {
    etiqueta: "Confianza · Legalidad · Resultados",
    titulo: "Asesoría legal y notarial con <em>orden, ética</em> y compromiso",
    texto: "En Licitum acompañamos a personas y empresas en cada paso legal: desde una escritura pública hasta la defensa de sus intereses ante los tribunales de Guatemala.",
    botonPrincipal: "Solicitar consulta",
    botonSecundario: "Ver servicios",
    imagenFondo: "img/fondo-hero.jpg"
  },

  /* ---------- FRANJA DE CIFRAS / VALORES ---------- */
  cifras: [
    { numero: "100%", texto: "Confidencialidad" },
    { numero: "24 h", texto: "Respuesta a consultas" },
    { numero: "+10",  texto: "Áreas del derecho" },
    { numero: "1 a 1", texto: "Atención personalizada" }
  ],

  /* ---------- NOSOTROS ---------- */
  nosotros: {
    etiqueta: "Quiénes somos",
    titulo: "Un bufete que pone su tranquilidad en el centro",
    parrafos: [
      "Licitum Abogados y Notarios es un bufete guatemalteco dirigido por el Lic. Henry Barreda, Abogado y Notario, junto al Lic. Juan Luis Martínez, comprometido con brindar soluciones jurídicas claras, oportunas y apegadas a la ley.",
      "Creemos que cada caso merece atención directa del profesional, comunicación honesta y una estrategia bien definida. Por eso trabajamos de forma cercana, explicando cada paso en lenguaje sencillo."
    ],
    cita: "La ley es dura, pero es la ley; y tener todo en orden bajo su imperio, es la tranquilidad que todos deseamos.",
    imagen: "img/oficina.jpg",
    puntos: [
      "Atención directa de nuestros abogados",
      "Honorarios claros desde el inicio",
      "Seguimiento constante de su caso",
      "Oficina en zona 9, de fácil acceso"
    ]
  },

  /* ---------- SERVICIOS ---------- */
  servicios: {
    etiqueta: "Áreas de práctica",
    titulo: "Soluciones legales en las que puede confiar",
    lista: [
      { icono: "notaria",  titulo: "Derecho Notarial",
        texto: "Escrituras públicas, compraventas, donaciones, mandatos, actas notariales, declaraciones juradas y autenticaciones." },
      { icono: "empresa",  titulo: "Derecho Corporativo y Mercantil",
        texto: "Constitución de sociedades, inscripciones en el Registro Mercantil, asambleas, modificaciones y asesoría empresarial." },
      { icono: "balanza",  titulo: "Litigio Civil",
        texto: "Representación en procesos judiciales, cobros, juicios ordinarios y ejecutivos, con una estrategia sólida y efectiva." },
      { icono: "familia",  titulo: "Derecho de Familia",
        texto: "Divorcios, pensiones alimenticias, guarda y custodia, reconocimiento de hijos, uniones de hecho y adopciones." },
      { icono: "herencia", titulo: "Sucesiones y Testamentos",
        texto: "Testamentos, procesos sucesorios intestados y testamentarios, partición de herencias y trámites registrales." },
      { icono: "casa",     titulo: "Derecho Inmobiliario",
        texto: "Revisión de títulos, compraventa de inmuebles, arrendamientos, desmembraciones y gestiones ante el Registro de la Propiedad." },
      { icono: "trabajo",  titulo: "Derecho Laboral",
        texto: "Asesoría a patronos y trabajadores, contratos, reglamentos internos, despidos, prestaciones y conciliaciones." },
      { icono: "contrato", titulo: "Contratos",
        texto: "Redacción y revisión de contratos civiles y mercantiles que protegen sus intereses y previenen conflictos." },
      { icono: "escudo",   titulo: "Asesoría Preventiva",
        texto: "Consultoría legal continua para personas y empresas: cumplimiento, trámites administrativos y gestión de riesgos." }
    ]
  },

  /* ---------- PROCESO DE TRABAJO ---------- */
  proceso: {
    etiqueta: "Cómo trabajamos",
    titulo: "Un proceso claro, de principio a fin",
    pasos: [
      { titulo: "Consulta inicial",  texto: "Escuchamos su caso y revisamos la documentación con total confidencialidad." },
      { titulo: "Análisis y estrategia", texto: "Le explicamos sus opciones, tiempos y costos de forma clara y por escrito." },
      { titulo: "Ejecución",          texto: "Realizamos los trámites, escritos y gestiones necesarias en su nombre." },
      { titulo: "Seguimiento",        texto: "Le mantenemos informado en cada etapa hasta concluir su asunto." }
    ]
  },

  /* ---------- EQUIPO ---------- */
  equipo: {
    etiqueta: "Nuestro equipo",
    titulo: "Profesionales comprometidos con su caso",
    texto: "Atención personalizada y directa por parte del profesional a cargo, con la seriedad que su asunto requiere.",
    miembros: [
      { nombre: "Lic. Henry Barreda", cargo: "Abogado y Notario",
        foto: "img/henry-barreda.jpg",
        descripcion: "Abogado y Notario colegiado, al frente de Licitum. Asesora a personas y empresas en materia notarial, civil, mercantil y de familia." },
      { nombre: "Lic. Juan Luis Martínez", cargo: "Abogado",
        foto: "img/juan-luis-martinez.jpg",
        descripcion: "Abogado del bufete Licitum. Brinda asesoría y acompañamiento legal a personas y empresas con atención cercana y profesional." }
      // Para agregar otro miembro, copie el bloque { ... } anterior, péguelo aquí y separe con una coma.
    ]
  },

  /* ---------- TESTIMONIOS ----------
     Agregue solo testimonios REALES de clientes (con su permiso).
     Si la lista está vacía [], la sección no se muestra.
     Ejemplo:
     { texto: "Excelente atención...", nombre: "Nombre del cliente", detalle: "Cliente" },
  */
  testimonios: {
    etiqueta: "Testimonios",
    titulo: "La confianza de nuestros clientes nos impulsa",
    lista: []
  },

  /* ---------- PREGUNTAS FRECUENTES ---------- */
  preguntas: {
    etiqueta: "Preguntas frecuentes",
    titulo: "Resolvemos sus dudas",
    lista: [
      { pregunta: "¿Cuánto cuesta una consulta?",
        respuesta: "Comuníquese con nosotros por teléfono o WhatsApp y con gusto le informamos sobre la consulta inicial y los honorarios según su caso." },
      { pregunta: "¿Atienden a empresas y a personas individuales?",
        respuesta: "Sí. Brindamos asesoría tanto a personas individuales como a empresas, comercios y organizaciones." },
      { pregunta: "¿Qué documentos debo llevar a mi primera cita?",
        respuesta: "Su DPI y cualquier documento relacionado con su caso (contratos, escrituras, notificaciones, etc.). Si tiene dudas, le orientamos antes de la cita." },
      { pregunta: "¿Puedo hacer mi consulta en línea?",
        respuesta: "Sí, podemos atenderle por videollamada o WhatsApp para una orientación inicial y coordinar la firma de documentos en oficina." },
      { pregunta: "¿Dónde están ubicados?",
        respuesta: "En el Edificio Galerías Tívoli, 6ta Avenida 9-85, zona 9, 3er nivel, oficina 301, Ciudad de Guatemala." }
    ]
  },

  /* ---------- LLAMADO A LA ACCIÓN ---------- */
  llamado: {
    titulo: "Agende su consulta hoy",
    texto: "Su caso es importante. Contáctenos y reciba la asesoría legal que necesita, en el momento que la necesita.",
    boton: "Escribir por WhatsApp"
  },

  /* ---------- FORMULARIO DE CONTACTO ----------
     El formulario abre WhatsApp con el mensaje ya escrito (no necesita servidor).
  */
  formulario: {
    etiqueta: "Contacto",
    titulo: "Hablemos de su caso",
    texto: "Complete el formulario y le responderemos a la brevedad. Toda la información es confidencial.",
    asuntos: ["Derecho Notarial", "Corporativo / Mercantil", "Familia", "Sucesiones", "Inmobiliario", "Laboral", "Litigio", "Otro"],
    boton: "Enviar por WhatsApp",
    botonCorreo: "o enviar por correo"
  },

  /* ---------- PIE DE PÁGINA ---------- */
  pie: {
    texto: "Asesoría legal y notarial con ética, confidencialidad y compromiso en Guatemala.",
    derechos: "Licitum Abogados y Notarios. Todos los derechos reservados."
  }
};
