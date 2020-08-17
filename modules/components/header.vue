<template>
  <div class="header">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-1 col-lg-2"></div>
        <div class="col-12 col-md-10 col-lg-8">
          <h1>{{ title }}</h1>
          <h2 class="mt-4">{{ subTitle }}</h2>
        </div>
        <div class="col-md-1 col-lg-2"></div>
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

<style lang="scss" scoped>
.header {
  background: url("~assets/wood-panels-top.jpg");
  padding: 20px 0;

  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1rem;
  }
}

.orange-border {
  border-bottom: 10px solid #e8963c;
}

@media screen and (min-width: 400px) {
  .header {
    h1 {
      font-size: 2.6rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .header {
    h1 {
      font-size: 3.6rem;
    }
  }
}
</style>
