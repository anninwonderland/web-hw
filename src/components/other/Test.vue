<template>
<div>
  <p class="title">Тест на знание французской новой волны</p>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <div class="card" :key="quest[currentIndex].task" v-if="!results">
        <p class="number">{{`Вопрос ${currentIndex + 1}`}}</p>
        <img class="card__img" :src="require(`@/assets/img/test/${currentIndex + 1}.jpg`)">
        <p class="task">{{quest[currentIndex].task}}</p>
        <div class="variants">
          <el-radio-group v-model="answers[currentIndex]" style="display: flex; flex-direction: column; align-items: flex-start">
            <el-radio style="margin-top: 12px; margin-left: 0" v-for="v in quest[currentIndex].variants" :label="v" :key="v.value">{{v.label}}</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div v-else :key="'else'" style="margin-bottom: 60px">
        <p class="number" style="margin-bottom: 20px">{{`Ваш результат: ${points} из 5`}}</p>
        <img class="card__img" style="margin-bottom: 20px" :src="require(`@/assets/img/results/${points}.jpg`)">
        <div v-for="(item, index) in quest"  style="font-size: 15px; margin-bottom: 10px;">
          <span>{{index + 1 + '. ' + item.task}}</span>
          <span style="color: #ED6862; margin-left: 12px">{{item.variants.find(i => i.correct).label}}</span>
        </div>
      </div>
    </transition>
    <el-button v-if="!results" style="margin-top: 40px" type="primary" :disabled="!answers[currentIndex]" @click="showNext">{{btnText}}</el-button>
  </div>
</div>
</template>

<script>
export default {
name: "Test",
  data() {
    return {
      currentIndex: 0,
      answers: [],
      points: 0,
      results: false,
      quest: [
        {
          task: 'Годом рождения «новой волны» условно считается ... год ?',
          variants: [
            {label: '1954', value: 1, correct: false, selected: false},
            {label: '1958', value: 2, correct: false, selected: false},
            {label: '1959', value: 3, correct: true, selected: false},
            {label: '1961', value: 4, correct: false, selected: false}
          ],
        },
        {
          task: 'Какой из режиссеров НЕ относится к представителям новой волны?',
          variants: [
            {label: 'Жан-Люк Годар', value: 1, correct: false, selected: false},
            {label: 'Франсуа Трюффо', value: 2, correct: false, selected: false},
            {label: 'Клодт Шаброль', value: 3, correct: false, selected: false},
            {label: 'Люк Бессон', value: 4, correct: true, selected: false}
          ],
        },
        {
          task: 'Кем являлись будущие режиссеры «Новой Волны»?',
          variants: [
            {label: 'Кинокритиками', value: 1, correct: true, selected: false},
            {label: 'Драматургами', value: 2, correct: false, selected: false},
            {label: 'Операторами', value: 3, correct: false, selected: false},
            {label: 'Чиновниками', value: 4, correct: false, selected: false}
          ],
        },
        {
          task: 'Какой технической предпосылки НЕ было во время «Новой Волны»?',
          variants: [
            {label: 'Легкие ручные камеры «Панафлекс»', value: 1, correct: false, selected: false},
            {label: 'Светочувствительная пленка с выдержкой 400', value: 2, correct: false, selected: false},
            {label: 'Синхронная запись звука', value: 3, correct: false, selected: false},
            {label: 'Появление звуковой системы Dolby Digital', value: 4, correct: true, selected: false}
          ],
        },
        {
          task: 'Какой из фильмов снял Франсуа Трюффо?',
          variants: [
            {label: 'Четыреста ударов, 1959', value: 4, correct: true, selected: false},
            {label: 'Хиросима, моя любовь, 1959', value: 1, correct: false, selected: false},
            {label: 'На последнем дыхании, 1960', value: 2, correct: false, selected: false},
            {label: 'Жить своей жизнью, 1962', value: 3, correct: false, selected: false},
          ],
        }

      ]
    }
  },
  computed: {
    btnText() {
      return (this.currentIndex === this.quest.length - 1) ? 'Узнать результат' : 'Следующий вопрос'
    }
  },
  methods: {
    showNext() {
      if (this.currentIndex !== this.quest.length -1) {
        this.currentIndex = this.currentIndex + 1
      } else {
        this.results = true
        this.answers.forEach(i => {
          if (i.correct) {
            this.points += 1
          }
        })
        if (this.points === 0) { this.points = 1}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  margin-top: 80px;
  margin-bottom: 60px;
  font-size: 32px;
  font-family: Oswald, Arial, sans-serif;
  font-weight: bold;
}

.wrapper {
  margin-bottom: 40px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__img {
  width: 40%;
  max-width: 40%;
}
.task {
  margin-top: 20px;
  font-size: 15px;
}

.number {
  margin-top: 0px;
  margin-bottom: 12px;
  font-size: 20px;
  font-family: Oswald, Arial, sans-serif;
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

@media (max-width: 1000px) {
  .card__img {
    max-width: 70%;
  }
}

@media (max-width: 768px) {
  .card__img {
    width: 70%;
    max-width: 90%;
  }
}
</style>
