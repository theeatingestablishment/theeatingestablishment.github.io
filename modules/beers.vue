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
              title: "Bud Light",
              price: 5,
            },
            {
              title: "Boddingtons",
              price: 5,
            },
            {
              title: "Big Sky Moose drool",
              price: 8,
            },
            {
              title: "Park City American Pale",
              price: 6,
            },
            {
              title: "2 Row 24k Golden",
              price: 7,
            },
            {
              title: "Little Sumpin Sumpin",
              price: 7,
            },
            {
              title: "Melvin Hubert",
              price: 7,
            },
            {
              title: "2 Row Dangerous Farmhouse",
              price: 9,
            },
          ],
        },
        {
          title: "IPA",
          items: [
            {
              title: "Pono Life, Maui Brewing",
              price: 7,
            },
            {
              title: "Ghost Rider",
              price: 7,
            },
            {
              title: "Deschutes Fresh Squeezed",
              price: 8,
            },
            {
              title: "Roha Thursday",
              price: 7,
            },
            {
              title: "Salt Fire Big In Japan",
              price: 12,
            },
            {
              title: "Melvin, IPA",
              price: 7,
            },
            {
              title: "Stone Delicious",
              price: 8,
            },
            {
              title: "Elysian Space Dust",
              price: 9,
            },
            {
              title: "Epic Tart n Juicy Sour",
              price: 8,
            },
          ],
        },
        {
          title: "Lager",
          items: [
            {
              title: "Rogue Dreamland",
              price: 5,
            },
            {
              title: "Samuel Adams",
              price: 6,
            },
            {
              title: "Wasatch Devastator",
              price: 7,
            },
          ],
        },
        {
          title: "Double IPA",
          items: [
            {
              title: "Red Rock Elephino",
              price: 12,
            },
            {
              title: "Squatter Hop Rising",
              price: 7,
            },
            {
              title: "Squatters Tropical Ipa",
              price: 7,
            },
            {
              title: "MElvin 2x4",
              price: 9,
            },
          ],
        },
        {
          title: "Pilsner",
          items: [
            {
              title: "Pacifico",
              price: 5,
            },
            {
              title: "Roadhouse Highwayman",
              price: 7,
            },
            {
              title: "Nzed Pilsner",
              price: 12,
            },
            {
              title: "Proper Czech Your Head",
              price: 10,
            },
            {
              title: "Park City Imperial",
              price: 7,
            },
          ],
        },
        {
          title: "Stout",
          items: [
            {
              title: "Saltfire Dirty CHAI",
              price: 12,
            },
            {
              title: "Epic S.O.B Coffee",
              price: 8,
            },
            {
              title: "Red Rock Drioma Imperial",
              price: 12,
            },
          ],
        },
        {
          title: "Porter",
          items: [
            {
              title: "Deschutes Black Butte",
              price: 6,
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
