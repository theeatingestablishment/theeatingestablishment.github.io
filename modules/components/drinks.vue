<template>
  <div class="drink-item">
    <h2 class="text-white">{{ title }}</h2>
    <p v-for="(item, index) in items" :key="index" class="text-white">
      {{ item.title }} <span class="float-right pl-5">{{ item.price }}</span>
    </p>
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
