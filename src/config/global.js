export default {
  global: {
    componenteFormativo: 'Implementación y publicación del proyecto multimedia',
    descripcionCurso:
      'Terminado el desarrollo del proyecto multimedia se debe implementar y publicar en el entorno <em>web</em> para el uso de los clientes que lo requieran, teniendo como guía el manual de usuario para su correcta utilización e igualmente el diseño de estrategias de difusión con las cuales se logre su posicionamiento en el mercado. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Implementación de la aplicación multimedia en la <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Adquirir el <em>hosting</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Seleccionar el método para copiar el sitio <em>web</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Copiar y publicar el sitio <em>web</em>',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elaborar el manual del usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño y aplicación de estrategias de <em>merchandising</em> ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de <em>merchandising</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Merchandising</em> para proyectos multimedia ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Medios de difusión de los proyectos multimedia ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Adquirir el <em>hosting</em>',
      referencia:
        'Areatecnología (s.f). Que es un servidor y tipos de servidores.',
      tipo: 'Artículo',
      link: 'https://www.areatecnologia.com/informatica/servidor-y-tipos.html ',
    },
    {
      tema: 'Adquirir el <em>hosting</em>',
      referencia: 'Areatecnología (s.f). Dominios TLD. ÁREA TECNOLOGÍA. ',
      tipo: 'Artículo',
      link: 'https://www.areatecnologia.com/nuevas-tecnologias/tld.html ',
    },
    {
      tema: 'Elaborar el manual del usuario',
      referencia:
        'Departamento Nacional de Planeación. (2020). Guía para la elaboración del manual de usuario de los sistemas de información.',
      tipo: 'PDF',
      descarga: '../downloads/Guia_Elaboracion_Manual_Usuario_del_Sistema.pdf',
    },
    {
      tema: 'Diseño y aplicación de estrategias de <em>merchandising</em>',
      referencia:
        'Gómez España, M. C. (2019). Didáctica activa del Visual Merchandising. Revista Finnova: Investigacion E Innovacion Financiera Y Organizacional, 3(6), 35-40.',
      tipo: 'Artículo',
      link: 'http://revistas.sena.edu.co/index.php/finn/article/view/2323 ',
    },
    {
      tema: 'Diseño y aplicación de estrategias de <em>merchandising</em>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Visual Merchandising.</em>',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=6-iaznLZYTg',
    },
    {
      tema: 'Diseño y aplicación de estrategias de <em>merchandising</em>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Introducción al <em>Merchandising.</em>',
      tipo: 'video',
      link: 'https://www.youtube.com/watch? v=D9O4iU9xSaA',
    },
    {
      tema: 'Diseño y aplicación de estrategias de <em>merchandising</em>',
      referencia:
        'Verastegui Tene, F. y Vargas Merino, J. (2021). Estrategias de <em>Merchandising</em>: un análisis de su efectividad para la atracción de nuevos clientes. Revista Academia & Negocios, vol. 7, núm. 1, pp. 41-54,Universidad de concepción.',
      tipo: 'Artículo',
      link:
        'https://www.redalyc.org/jatsRepo/5608/560865631006/html/index.html',
    },
  ],
  glosario: [
    {
      termino: 'Estrategia de <em>merchandising</em>',
      significado:
        'Herramienta de la mezcla promocional conformada por técnicas, características o actividades que se dan en un establecimiento o punto de venta, y que tienen como objetivo estimular la afluencia de público o aumentar las ventas en dicho establecimiento o punto de venta (crecenegocios, 2015).',
    },
    {
      termino: '<em>Hashtags</em>',
      significado:
        'Es un término asociado a asuntos o discusiones que desean ser indexadas en redes sociales, insertando el símbolo de numeral (#) antes de la palabra, frase o expresión. Cuando la combinación es publicada, se transforma en un <em>hyperlink</em> que lleva a una página con otras publicaciones relacionadas al mismo tema (rd station, 2020).',
    },
    {
      termino: '<em>Hosting</em>',
      significado:
        'Servicio en línea que permite publicar un sitio o aplicación <em>web</em> en internet (Hostinger.co, 2021).',
    },
    {
      termino: 'Manual de usuario',
      significado:
        'Documento que permite a las personas que utilizan los sistemas de información su entendimiento y uso de las funcionalidades que este posee (Departamento Nacional de Planeación, 2020). ',
    },
    {
      termino: 'Retail',
      significado:
        'Se refiere a la venta al por menor o comercio minorista. Término que está ganando cada vez más peso gracias a la transformación digital de las empresas. La finalidad de este es vender a muchos clientes un <em>stock</em> abundante (ballesteros,2021).',
    },
    {
      termino: 'Servidor de desarrollo',
      significado:
        'Entorno sobre el cual se va a trabajar la programación del proyecto, el cual debe simular las condiciones del servidor en el que va a ser puesto en marcha el servidor en última instancia (styde.net, 2015).',
    },
    {
      termino: 'Servidor de producción',
      significado:
        'Entorno donde se va a poner en marcha el proyecto para el público en general, accesible desde la <em>web</em> para cualquier usuario (styde.net, 2015).',
    },
  ],
  referencias: [
    {
      referencia:
        'Alviar, D. (2018). Elementos de <em>merchandising</em> para proyecto multimedia.',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/10209/T07860.pdf?sequence=5&isAllowed=y',
    },
    {
      referencia:
        'Ballesteros, F. (2021, marzo 17). ¿Qué es el <em>retail</em>? Significado y ejemplos. <em>[Web log post]</em>.  ',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Valencia. (2015). Como rentabilizar el punto de venta el <em>merchandising</em>',
      link:
        'https://www.camaravalencia.com/es-ES/informacion/publicaciones-de-interes/publicaciones-y-documentos/comercio-distribucion/Documents/Cuadernos_Comercio_2014/Camara-Merchandising2014.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2020). Guía para la elaboración del manual de usuario de los sistemas de información.',
      link:
        'https://colaboracion.dnp.gov.co/CDTI/Oficina%20Informatica/Sistemas%20de%20informaci%C3%B3n/Gu%C3%ADas%20Formatos%20Plantillas/Gu%C3%ADa%20para%20la%20Elaboraci%C3%B3n%20del%20Manual%20del%20Usuario%20del%20Sistema.pdf?',
    },
    {
      referencia:
        'García, G. (24 de mayo de 2018). Tipos de <em>merchandising.</em>',
      link: 'https://www.emprendepyme.net/tipos-de-merchandising.html',
    },
    {
      referencia:
        'Hotmart/blog. (16 de diciembre de 2020). ¿Qué es el <em>merchandising</em> y cómo aplicarlo en tu negocio?. ',
      link: 'https://blog.hotmart.com/es/merchandising/',
    },
    {
      referencia:
        'Hostinger.co. (4 de junio de 2021). ¿Qué es un <em>hosting</em> y cómo funciona? <em>Hosting web</em> para principiantes.   ',
      link: '',
    },
    {
      referencia:
        'Mota, R. (2 de junio de 2018). ¿Qué es <em>merchandising</em< y cómo funciona?. ',
      link: 'https://clubdeltrade.com/blog/que-es-el-merchandising/ ',
    },
    {
      referencia:
        'RD Station. (25 de septiembre de 2020). <em>#Hashtag:</em> ¿Qué significa y cómo utilizarlo de manera adecuada?.  ',
      link: '',
    },
    {
      referencia:
        'Styde.net. (2015).  Tipos de servidores y entornos. Instalación y configuración de entornos.',
      link: 'https://styde.net/tipos-de-servidores-y-entornos/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesús Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Caceres Arenales',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Revisión de guion',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
