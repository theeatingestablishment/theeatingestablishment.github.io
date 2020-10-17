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
          title: "Ginger Margarita",
          description: "El Jimador, Ginger Syrup, Lime, Cointreau, Salted Rum",
          price: 12,
        },
        {
          title: "Guava Cosmo",
          description: "Kettle One Vodka, Guava juice, Lemon, O.J, Licor 43",
          price: 12,
        },
        {
          title: "Rum Sour",
          description: "Captain Morgan, Cinnamon Syrup, Lemon, Egg White",
          price: 13,
        },
        {
          title: "Irish Coffee",
          description: "Jameson, Irish Cream Liqueur, Coffee, Whipped Cream",
          price: 12,
        },
      ],
    };
  },
};
</script>
