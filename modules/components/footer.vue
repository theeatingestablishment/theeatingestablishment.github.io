<template>
  <div class="footer">
    <div class="orange-border"></div>
    <div class="container">
      <div class="row text-center">
        <div class="d-none d-md-flex col-sm-12">
          <!-- <img
            v-for="(icon, index) in icons"
            :key="index"
            :src="icon.src"
            :alt="icon.altText"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import liquorBottle from "~/assets/liquorBottle.svg";
import martini from "~/assets/martini.svg";
import mixedDrink from "~/assets/mixedDrink.svg";
import wine from "~/assets/wine.svg";
import wineBottle from "~/assets/wineBottle.svg";

export default {
  data() {
    return {
      icons: [
        {
          src: liquorBottle,
          alt: "liquor bottle",
        },
        {
          src: martini,
          alt: "martini drink",
        },
        {
          src: mixedDrink,
          alt: "mixed drink",
        },
        {
          src: wine,
          alt: "wine glass",
        },
        {
          src: wineBottle,
          alt: "wine bottle",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background: url("~assets/wood-panels-bottom.png");
  height: 100px;
  padding: 20px 0;
}

.orange-border {
  border-bottom: 10px solid #e8963c;
}
</style>
