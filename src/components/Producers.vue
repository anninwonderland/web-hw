<template>
  <div class="producer">
    <p class="producer__title">Режиссёры новой волны</p>

    <div class="producer__wrapper">
      <div class="producer__item" v-for="(card, index) in producers">
        <img class="card__img" :src="require(`@/assets/img/producers/${index + 1}.jpg`)">
        <div class="card">
          <p class="card__title">{{ card.name }}</p>
          <p class="card__caption">{{ card.nameEn }}</p>
          <div class="card__separator"></div>
          <p class="card__prop">{{ card.years }}</p>
          <p class="card__prop card__counter">Фильмы: <span class="card__value">{{ card.filmsCounter }}</span></p>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Producers",
  data() {
    return {
      producers: [
        {
          name: 'Жан-Люк Годар',
          nameEn: 'Jean-Luc Godard',
          years: '3 декабря 1930 – сейчас',
          filmsCounter: 75,
        },
        {
          name: 'Клод Шаброль',
          nameEn: 'Claude Chabrol',
          years: '24 июня 1930 – 12 сентября 2010',
          filmsCounter: 164,
        },
        {
          name: 'Франсуа Трюффо',
          nameEn: 'François Roland Truffaut',
          years: '6 февраля 1932 – 21 октября 1984',
          filmsCounter: 74,
        },
        {
          name: 'Жак Деми',
          nameEn: 'Jacques Demy',
          years: '5 июня 1931 — 27 октября 1990',
          filmsCounter: 31,
        },
        {
          name: 'Ален Рене',
          nameEn: 'Alain Resnais',
          years: '3 июня 1922 — 1 марта',
          filmsCounter: 68,
        },
        {
          name: 'Жак Риветт',
          nameEn: 'Jacques Rivette',
          years: '1 марта 1928 — 29 января 2016',
          filmsCounter: 43,
        },
        {
          name: 'Эрик Ромер',
          nameEn: 'Éric Rohmer',
          years: '21 марта 1920 — 11 января 2010',
          filmsCounter: 76,
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.producer {
  margin-bottom: 140px;
  &__title {
    margin-top: 80px;
    font-size: 32px;
    font-family: Oswald, Arial, sans-serif;
    font-weight: bold;
  }

  &__wrapper {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: minmax(220px, max-content);

    grid-column-gap: 60px;
    grid-row-gap: 60px;

  }

  &__item {
    display: flex;
  }
}

.card {
  width: 100%;
  margin-left: 50px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__img {
    width: 200px;
    height: 200px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    object-fit: cover;
  }
  &__title {
    margin: 0;
    font-size: 24px;
    font-family: Oswald, Arial, sans-serif;
    font-weight: bold;
  }
  &__caption {
    margin-top: 6px;
    margin-bottom: 10px;
  }
  &__prop {
    margin: 0 0 10px;
    &--last {
      margin-bottom: 24px;
    }
  }
  &__counter {
    font-weight: bold;
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
  &__separator {
    min-height: 2px;
    min-width: 52px;
    background-color: #ED6862;
    margin: 14px 0 22px;
  }
}

</style>
