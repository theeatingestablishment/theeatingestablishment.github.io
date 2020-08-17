<template>
  <div class="footer">
    <div class="orange-border"></div>
    <DrinkIcons :icons="icons"></DrinkIcons>
  </div>
</template>

<script>
import DrinkIcons from "./drinkIcons.vue";

import liquorBottle from "~/assets/liquorBottle.svg";
import martini from "~/assets/martini.svg";
import mixedDrink from "~/assets/mixedDrink.svg";
import wine from "~/assets/wine.svg";
import wineBottle from "~/assets/wineBottle.svg";

export default {
  components: {
    DrinkIcons,
  },
  data() {
    return {
      icons: [
        {
          src: liquorBottle,
          alt: "liquor bottle",
        },
        {
          src: wine,
          alt: "wine glass",
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
  padding: 20px 0;
}

.orange-border {
  border-bottom: 10px solid #e8963c;
}
</style>
