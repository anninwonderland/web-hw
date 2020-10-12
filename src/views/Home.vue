<template>
  <div>
    <Header />
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
    Navigation
  }
};
</script>
