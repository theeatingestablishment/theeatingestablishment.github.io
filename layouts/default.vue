<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./shared/header.vue";
import Footer from "./shared/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Arvo&family=Gentium+Book+Basic&family=Lato:wght@900&display=swap");

$base-color: #e8963c;
$navy: #000b2c;

h1 {
  font-family: "Arvo", serif;
  color: $base-color;
  font-size: 2.6rem;
}

h2 {
  font-family: "Lato", sans-serif;
  color: $base-color;
  letter-spacing: 0.7rem;
}

p {
  font-family: "Gentium Book Basic", serif;
  color: $navy;
}
</style>
