<template>
  <section>
    <Cocktails></Cocktails>
    <Beers></Beers>
  </section>
</template>

<script>
import Cocktails from "~/modules/cocktails.vue";
import Beers from "~/modules/beers.vue";

export default {
  components: {
    Cocktails,
    Beers,
  },
};
</script>

<style></style>
