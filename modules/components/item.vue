<template>
  <div class="menu-item container">
    <div class="row">
      <div class="col-12 text-center">
        <h3>{{ title }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <p>{{ description }} // ${{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    price: Number,
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  h3 {
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
  }
}
</style>
