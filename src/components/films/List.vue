<template>
  <div class="list">
    <p class="list__title">Фильмы новой волны</p>

    <div class="list__wrapper">
      <div class="list__item" v-for="(film, index) in films">
        <img class="film__img" :src="require(`@/assets/img/films/${index + 1}.jpg`)">
        <div class="film">
          <p class="film__title">{{ film.title }}</p>
          <div class="film__tags">
            <el-button v-for="tag in film.tags" type="text" >#{{tag.label}}</el-button>
          </div>
          <p class="film__prop">Страна: <span class="film__value">{{ film.country }}</span></p>
          <p class="film__prop">Год: <span class="film__value">{{ film.year }}</span></p>
          <p class="film__prop film__prop--last">Режиссер: <span class="film__value">{{ film.producer[0].name }}</span></p>

          <p class="film__desc" v-for="desc in film.desc">{{ desc }}</p>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "List",
  data() {
  return {
    films: [
      {
        title: 'На последнем дыхании',
        year: 1960,
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
  margin-bottom: 140px;
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
  }
}

.film {
  width: 100%;
  margin-left: 60px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__img {
    width: 220px;
    height: auto;
  }
  &__title {
    margin: 0;
    font-size: 24px;
    font-family: Oswald, Arial, sans-serif;
    font-weight: bold;
  }
  &__tags {
    margin-bottom: 16px;

  }
  &__prop {
    font-weight: bold;
    margin: 0 0 10px;
    &--last {
      margin-bottom: 24px;
    }
  }
  &__value {
    font-weight: normal;
  }
  &__desc {
    width: 90%;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    white-space: pre-line;
    text-indent: 32px;

    margin-top: 8px;
    margin-bottom: 0px;
  }
}

</style>
