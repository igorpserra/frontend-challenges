<template>
  <v-carousel class="mt-3" height="650">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'Carousel',

    data: () => ({
      items: [
          {
            //Planetas
            src: 'https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png',
          },
          {
            //Naves
            src: 'https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-ships-blog-image-16x9.jpg',
          },
          {
            //veiculos
            src: 'https://lrmonline.com/wp-content/uploads/2021/05/Star-WArs-Hoth-2.jpeg',
          },
          {
            //pessoas
            src: 'https://mlhzuphabiq8.i.optimole.com/AUnRiBM-EI99CML_/w:1024/h:576/q:90/https://pordentrodatela.com.br/wp-content/uploads/2019/11/star-wars-por-dentro-da-tela.jpg',
          },
          {
            //filmes
            src: "https://cdn.unifiedcommerce.com/content/product/large/079346118045.jpg",
          },
          {
            //especies
            src: 'https://i0.wp.com/zyteheist.com/wp-content/uploads/2017/12/star-wars-battlefront-species-1280jpg-c74ff0_1280w.jpg?resize=900%2C506&ssl=1',
          },
        ],
      })
  }
</script>
