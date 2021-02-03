<template>
  <div class="search">
    <p class="search__title">Поиск по фильмотеке</p>
    <el-input placeholder="Начните вводить название, автора или ключевые слова"
              v-model="input">
      <el-button slot="append" icon="el-icon-search" @click="findFilms"></el-button>
    </el-input>
    <div class="search__examples">Например,
      <el-button type="text"
                 style="margin-left: 0"
                 @click="input = 'модернизм'">модернизм</el-button>,
      <el-button type="text"
                 style="margin-left: 0"
                 @click="input = 'Годар'">Годар</el-button> или
      <el-button type="text"
                 style="margin-left: 0"
                 @click="input = 'ручная камера'">ручная камера</el-button>
    </div>
    <p class="search__comment">{{ commentText }}</p>
  </div>

</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input: null,
      commentText: 'В нашей фильмотеке более 200 фильмов! Обязательно что-нибудь найдется:)'
    }
  },
  methods: {
    findFilms() {
      this.commentText = 'Ничего не нашлось :('
    }
  }
}
</script>

<style scoped lang="scss">

.search {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    margin-top: 80px;
    font-size: 32px;
    font-family: Oswald, Arial, sans-serif;
    font-weight: bold;
  }
  &__examples {
    text-align: left;
    align-self: flex-start;
  }

  &__comment {
    color: #696969;
    margin-top: 60px;
  }
}

</style>
