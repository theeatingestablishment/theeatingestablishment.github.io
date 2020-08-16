<template>
  <div class="header">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h1>{{ title }}</h1>
          <h2>{{ subTitle }}</h2>
        </div>
      </div>
    </div>
    <div class="orange-border"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "THE EATING ESTABLISHMENT",
      subTitle: "COCKTAILS",
    };
  },
};
</script>

<style scoped>
.header {
  background: url("~assets/wood-panels-top.jpg");
  padding: 20px 0;
}

.orange-border {
  border-bottom: 10px solid #e8963c;
}
</style>
