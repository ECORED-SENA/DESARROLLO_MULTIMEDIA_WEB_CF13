<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/intro/intro.svg", alt="alt")
      .col-lg-8
        .squareTop
          p Estimado aprendiz, en este componente formativo se podrá comprender, cómo después de culminado el proceso de diseño y desarrollo del proyecto multimedia, es apremiante colocarlo cuanto antes a disposición de los clientes en el entorno de la #[em web], no solo para su visualización, sino para su uso y apropiación.  
        .cajon.cjn--paleBlue.p-4
          p.mb-0 A continuación en el siguiente video se conocerá un poco sobre el proceso de diseño y desarrollo de los proyectos multimedia.   

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RbFx0GyerV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
