<template>
  <div class="movie-details col-6" v-if="movie.title">
    <h5>Movie Deetz</h5>
    <h5>{{movie.title}}</h5>
    <img :src="'https://image.tmdb.org/t/p/original'+movie.poster_path" />
    <h5>{{movie.overview}}</h5>
  </div>
</template>


<script>
export default {
  name: "movie-details",
  data() {
    return {};
  },
  computed: {
    movie() {
      return this.$store.state.activeMovie;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  height: 500px;
}
</style>