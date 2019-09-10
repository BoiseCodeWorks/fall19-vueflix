<template>
  <div class="movie col-12 border border-warning rounded m-3" @click="selectMovie">
    <h3>{{movieProp.title}}</h3>
    <p>{{movieProp.overview}}</p>
  </div>
</template>


<script>
export default {
  name: "movie",
  props: ["movieProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectMovie() {
      this.$store.dispatch("selectMovie", this.movieProp);
    }
  },
  components: {}
};
</script>


<style lang="scss" scoped>
</style>