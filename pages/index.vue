<template>
  <section>
    <Menu></Menu>
    <Beers></Beers>
  </section>
</template>

<script>
import Menu from "~/modules/menu.vue";
import Beers from "~/modules/beers.vue";

export default {
  components: {
    Menu,
    Beers,
  },
};
</script>

<style></style>
