<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__content__item footer__content__item--right">
        <img class="footer__logo__img" src="../assets/img/logo_dark.png" width="112" height="58">
        <p class="footer__logo__caption">
          Онлайн-издание <br></br>о французском кинематографе<br></br>периода новой волны
        </p>
      </div>
      <div class="footer__content__item ">
        <router-link to="/about" class="footer__link">О проекте</router-link>
        <router-link to="/articles" class="footer__link">Статьи</router-link>
        <router-link to="/films/list" class="footer__link">Фильмы</router-link>
        <router-link to="/producers" class="footer__link">Режиссеры</router-link>
        <router-link to="/contacts" class="footer__link">Контакты</router-link>
      </div>
      <div class="footer__content__item footer__subcsr">
        <p class="footer__subscr__text">Еженедельная рассылка</p>
        <input type="email" name="email" placeholder="email" class="footer__subscr__input">
        <button class="footer__subscr__btn">Подписаться</button>
      </div>
      <div class="footer__content__item footer__content__item--right">
        <div class="header__social footer__social">
          <a class="header__social__item header__social__item--inst" href="https://www.instagram.com/">
            <span>@newwave_press</span>
          </a>
          <a class="header__social__item header__social__item--twit" href="https://www.twitter.com/">
            <div class="header__social__item__icon header__social__item__icon--twit"></div>
            <span>@newwave_press</span>
          </a>
        </div>
        <p class="footer_copyright">COPYRIGHT 2020, Анна Ракина</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped lang="scss">
.footer {
  background: #DDDDDD;
  width: 100%;
  height: 274px;
}

.footer__content {
  width: 1200px;
  max-width: 1200px;
  height: auto;
  padding: 66px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-column-gap: 20px;
}

.footer__content__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.footer__content__item--right {
  align-items: flex-end;
}

.footer__logo__caption {
  font-family: Oswald, Arial, sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 78%;
  text-align: right;
  color: #696969;
  margin-bottom: 0;
  margin-top: 18px;
}

.footer__link {
  font-family: Roboto, Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  color: #000000;
  text-decoration: none;
}

.footer__link:hover {
  cursor: pointer;
  color: #ED6862;
  transition: all 0.15s linear;
  text-decoration: none;
}

.footer__subscr__text {
  font-family: Roboto, Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;

  color: #000000;
  margin: 0;
  width: 100%;
}

.footer__subscr__input {
  background-color: #FFFFFF;
  border: none;
  border-radius: 6px;

  text-decoration: none;
  color: #696969;
  font-family: Roboto, Arial, sans-serif;
  font-weight: normal;
  font-size: 16px;

  width: calc(100% - 28px);
  padding: 10px 14px;
  margin: 18px 0;
  cursor: pointer;
}


.footer__subscr__btn {
  background-color: #ED6862;
  border: none;
  border-radius: 6px;

  color: #FFFFFF;
  font-family: Roboto, Arial, sans-serif;
  font-weight: normal;
  font-size: 16px;
  text-align: center;

  width: 100%;
  padding: 10px 14px;
  margin: 0;
}

.footer__subscr__btn:hover {
  font-size: 17px;
  transition: all 0.15s linear;
  cursor: pointer;
}

.footer__social {
  margin-top: -10px;
}

.footer_copyright {
  padding: 0;
  margin: 0;
}

.header__social {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.header__social__item {
  margin-top: 10px;
  padding: 4px 0 4px 24px;
  text-decoration: none;
  color: #696969;

  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 0 4px;
}

.header__social__item:hover {
  color: #ED6862;
  transition: all 0.2s ease-in;
  cursor: pointer;
}

.header__social__item--inst {
  background-image: url("../assets/icons/instagram.svg");
}

.header__social__item--inst:hover {
  background-image: url("../assets/icons/instagram_colored.svg");
}

.header__social__item--twit {
  background-image: url("../assets/icons/twitter.svg");
}

.header__social__item--twit:hover {
  background-image: url("../assets/icons/twitter_colored.svg");
}

@media (max-width: 1000px) {
  .footer {
    height: auto;
  }
  .footer__content {
    width: 80%;
    display: flex;
    flex-wrap: wrap;

  }
}

@media (max-width: 768px) {
  .footer__content__item {
    width: 100%;
    &:nth-child(1) {
      width: 45%;
      margin-bottom: 40px;
    }
    &:nth-child(2) {
      width: 45%;
      margin-bottom: 40px;
    }
  }
   .footer__content__item--right {
     align-items: stretch;
   }
  .header__social {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
