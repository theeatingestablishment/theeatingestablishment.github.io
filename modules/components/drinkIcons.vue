<template>
  <div class="container">
    <div class="row pt-3">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="d-none d-md-flex justify-content-between">
          <img
            v-for="(icon, index) in icons"
            :key="index"
            :src="icon.src"
            :alt="icon.altText"
          />
        </div>
        <div class="col-2"></div>
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
