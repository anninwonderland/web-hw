<template>
  <div class="list">
    <p class="list__title">Фильмы новой волны</p>
    <el-carousel :autoplay="false" type="card" class="carousel" height="60vh">
      <el-carousel-item v-for="(item, index) in films" :key="index">
        <h3 class="title">{{ item.title }}</h3>
        <p class="producer">{{item.producer[0].name}}</p>
        <p class="year">{{item.year}}</p>
        <el-rate class="hidden-xs-only" v-model="item.rate"></el-rate>
        <img class="list__img" :src="require(`@/assets/img/films/${index + 1}.jpg`)">
        <el-rate class="hidden-sm-and-up" style="margin-top: 10px" v-model="item.rate"></el-rate>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
name: "Random",
  data() {
    return {
      films: [
        {
          title: 'На последнем дыхании',
          year: 1960,
          rate: null,
          country: 'Франция',
          producer: [
            { name: 'Жан-Люк Годар' }
          ],
          desc: ['Мишель Пуакар – настоящий прожигатель жизни, зарабатывающий на жизнь кражами дорогих машин. Он никогда не задумывается о последствиях своих криминальных выходок – просто живет, как хочет, ни на кого не рассчитывая, ни с кем не считаясь. Видимо, потому что молод и самонадеян.',
            'Но однажды, по дороге в Париж, Мишель убивает полицейского: просто для того, чтобы избежать неприятных расспросов. Но с этой минуты в его жизни больше не будет ничего, кроме неприятностей.'],
          tags: [
            { label: 'драма' },
            { label: 'криминал' }
          ]
        },
        {
          title: 'Жюль и Джим',
          year: 1962,
          rate: null,
          country: 'Франция',
          producer: [
            { name: 'Франсуа Трюффо' }
          ],
          desc: ['В начале ХХ века в Париже дружили два товарища - австриец Жюль и француз Джим. Гуляли, разговаривали, разминались в спортзале, обсуждали знакомых девушек, с которыми сентиментальному белокурому Жюлю везло меньше, чем Джиму, а счастья хотелось обоим.',
            'А потом в их жизнь вошла роковая женщина - Катрин. Жюль влюбляется и просит Джима не быть помехой его роману с девушкой. Но не все так просто. Катрин ведет себя так, будто в ее груди бьются два сердца, и одним она пламенно любит Жюля, а вторым - с не меньшей страстью Джима.'],
          tags: [
            { label: 'драма' },
            { label: 'мелодрама'}
          ]
        },
        {
          title: 'Банда аутсайдеров',
          year: 1964,
          rate: null,
          country: 'Франция',
          producer: [
            { name: 'Жан-Люк Годар' }
          ],
          desc: ['Одиль знакомится с двумя молодыми людьми, Артюром и Францом, на курсах английского языка. Они убеждают её принять участие в ограблении.'],
          tags: [
            { label: 'драма' },
            { label: 'комедия' },
            { label: 'криминал' }
          ]
        },
        {
          title: 'Две или три вещи, которые я знаю о ней',
          year: 1966,
          rate: null,
          country: 'Франция',
          producer: [
            { name: 'Жан-Люк Годар' }
          ],
          desc: ['Молодая домохозяйка вынуждена заняться древнейшей профессией, чтобы прокормить мужа и сына. Кажется, что муж даже не догадывается, чем занимается жена.',
            'Но долго ли будет длиться это неведение даже в таком большом городе, как Париж?..'],
          tags: [
            { label: 'драма' },
            { label: 'комедия' }
          ]
        },
        {
          title: 'Четыреста ударов',
          year: 1959,
          rate: null,
          country: 'Франция',
          producer: [
            { name: 'Франсуа Трюффо' }
          ],
          desc: ['Двенадцатилетний Антуан Дуанель - трудный подросток. Его мать занята личной жизнью, и у нее нет ни времени, ни желания вникнуть в проблемы сына. Отчим - человек слабохарактерный, не имеет влияния ни на жену, ни на сына. Учитель лишь наказывает мальчика.',
            'Антуан и его приятель все реже посещают школу, сбегают из дома. Ни к чему хорошему все это не приводит.'],
          tags: [
            { label: 'драма' },
            { label: 'криминал' }
          ]
        },
        {
          title: 'Любовники',
          year: 1958,
          rate: null,
          country: 'Франция',
          producer: [
            { name: 'Луи Маль' }
          ],
          desc: ['Жанна Турнье не первый год замужем. Прекрасный загородный дом, состоятельный муж, очаровательная дочка, холеный любовник, дорогие наряды, великосветские приемы… Скука.',
            'Случайно она знакомится с археологом Бернаром, который абсолютно не похож на людей ее круга и, мало того, презирает их образ жизни…'],
          tags: [
            { label: 'драма' },
            { label: 'мелодрама' }
          ]
        },
        {
          title: 'Хиросима, моя любовь',
          year: 1959,
          rate: null,
          country: 'Франция, Япония',
          producer: [
            { name: 'Ален Рене' }
          ],
          desc: ['Сложный мир ощущений, основанный на сюжетной линии короткой любви французской киноактрисы и японского архитектора в послевоенной Хиросиме. На каждого из них давит груз прошлого, с которым приходится жить каждый час.'],
          tags: [
            { label: 'драма' },
            { label: 'мелодрама' }
          ]
        },
        {
          title: 'Жить своей жизнью',
          year: 1962,
          rate: null,
          country: 'Франция',
          producer: [
            { name: 'Жан-Люк Годар' }
          ],
          desc: ['История провинциальной девушки, приехавшей покорять Париж, но оказавшейся на его задворках.'],
          tags: [
            { label: 'драма' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  margin-bottom: 60px;
  &__title {
    margin-top: 80px;
    font-size: 32px;
    font-family: Oswald, Arial, sans-serif;
    font-weight: bold;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;

  }

  &__item {
    display: flex;
    margin-top: 120px;
    &:first-of-type {
      margin-top: 40px;
    }

    &:hover .film__img {
      filter: none;
    }
    &:hover .film {
      cursor: pointer;
    }
  }
}

.list__img {
  object-fit: contain;
  height: calc(100% - 70px);
  width: auto;
}
.producer {
  font-size: 15px;
  color: #ED6862;
  margin: 6px 0 0;
}
.year {
  margin: 6px 0 12px;
}

.title {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: bold;

}

@media (max-width: 768px) {
  .list__img {
    object-fit: contain;
    height: 260px;
    width: auto;
  }
  .title {
    font-size: 14px;
  }
  .producer {
    font-size: 13px;
    color: #ED6862;
    margin: 6px 0 0;
  }
}
</style>
