<template>
  <div class="drink-item">
    <h2 class="text-white">{{ title }}</h2>
    <div
      class="d-flex justify-content-between pb-2"
      v-for="(item, index) in items"
      :key="index"
    >
      <p class="text-white">
        {{ item.title }}
      </p>
      <div>
        <p class="float-right pl-5 text-white">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
  },
};
</script>

<style lang="scss">
.drink-item {
  h2 {
    font-family: "Playfair Display", serif;
    letter-spacing: 4px;
    text-decoration: underline;
  }
}
</style>
