<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          <img alt="Vue logo" src="../assets/logo.png" />
          UEFLIX
        </h1>
      </div>
      <search />
    </div>
    <div class="row">
      <Movies />
      <MovieDetails />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from "../components/Movies";
import Search from "@/components/Search";
import MovieDetails from "../components/MovieDetails";
export default {
  name: "home",
  components: {
    Movies,
    Search,
    MovieDetails
  }
};
</script>


<style scoped>
img {
  height: 100px;
}
</style>