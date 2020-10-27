<template>
<el-row style="margin-bottom: 80px">
  <el-col>
    <p class="title">О проекте</p>
    <p class="caption">
      NewWave&nbsp;&mdash; магический проект, посвященный истории французской новой волны.
    </p>
    <p class="caption">
      Мы&nbsp;рассказываем самыми разными способами о&nbsp;фильмах, истории их создания, режиссерах и&nbsp;других любопытных нюансах, то&nbsp;есть о&nbsp;самом интересном в&nbsp;мире.
    </p>
    <p class="title-xs">Команда</p>
    <div class="wrapper">
      <div class="team" v-for="(man, index) in team">
        <div class="item">
          <img class="img" :src="require(`@/assets/img/producers/${index+1}.jpg`)">
          <div class="item_txt">
            <p class="text_bold">{{man.name}}</p>
            <p class="text_light">{{ man.position }}</p>
          </div>

        </div>
      </div>
    </div>
  </el-col>
</el-row>
</template>

<script>
export default {
name: "About",
  data() {
  return {
    team: [
      {
        name: 'Александр Борзенко',
        position: 'Главный редактор'
      },
      {
        name: 'Павел Алексеев',
        position: 'Арт-директор'
      },
      {
        name: 'Юлия Глухова',
        position: 'Дизайнер'
      },
      {
        name: 'Андрей Усенко',
        position: 'Разработка'
      },
      {
        name: 'Роман Левин',
        position: 'Социальные сети'
      },

    ]
  }
  }
}
</script>

<style scoped lang="scss">
.title {
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 32px;
  font-family: Oswald, Arial, sans-serif;
  font-weight: bold;
}
.title-xs {
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 22px;
  font-family: Oswald, Arial, sans-serif;
  font-weight: bold;
}
.caption {
  font-size: 16px;
  width: 74%;
  margin-left: 13%;
}
.wrapper {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(90px, max-content);

  grid-column-gap: 60px;
  grid-row-gap: 10px;

}
.item {
  display: flex;
  align-items: center;
}
.img {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
}
.text_bold {
  margin-top: 0px;
  margin-bottom: 8px;
  font-size: 15px;
  text-align: left;
  font-weight: bold;
}
.text_light {
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
}
.item_txt {
  margin-left: 20px;
}
</style>
