<template>
  <div class="movies col-6">
    <h5>Movies</h5>
    <div class="row">
      <movie v-for="movie in movies" :key="movie.name" :movieProp="movie" />
    </div>
  </div>
</template>


<script>
import Movie from "../components/Movie";
export default {
  name: "movies",
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  methods: {},
  components: {
    Movie
  }
};
</script>


<style>
.movies {
  color: orange;
}
</style>