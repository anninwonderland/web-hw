<template>
  <el-row class="nav_row">
    <el-col :span="22" :offset="2">
      <el-menu
        :default-active="activeIndex"
        class="nav_menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#EFEFEF"
        text-color="#000000"
        active-text-color="#ED6862"
      >
        <el-menu-item index="1">О проекте</el-menu-item>
        <el-menu-item index="2">Статьи</el-menu-item>
        <el-submenu index="3">
          <template slot="title">Фильмы</template>
          <el-menu-item index="3-1">Поиск</el-menu-item>
          <el-menu-item index="3-2">Каталог</el-menu-item>
          <el-menu-item index="3-3">Рекомендательная система</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">Режиссеры</el-menu-item>
        <el-menu-item index="5">Контакты</el-menu-item>
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="scss">
.nav_row {
  background-color: #efefef;
}
</style>
