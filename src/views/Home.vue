<template>
  <div style="min-height: 100vh">
    <Header />
    <Navigation />
    <el-row>
      <el-col :span="18" :offset="3">
        <router-view></router-view>
      </el-col>
    </el-row>
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
