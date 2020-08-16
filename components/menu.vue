<template>
  <section class="menu pt-4 pb-4">
    <Item
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :description="item.description"
      :price="item.price"
    >
    </Item>
  </section>
</template>

<script>
import Item from "./item.vue";
export default {
  components: {
    Item,
  },
  data() {
    return {
      items: [
        {
          title: "Ginger Margarita",
          description: "Tequila, Ginger Syrup, Lime, Cointreau",
          price: 12,
        },
        {
          title: "High West Smash",
          description: "HW American Prairie, Lemon, Mint, Simple Syrup",
          price: 12,
        },
        {
          title: "Pamplemousse",
          description: "Gin, Grapefruit, St. Germain, Lemon, Basil",
          price: 12,
        },
        {
          title: "Smokey Paloma",
          description: "Tequila, Mezcal, Lime, Grapefruit, Jalapeno Syrup",
          price: 12,
        },
        {
          title: "APerol Spritz",
          description: "Aperol, Prosecco, Splash of soda",
          price: 13.0,
        },
        {
          title: "Ginger Margarita",
          description: "Tequila, Ginger Syrup, Lime, Cointreau",
          price: 12,
        },
        {
          title: "Elderflower Grapefruit Mimosa",
          description: "Grapefruit, Prosecco, St. Germain Splash of soda",
          price: 10,
        },
        {
          title: "Bloody Mary",
          description: "Vodka, House Made Bloody Mary Mix",
          price: 10,
        },
      ],
    };
  },
};
</script>
