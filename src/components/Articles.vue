<template>
  <div class="section">
    <div class="card" v-for="(card, index) in cards">
      <div class="card__img">
        <div class="overlay"></div>
        <img :src="require(`@/assets/img/articles/${index + 1}.png`)">
        <p class="card__title">{{ card.title }}</p>
        <div class="card__tags">
          <span class="card__tag" v-for="tag in card.tags">#{{ tag.label }}</span>
        </div>
        <p class="card__desc">{{ card.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      cards: [
        {
          title: 'Главные фильмы французской «новой волны»',
          tags: [
            { label: 'рекомендации' },
            { label: 'фильмы' },
            { label: 'подборка' },
          ],
          desc: 'Танцующая камера, написанный на коленке сценарий, Бельмондо с синим лицом: как Годар, Трюффо и другие режиссеры экспериментировали с камерой, актерами и цветом',
        },
        {
          title: 'Французская «новая волна»: революция в кино',
          tags: [
            { label: 'теория' },
            { label: 'лекции' },
          ],
          desc: 'Содержание четвертой лекции из курса «Франция эпохи Сартра, Годара и Брижит Бардо»'
        },
        {
          title: 'Хроника кино: как возникла французская «новая волна»',
          tags: [
            { label: 'теория' },
            { label: 'история' },
          ],
          desc: 'Мы начинаем небольшой курс о знаковых кинематографических течениях, которые повлияли на современную культуру.После итальянских неореалистов пришло время французской «новой волны».'
        },
        {
          title: '10 значимых фильмов французской «новой волны» (часть 2)',
          tags: [
            { label: 'подборка' },
            { label: 'фильмы' },
          ],
          desc: 'Антон Долин продолжает рекомендовать кино для просвещения на время карантина'
        },
        {
          title: 'Путеводитель по Парижу 1950–60-х годов',
          tags: [
            { label: 'Франция' },
            { label: 'путешествия'},
            { label: 'подборка' },
            { label: 'разное' },
          ],
          desc: 'Любимые улицы, кафе, книжные магазины и клубы столичных интеллектуалов'
        },
        {
          title: '10 значимых фильмов французской «новой волны» (часть 1)',
          tags: [
            { label: 'фильмы'},
            { label: 'подборка' },
          ],
          desc: 'Рекомендованные фильмы от известного кинокритика Антона Долина для просвещения на время карантина'
        },
        {
          title: '10 историй из жизни Годара',
          tags: [
            { label: 'Годар' },
            { label: 'путешествия'},
            { label: 'интервью' },
          ],
          desc: 'Нищета, роман в письмах, прятки с кредиторами, мнимое безумие и фиктивный Рафаэль'
        },
        {
          title: 'Постмодернизм как предчувствие в теории "авторского кино" и фильмах французской "новой волны"',
          tags: [
            { label: 'теория' },
            { label: 'авторское кино'},
            { label: 'постмодернизм' },
          ],
          desc: 'В статье рассматриваются концепция «авторского кино» и идейно связанная с ней киноэстетика французской «новой волны» как одни из прологов и теоретических оснований кинематографического постмодернизма.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.section {
  min-width: 100%;
  min-height: 100%;
  margin: 60px 0 100px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: minmax(360px, max-content);

  justify-content: space-between;
  grid-row-gap: 100px;
  grid-column-gap: 60px;
}

.card {
  min-width: 240px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
}

.card:hover {
  cursor: pointer;
  box-shadow: inset 0 -3px 0 #f29591;
  transition: all 0.1s ease;
}

.card__img {
  position: relative;
  width: 100%;
  height: 120px;
}

.card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: grayscale(100%);

}

.card__title {
  font-family: Oswald, Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;

  color: #000000;
  margin: 10px 0 0;
}

.card__desc {
  font-family: Roboto, Arial, sans-serif;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: #696969;
  margin: 20px 0 0;
  text-align: justify;
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
}

.card__tags {
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.card__tag {
  font-family: Oswald, Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 78%;

  margin: 0 14px 8px 0;
  color: #ED6862;
}

.overlay {
  position: absolute;
  background-color: #ED6862;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.card:hover .overlay {
  opacity: 0.5;
  transition: all 0.15s ease;
}

.card:hover .card__img img {
  filter: contrast(1.8), grayscale(100%);
}

</style>
