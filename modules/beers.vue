<template>
  <section class="orange pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="mt-5 mb-4">Beer</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center flex-row flex-wrap">
        <Drinks
          v-for="(drinkMenu, index) in beerMenus"
          :key="index"
          :title="drinkMenu.title"
          :items="drinkMenu.items"
          class="pl-5 pr-5 pr-md-0 pl-md-5 pb-2 mb-3 drink-menu"
        ></Drinks>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <h1 class="mt-5 mb-4">Wine List</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center flex-row flex-wrap">
        <Drinks
          v-for="(drinkMenu, index) in wineMenus"
          :key="index"
          :title="drinkMenu.title"
          :items="drinkMenu.items"
          class="pl-5 pr-5 pr-md-0 pl-md-5 pb-2 mb-3 drink-menu"
        ></Drinks>
      </div>
    </div>
  </section>
</template>

<script>
import Drinks from "./components/drinks.vue";

export default {
  components: {
    Drinks,
  },
  data() {
    return {
      beerMenus: [
        {
          title: "Ale",
          items: [
            {
              title: "Bud Light, 4.2%",
              price: 5,
            },
            {
              title: "Park City American Pale, 5.6%",
              price: 6,
            },
            {
              title: "2 Row 24k Golden, 5.7%",
              price: 7,
            },
            {
              title: "Little Sumpin Sumpin, 7.5%",
              price: 7,
            },
            {
              title: "Melvin Hubert, 6%",
              price: 7,
            },
            {
              title: "Hazelnut, 5.6%",
              price: 8,
            },
            {
              title: "Amber Ale Zolupez, 5%",
              price: 6,
            },
            {
              title: "Golden Ale Zolupez, 5%",
              price: 6,
            },
            {
              title: "Mobius Trip, 7.3%",
              price: 14,
            },
          ],
        },
        {
          title: "IPA",
          items: [
            {
              title: "Pono Life Hazy, 5%",
              price: 7,
            },
            {
              title: "Batsquatch",
              price: 7,
            },
            {
              title: "Deschutes Fresh Squeezed, 6.4%",
              price: 8,
            },
            {
              title: "Roha Thursday, 6.5%",
              price: 7,
            },
            {
              title: "Salt Fire Big In Japan, 7.1%",
              price: 12,
            },
            {
              title: "Melvin, IPA, 7.5%",
              price: 7,
            },
            {
              title: "Stone Delicious, 7.7%",
              price: 8,
            },
            {
              title: "Elysian Space Dust, 8.2%",
              price: 9,
            },
          ],
        },
        {
          title: "Lager",
          items: [
            {
              title: "Rogue Dreamland, 4.8%",
              price: 5,
            },
            {
              title: "Samuel Adams, 5%",
              price: 6,
            },
            {
              title: "Wasatch Devastator, 8%",
              price: 7,
            },
          ],
        },
        {
          title: "Double IPA",
          items: [
            {
              title: "Red Rock Elephino, 8%",
              price: 12,
            },
            {
              title: "Squatter Hop Rising, 9%",
              price: 7,
            },
            {
              title: "Squatters Tropical Ipa, 9%",
              price: 7,
            },
            {
              title: "Melvin 2x4, 9.9%",
              price: 9,
            },
          ],
        },
        {
          title: "Pilsner",
          items: [
            {
              title: "Pacifico, 4.2%",
              price: 5,
            },
            {
              title: "Roadhouse Highwayman, 4.5%",
              price: 7,
            },
            {
              title: "Nzed Pilsner, 5.4%",
              price: 12,
            },
            {
              title: "Proper Czech Your Head, 6%",
              price: 10,
            },
            {
              title: "Park City Imperial, 7.7%",
              price: 7,
            },
          ],
        },
        {
          title: "Stout",
          items: [
            {
              title: "Saltfire Dirty Chai, 6.7%",
              price: 10,
            },
            {
              title: "Red Rock Drioma Imperial, 10.1%",
              price: 12,
            },
          ],
        },
        {
          title: "Porter",
          items: [
            {
              title: "Grand Teton Mocha Porter, 5%",
              price: 7,
            },
          ],
        },
        {
          //EMPTY TO ALIGN GRID
        },
      ],
      wineMenus: [
        {
          title: "Red",
          items: [
            {
              title: "Powers Cabernet",
              price: 8,
            },
            {
              title: "Predator Cabernet",
              price: "12 / 48",
            },
            {
              title: "Whole Cluster Pinot",
              price: "14 / 55",
            },
            {
              title: "Decoy Meritage",
              price: "12 / 48",
            },
            {
              title: "Trapiche Malbec",
              price: "8/32",
            },
          ],
        },
        {
          title: "White",
          items: [
            {
              title: "Powers Chardonnay",
              price: 8,
            },
            {
              title: "Zampato Sauvignon",
              price: "9/36",
            },
            {
              title: "Riff Pinot Grigio",
              price: "9/32",
            },
            {
              title: "Sonoma Cutrer Chardonnay",
              price: "12/50",
            },
            {
              title: "Lorenza Rose",
              price: "10/44",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
$base-color: #db7608;

.orange {
  background-color: $base-color;

  h1 {
    color: #fff;
    text-transform: uppercase;
    font-family: "Playfair Display", serif;
    letter-spacing: 3px;
  }

  p {
    margin-bottom: 2px;
  }

  .container {
    max-width: 700px;
  }
}

.col {
  flex-basis: 100%;
}

.drink-menu {
  width: 100%;
}

@media screen and (min-width: 765px) {
  .col {
    flex: 1;
  }

  .drink-menu {
    width: 50%;
  }
}
</style>
