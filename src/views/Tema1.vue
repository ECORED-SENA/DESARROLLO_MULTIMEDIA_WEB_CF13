<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Implementación y publicación de la aplicación multimedia en la #[em web] 
    

    .bg_img_02.mb-5
      .row.justify-content-center
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_01.svg", alt="alt")
        .col-lg-8(data-aos="fade")
          .squareTop.mb-4
            p.mb-0 Ejecutadas las pruebas de usabilidad del proyecto multimedia y realizados los respectivos ajustes es necesario su implementación para que los usuarios puedan hacer uso de este en la #[em web]. Lo anterior implica la publicación del producto en un servidor conectado a la red de internet, para lo que se debe llevar a cabo un proceso de conexión con el proveedor de #[em hosting] o de alojamiento con el que se haya contratado el almacenamiento del aplicativo #[em web].    
          .cajon.cjn--paleBlue.p-4
            p.mb-0 Para implementar en la plataforma de internet un proyecto multimedia que consiste en un sitio #[em web], lo primero que se debe tener en cuenta es que un sitio #[em web] está compuesto por una serie de páginas. 

        .col-10.my-5(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt")

    .row.justify-content-center.mb-4
      .col-lg-9
        .squareTop.mb-4(data-aos="fade")
          p.mb-0 El sitio #[em web] anterior está conformado por tres páginas que han sido elaboradas en lenguaje de marcas HTML y las cuales contienen archivos de diferentes tipos; texto(.DOC), hoja de cálculo (.XLS), presentaciones (.PPT), video (.MP3),  e imágenes (.JPG), entre otros. 
        .row(data-aos="fade")
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col-lg
            p.mb-0 Para publicar en un sitio #[em web] se debe tener en cuenta la adquisición del #[em hosting], la selección del método para copiar en el sitio #[em web] y la copia y publicación en el sitio #[em web]. La implementación del sitio se hace mediante la publicación en la plataforma seleccionada por el equipo de diseño para que otros usuarios puedan interactuar con este. Se debe tener en cuenta que si el proyecto multimedia es un sitio que solo va a ser utilizado por los clientes de una organización en particular, entonces este se debe disponer en un servidor local mediante una red o plataforma privada (intranet) que brinda todos los recursos solo para los clientes autorizados. En este caso donde el cliente puede ser cualquier usuario, entonces la plataforma es la #[em web] en la cual se encuentran los servidores remotos, a los que puede acceder para solicitar un servicio o sitio de su interés.
      .col-lg-3.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt")

    .cajon.cjn--paleBlue.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 La arquitectura cliente-servidor, representa la plataforma de destino para la publicación del sitio #[em web] desarrollado para que cualquier tipo de cliente pueda interactuar y hacer uso de sus funcionalidades.

    .bg_img_04
      .row.justify-content-center
        .col-lg-8          
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt")

      separador

      #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade") 
        h2 1.1 Adquirir el #[em hosting] 

      .squareTop.mb-5(data-aos="fade")
        p.mb-0 Recuérdese que el #[em hosting] es un servicio de alojamiento de sitios #[em web] proporcionado por los proveedores de servidores #[em web] remotos. Allí se almacenan todas las páginas con los archivos que las componen incluyendo los contenidos, las imágenes y los videos entre otros elementos que las configuran. Se debe tener en cuenta que hay varios tipos de servicio de #[em hosting]:

      .slyderBg_01.py-4.px-5.mb-5(data-aos="fade")
        SlyderA(tipo="b")
          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              .cont.p-4
                .numb(data-number="01")
                h3 #[em Hosting] compartido
                p.mb-0 Se alojan los sitios #[em web] de diferentes cuentas de usuario los cuales están cada una en una carpeta diferente dentro del mismo servidor, pero comparten los mismos recursos de memoria y de CPU (Unidad Central de Procesamiento).      
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_05.svg', alt='')

          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              .cont.p-4
                .numb(data-number="02")
                h3 #[em Hosting] virtual o VPS
                p.mb-0 Es un servidor virtual privado el cual se ha dividido en compartimentos para que cada uno funcione como una máquina virtual independiente. Las cuentas de usuarios se encuentran en un mismo servidor y comparten recursos de memoria y CPU.     
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_06.svg', alt='')

          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              .cont.p-4
                .numb(data-number="03")
                h3 #[em Hosting] dedicado
                p.mb-0 El proveedor ofrece un servidor completo para cada cliente, con el objeto de que no comparta recursos de memoria, ni de CPU. Este servicio es el más costoso puesto que un solo equipo informático está dedicado en todas sus dimensiones para una sola cuenta de usuario.  
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_07.svg', alt='')

    .row.mb-4(data-aos="fade") 
      .col-auto
        h3.custom-H3 Características para seleccionar un plan de #[em hosting]

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t1/t1_08.svg', alt='')

      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade")
        LineaTiempoD.color-acento-botones.mb-5
          .row(numero="1" titulo="Espacio disponible")
            .col-12
              p.mb-0 Es el espacio de memoria que ocupa en el disco duro el sitio #[em web] con las páginas y archivos que la componen. Entre más espacio de almacenamiento ocupe el sitio #[em web], mayor cantidad de memoria necesita el disco duro, por ello la mayoría de los planes ofrecen capacidad ilimitada.

          .row(numero="2" titulo="Tasa de transferencia mensual")
            .col-12
              p.mb-0 Es la cantidad de información del sitio #[em web] que pueden descargar los usuarios mensualmente, medida en #[em gigabytes/seg]. Entre más descargas y transferencia de información tenga el sitio, mayor capacidad de transferencia y ancho de banda necesita, por ello ahora los proveedores ofrecen capacidad ilimitada.  

          .row(numero="3" titulo="Buzones de correo disponibles")
            .col-12
              p.mb-0 Se deben tener en cuenta el número de cuentas de correo que ofrece el proveedor y el volumen de información que permiten almacenar. Este es un factor influyente en el costo del #[em hosting], ya que incrementa la capacidad de almacenamiento del sitio #[em web].

          .row(numero="4" titulo="Bases de datos")
            .col-12
              p.mb-0 Cuando el sitio #[em web] es dinámico es decir que interactúa con el usuario a través de registro de cuentas, envío de formularios, comentarios de blog, artículos y actualizaciones a un portafolio de servicios, es necesario que el proveedor brinde el servicio de las bases de datos que permitan el procesamiento de esta información.

          .row(numero="5" titulo="Certificado SSL")
            .col-12
              p.mb-0 #[em (Secure Sockets Layer)] o conexión segura indicada en el protocolo de transferencia de información Https://. La “s” en el protocolo indica que posee la tecnología para cifrar las páginas es decir para establecer un enlace seguro entre el navegador o cliente que solicita el sitio y el servidor #[em web] que recibe la solicitud y devuelve el sitio.

    .row.justify-content-center.mb-5      
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade")
        LineaTiempoD.color-acento-botones.mb-5
          .row(numero="6" titulo="Acelerador de WordPress")
            .col-12
              p.mb-0 Cuando el sitio #[em web] maneja un gestor para la elaboración de los contenidos de las páginas, suele suceder que al ser solicitadas por el cliente se demoren en cargar las imágenes u otros elementos visuales que se hayan integrado, por lo que el proveedor puede optimizar el sitio eliminado los complementos (#[em plugins]) que no necesite el sitio para cargar la información.

          .row(numero="7" titulo="Acceso github con ssh")
            .col-12
              p.mb-0 El github es un espacio vacío donde los desarrolladores pueden hacer actualizaciones al sitio #[em web] de manera compartida y SSH es el protocolo que les permite autenticarse en el servidor con una clave de acceso para entrar y salir del github. Esta opción es de gran utilidad cuando se desea tener todas las versiones del sitio #[em web], pues el github actúa como un repositorio de versiones del producto.

          .row(numero="8" titulo="Copias de seguridad")
            .col-12
              p.mb-0 El proveedor debe asegurar que la información del sitio #[em web] se guarda constantemente en un espacio del servidor destinado para el backup (copia) diario, así no se pierden los datos almacenados del cliente y transacciones que realizan los usuarios que acceden a las páginas.

          .row(numero="9" titulo="CDN")
            .col-12
              p.mb-0 #[em (Content Delivery network)] o red de distribución de contenido. Los proveedores suelen estar conectados a una plataforma donde se encuentra un conjunto de servidores instalados en diferentes sitios geográficos para proveer varios puntos de presencia fuera del servidor de origen, para cuando el cliente solicita alguna página del sitio, esta pueda cargar más rápidamente desde otro punto de la red.  

      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t1/t1_09.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/cta_00.png", alt="alt").img120
          .col
            p.mb-0 #[strong En la imagen se observan los diferentes servicios que ofrece un proveedor de #[em hosting], catalogados en tres planes que se diferencian por el número de funcionalidades que puede tener el cliente en un momento dado. La selección del plan se hace de acuerdo con las necesidades y proyecciones que se tengan con el sitio #[em web], pues si se trata de un negocio en línea entre más robusto sea el plan mejor experiencia de usuario se puede ofrecer.] 

    .bg_img_04
      .row.justify-content-center
        .col-lg-8(data-aos="zoom-in")
           figure
              img(src="@/assets/curso/temas/t1/t1_10.png", alt="alt")

      separador

      #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade") 
        h2 1.2 Seleccionar el método para copiar el sitio <em>web</em>

      .squareTop.mb-4(data-aos="fade")
        p.mb-0 Copiar el sitio #[em web] se refiere a migrarlo o subirlo del servidor en el que fue desarrollado al servidor en el que va a estar alojado para que los clientes puedan acceder a este. A continuación se podrá conocer diferentes tipos de servidores para realizar este proceso.

    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_11.svg", alt="alt")
      .col-lg-9(data-aos="fade")
        ul.fa-ul.mb-4
          li
            i.fa-li.fas.fa-check-circle.clr--darkMint
            | #[strong Un servidor de desarrollo] es aquel en el que se lleva a cabo la programación del sitio #[em web]. Este puede ser la computadora de trabajo de la persona que realiza esta labor y puede no estar conectado todo el tiempo a la red de internet, ya que allí es donde se van a escribir las líneas de código y se realizarán los procesos para lograr el producto terminado.
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col-lg
            p.mb-0 Mientras se esté desarrollando el producto, este solo interactúa con el programador como se muestra en la imagen, salvo en los momentos en que se necesite hacer las pruebas de experiencia de usuario o cuando esté terminado y se haya publicado. 

    .row.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade")
        ul.fa-ul.mb-4
          li
            i.fa-li.fas.fa-check-circle.clr--darkMint
            | #[strong Un servidor de producción] es aquel que está configurado para atender las peticiones de los clientes de manera concurrente, por lo tanto, es donde está alojado el sitio #[em web] terminado. El servidor de producción es el #[em hosting] que está permanentemente conectado a la red de internet para que siempre sea accesible por los usuarios. 
        .squareTop.mb-0
          p Se observa cómo varios clientes pueden conectarse concurrentemente a un servidor de producción que está ubicado de manera remota en la plataforma #[em web] y este a su vez debe estar en la capacidad de responder de la misma manera a sus peticiones.

      .col-lg-3.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_12.svg", alt="alt")

    .cajon.cjn--paleBlue.p-4(data-aos="zoom-in")
      p.mb-0 Para copiar el sitio #[em web] terminado del servidor de desarrollo hasta el servidor de producción, se hace mediante el Protocolo de Transferencia de Archivos FTP, el cual realiza la copia utilizando un programa específico que se llama cliente de FTP, de los cuales hay varios en el mercado como winscp.net, smartftp.com, net2ftp, FileZilla, entre otros. 

    separador

    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade") 
      h2 1.3 Copiar y publicar el sitio <em>web</em>

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_13.svg", alt="alt")
      .col-lg-8(data-aos="fade")
        .squareTop
          p Independientemente del método seleccionado en la etapa anterior se debe realizar la transferencia o migración de los archivos que componen el sitio #[em web] para que posteriormente se compruebe su acceso y funcionamiento. Esta acción solo se puede llevar a cabo, si se tiene conexión con el servidor de producción remoto de lo contrario no se podrán cargar los archivos y el sitio #[em web] se quedará en el servidor de desarrollo sin ser publicado.   
        .row
          .col-auto.d-none.d-lg-flex
            img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
          .col-lg
            p.mb-0 #[strong Para el caso en el que se descargó el cliente de FTP de FileZilla la copia de los archivos se hace de la siguiente forma:]

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9Cx7IhDiOg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
