<template>
  <div class="container">
    <div class="row">
      <div class="d-none d-md-flex">
        <img
          v-for="(icon, index) in icons"
          :key="index"
          src="icon.src"
          alt="icon.altText"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icons: Array,
  },
};
</script>
