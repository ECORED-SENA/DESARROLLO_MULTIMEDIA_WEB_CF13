(function(e){function a(a){for(var i,o,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"5d74c003","chunk-0206bfa0":"a278e582","chunk-06fde92c":"9bdfcc1a","chunk-0c047e41":"9dab790d","chunk-13a6037e":"81eda5eb","chunk-18f95272":"7a57d180","chunk-25b302c8":"c0c96807","chunk-26fc7596":"72ac93ab","chunk-2c06842c":"fb99932f","chunk-2d0e96ec":"5df2f04d","chunk-2d208d90":"cd091006","chunk-2d21d0e2":"e3102ef0","chunk-2d22c123":"07fa3afa","chunk-2d2747e2":"830388c1","chunk-2e80bb9a":"16424b70","chunk-319206de":"612f074e","chunk-32334cb6":"440e7537","chunk-3c57cd7b":"415a152e","chunk-3d6834f6":"834b8700","chunk-4cdd78c0":"57da21f4","chunk-4f2d402a":"cce421b8","chunk-4fde0a08":"42f6160f","chunk-515a8379":"3dc189c9","chunk-53ccb27e":"2eb129e7","chunk-55d286b8":"761dc6b8","chunk-59974754":"10e91e45","chunk-766a929b":"b7bdd6eb","chunk-c796899c":"fdb738a9","chunk-e8a7823a":"c1f222d4","chunk-f2df7d2c":"156dfe57","chunk-fde47172":"7234b9b3",comple:"99d868a5",creditos:"fd38ecaa",glosario:"3fe5bfc5",intro:"770badfa",referencias:"d111844c",sintesis:"4705ffac",tema1:"2a28b061",tema2:"e4c42a0c",tema3:"66818b4b",tema4:"8fea1ec6"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-06fde92c":1,"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-06fde92c":"126808df","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"2c3c16c5","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"a49a5f18","chunk-766a929b":"4e739340","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"f1695c39",creditos:"117c5d1d",glosario:"0d0de2c0",intro:"31d6cfe0",referencias:"3aa10479",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+i,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===i||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete o[e],m.parentNode.removeChild(m),n(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,n){i=r[e]=[a,n]}));a.push(i[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"2cad":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.c43b29cc.png"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,o,r,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Implementación y publicación del proyecto multimedia",descripcionCurso:"Terminado el desarrollo del proyecto multimedia se debe implementar y publicar en el entorno <em>web</em> para el uso de los clientes que lo requieran, teniendo como guía el manual de usuario para su correcta utilización e igualmente el diseño de estrategias de difusión con las cuales se logre su posicionamiento en el mercado. ",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("2cad")},{clases:["banner-principal-decorativo-2"],imagen:n("f533")},{clases:["banner-principal-decorativo-3"],imagen:n("5b70")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Implementación y publicación de la aplicación multimedia en la <em>Web</em> ",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Adquirir el <em>hosting</em>",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Seleccionar el método para copiar el sitio <em>web</em>",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Copiar y publicar el sitio <em>web</em>",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Elaborar el manual del usuario",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Diseño y aplicación de estrategias de <em>merchandising</em> ",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Tipos de <em>merchandising</em>",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"<em>Merchandising</em> para proyectos multimedia ",hash:"t_3_2"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Medios de difusión de los proyectos multimedia ",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Adquirir el <em>hosting</em>",referencia:"Areatecnología (s.f). Que es un servidor y tipos de servidores.",tipo:"Artículo",link:"https://www.areatecnologia.com/informatica/servidor-y-tipos.html "},{tema:"Adquirir el <em>hosting</em>",referencia:"Areatecnología (s.f). Dominios TLD. ÁREA TECNOLOGÍA. ",tipo:"Artículo",link:"https://www.areatecnologia.com/nuevas-tecnologias/tld.html "},{tema:"Elaborar el manual del usuario",referencia:"Departamento Nacional de Planeación. (2020). Guía para la elaboración del manual de usuario de los sistemas de información.",tipo:"PDF",descarga:"/downloads/Guia_Elaboracion_Manual_Usuario_del_Sistema.pdf"},{tema:"Diseño y aplicación de estrategias de <em>merchandising</em>",referencia:"Gómez España, M. C. (2019). Didáctica activa del Visual Merchandising. Revista Finnova: Investigacion E Innovacion Financiera Y Organizacional, 3(6), 35-40.",tipo:"Artículo",link:"http://revistas.sena.edu.co/index.php/finn/article/view/2323 "},{tema:"Diseño y aplicación de estrategias de <em>merchandising</em>",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Visual Merchandising.</em>",tipo:"video",link:"https://www.youtube.com/watch?v=6-iaznLZYTg"},{tema:"Diseño y aplicación de estrategias de <em>merchandising</em>",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2021). Introducción al <em>Merchandising.</em>",tipo:"video",link:"https://www.youtube.com/watch?v=D9O4iU9xSaA"},{tema:"Diseño y aplicación de estrategias de <em>merchandising</em>",referencia:"Verastegui Tene, F. y Vargas Merino, J. (2021). Estrategias de <em>Merchandising</em>: un análisis de su efectividad para la atracción de nuevos clientes. Revista Academia & Negocios, vol. 7, núm. 1, pp. 41-54,Universidad de concepción.",tipo:"Artículo",link:"https://www.redalyc.org/jatsRepo/5608/560865631006/html/index.html"}],glosario:[{termino:"Estrategia de <em>merchandising</em>",significado:"Herramienta de la mezcla promocional conformada por técnicas, características o actividades que se dan en un establecimiento o punto de venta, y que tienen como objetivo estimular la afluencia de público o aumentar las ventas en dicho establecimiento o punto de venta (crecenegocios, 2015)."},{termino:"<em>Hashtags</em>",significado:"Es un término asociado a asuntos o discusiones que desean ser indexadas en redes sociales, insertando el símbolo de numeral (#) antes de la palabra, frase o expresión. Cuando la combinación es publicada, se transforma en un <em>hyperlink</em> que lleva a una página con otras publicaciones relacionadas al mismo tema (rd station, 2020)."},{termino:"<em>Hosting</em>",significado:"Servicio en línea que permite publicar un sitio o aplicación <em>web</em> en internet (Hostinger.co, 2021)."},{termino:"Manual de usuario",significado:"Documento que permite a las personas que utilizan los sistemas de información su entendimiento y uso de las funcionalidades que este posee (Departamento Nacional de Planeación, 2020). "},{termino:"Retail",significado:"Se refiere a la venta al por menor o comercio minorista. Término que está ganando cada vez más peso gracias a la transformación digital de las empresas. La finalidad de este es vender a muchos clientes un <em>stock</em> abundante (ballesteros,2021)."},{termino:"Servidor de desarrollo",significado:"Entorno sobre el cual se va a trabajar la programación del proyecto, el cual debe simular las condiciones del servidor en el que va a ser puesto en marcha el servidor en última instancia (styde.net, 2015)."},{termino:"Servidor de producción",significado:"Entorno donde se va a poner en marcha el proyecto para el público en general, accesible desde la <em>web</em> para cualquier usuario (styde.net, 2015)."}],referencias:[{referencia:"Alviar, D. (2018). Diseño de una propuesta de <em>marketing</em> digital para la organización visión creativa",link:"https://red.uao.edu.co/bitstream/handle/10614/10209/T07860.pdf?sequence=5&isAllowed=y"},{referencia:"Ballesteros, F. (2021, marzo 17). ¿Qué es el <em>retail</em>? Significado y ejemplos. <em>[Web log post]</em>.  ",link:""},{referencia:"Cámara de Comercio de Valencia. (2015). Como rentabilizar el punto de venta el <em>merchandising</em>",link:"https://www.camaravalencia.com/es-ES/informacion/publicaciones-de-interes/publicaciones-y-documentos/comercio-distribucion/Documents/Cuadernos_Comercio_2014/Camara-Merchandising2014.pdf"},{referencia:"Departamento Nacional de Planeación. (2020). Guía para la elaboración del manual de usuario de los sistemas de información.",link:"https://colaboracion.dnp.gov.co/CDTI/Oficina%20Informatica/Sistemas%20de%20informaci%C3%B3n/Gu%C3%ADas%20Formatos%20Plantillas/Gu%C3%ADa%20para%20la%20Elaboraci%C3%B3n%20del%20Manual%20del%20Usuario%20del%20Sistema.pdf?"},{referencia:"García, G. (24 de mayo de 2018). Tipos de <em>merchandising.</em>",link:"https://www.emprendepyme.net/tipos-de-merchandising.html"},{referencia:"Hotmart/blog. (16 de diciembre de 2020). ¿Qué es el <em>merchandising</em> y cómo aplicarlo en tu negocio?. ",link:"https://blog.hotmart.com/es/merchandising/"},{referencia:"Hostinger.co. (4 de junio de 2021). ¿Qué es un <em>hosting</em> y cómo funciona? <em>Hosting web</em> para principiantes.   ",link:""},{referencia:"Mota, R. (2 de junio de 2018). ¿Qué es <em>merchandising</em> y cómo funciona?. ",link:"https://clubdeltrade.com/blog/que-es-el-merchandising/ "},{referencia:"RD Station. (25 de septiembre de 2020). <em>#Hashtag:</em> ¿Qué significa y cómo utilizarlo de manera adecuada?.  ",link:""},{referencia:"Styde.net. (2015).  Tipos de servidores y entornos. Instalación y configuración de entornos.",link:"https://styde.net/tipos-de-servidores-y-entornos/ "}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Eduardo José Velasco Acevedo",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica"},{nombre:"Juan Manuel Reyes Ramírez",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica"},{nombre:"Carlos Andrés Suescun Lesmes",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica"},{nombre:"Olga Lucía Mogollón Carvajal",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica"},{nombre:"Caterine Bedoya Mejía",cargo:"Experto temático",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Experto temático",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jesús Antonio Vecino Valero",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carlos Eduardo Garavito Parada",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ernesto Navarro Jaimes",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"John Jairo Arciniegas González",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Caceres Arenales",cargo:"Validación ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yicelly Estefania Mesa Silva",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Revisión de guion",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Magdi Khalifah",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=v;var k=n("9224");i["a"].prototype.$package=k,new i["a"]({router:g,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},"5b70":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.4601ed36.png"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.e717c61c.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.3491580d.png"},f533:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.b20e0723.png"}});
//# sourceMappingURL=app.b0f89739.js.map