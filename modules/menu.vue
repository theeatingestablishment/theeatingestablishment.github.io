<template>
  <section class="menu">
    <Header></Header>

    <div class="pt-5 pb-5">
      <Item
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :description="item.description"
        :price="item.price"
      >
      </Item>
    </div>

    <Footer></Footer>
  </section>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Item from "./components/item.vue";

export default {
  components: {
    Item,
    Header,
    Footer,
  },
  data() {
    return {
      items: [
        {
          title: "Rum Sour ",
          description: "Captain Morgan, Cinnamon Syrup, Lemon, Egg White ",
          price: 12,
        },
        {
          title: "Pamplemousse",
          description: "Gin, Grapefruit, St. Germain, Lemon, Basil",
          price: 12,
        },
        {
          title: "Kettle One Guava",
          description: "Kettle One Vodka, Guava juice, Lemon, ",
          price: 12,
        },
        {
          title: "Aperol Spritz",
          description: "Aperol, Prosecco, Splash of soda",
          price: 13.0,
        },
        {
          title: "Elderflower Grapefruit Mimosa",
          description: "Grapefruit, Prosecco, St. Germain Splash of soda",
          price: 12,
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
