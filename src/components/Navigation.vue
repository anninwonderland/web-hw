<template>
  <el-row class="nav_row">
    <el-col :span="18" :offset="3">
      <el-menu
        :default-active="activeIndex"
        class="nav_menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#EFEFEF"
        text-color="#000000"
        active-text-color="#ED6862"
      >
        <el-menu-item index="about">О проекте</el-menu-item>
        <el-menu-item index="articles">Статьи</el-menu-item>
        <el-submenu index="films">
          <template slot="title">Фильмы</template>
          <el-menu-item index="films/search">Поиск</el-menu-item>
          <el-menu-item index="films/lest">Каталог</el-menu-item>
          <el-menu-item index="films/recommendations">Рекомендательная система</el-menu-item>
        </el-submenu>
        <el-menu-item index="producers">Режиссеры</el-menu-item>
        <el-menu-item index="contacts">Контакты</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      activeIndex: "2",
    };
  },
  methods: {
    handleSelect(key) {
      if (this.$route.path !== `/${key}`) {
        this.$router.push(`/${key}`)
      }
    },
  },
};
</script>

<style scoped lang="scss">
.nav_row {
  background-color: #efefef;
}
</style>
