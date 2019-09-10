<template>
  <div class="search col-12">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-warning"
          type="button"
          id="button-addon1"
          @click="getMovies()"
        >Search</button>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Movie Title..."
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        v-model="query"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "search",
  data() {
    return {
      query: ""
    };
  },
  computed: {},
  methods: {
    getMovies() {
      //NOTE the first parameter is the name of the action in the store, the second parameter is data we want to send. this.query is the value that we typed into the input stored on the components local data
      this.$store.dispatch("getMovies", this.query);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>