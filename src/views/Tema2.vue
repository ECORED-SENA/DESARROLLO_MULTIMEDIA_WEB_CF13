<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Elaborar el manual del usuario

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_01.svg", alt="alt")
      .col-lg-7
        .squareTop(data-aos="fade")
          p Según el DNP (2020) los desarrolladores de un sistema de información o en el caso de un proyecto multimedia, deben elaborar un documento que sirva de guía para los usuarios que lo utilizarán, de tal forma que proporcione un mayor entendimiento del uso de sus funciones. 
        .row(data-aos="fade")
          .col-auto.d-none.d-lg-flex
            img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col-lg
            p.mb-0 De acuerdo con los lineamientos trazados por el Ministerio de las Tecnologías de la información y las comunicaciones (2020),  la construcción de este documento se debe realizar en todas las etapas del proyecto, a medida que se van haciendo las entregas parciales y las pruebas de usabilidad con los usuarios finales. Teniendo en cuenta los anteriores referentes el manual del usuario se deben contemplar los siguientes aspectos:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center
      .col-xl-7
        .cajon.cjn--paleBlue.p-4.mb-4(data-aos="zoom-in")
          p.mb-0 A partir del video anterior se procede a dar a conocer un ejemplo del "Manual de usuario página web: universidadean.edu.co" junto con la plantilla y la guía que usará para realizar este ejercicio formativo.         

        .tarjeta.color-secundario.p-3.mb-4(data-aos="zoom-in")
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_01.svg").img75
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Manual de usuario elaborado para el caso estudio
                    p.mb-0 Conocer un ejemplo sencillo de manual de usuario elaborado para el caso estudio “Aplicación de Comidas Rápidas”
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ejemplo_Manual_Usuario.docx')" target="_blank")
                      span.clr--base Descargar
                      i.clr--base.fas.fa-file-download

        .tarjeta.color-secundario.p-3.mb-4(data-aos="zoom-in")
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_03.svg").img75
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Guía para la elaboración del manual de usuario de los sistemas de información 
                    p.mb-0 Conocer el material de apoyo para construir la guía para elaborar un manual.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Guia_Elaboracion_Manual_Usuario_del_Sistema.pdf')" target="_blank")
                      span.clr--base Descargar
                      i.clr--base.fas.fa-file-download

        .tarjeta.color-secundario.p-3(data-aos="zoom-in")
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_03.svg").img75
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Manual del usuario - universidad EAN
                    p.mb-0 Ejemplo de implementación de un manual de usuario para dar aconocer de manera detallada y sencilla la estructura de la web institucional de la Universidad EAN.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/manual-de-usabilidad-pagina-web.pdf')" target="_blank")
                      span.clr--base Descargar
                      i.clr--base.fas.fa-file-download

      .col-lg-5.d-none.d-xl-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_02.svg", alt="alt")


    

</template>

<script>
export default {
  name: 'Tema2',
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
