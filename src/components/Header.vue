<template>
  <el-row type="flex" class="header">
    <el-col :span="12" :offset="2">
      <div class="header__logo">
        <img class="header__logo__img" src="../assets/img/logo.png" />
        <p class="header__logo__caption">
          Онлайн-издание <br />о французском кинематографе<br />периода новой
          волны
        </p>
      </div>
    </el-col>
    <el-col :span="8">
      <el-row>
        <div class="header__info">
          <div>
            <button class="header__profile__btn">Войти</button>
            <button class="header__profile__btn header__profile__btn--active">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </el-row>
      <el-row>
        <div class="header__social">
          <a
            class="header__social__item header__social__item--inst"
            href="https://www.instagram.com/"
          >
            <span>@newwave_press</span>
          </a>
          <a
            class="header__social__item header__social__item--twit"
            href="https://www.twitter.com/"
          >
            <div
              class="header__social__item__icon header__social__item__icon--twit"
            ></div>
            <span>@newwave_press</span>
          </a>
        </div>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  height: 126px;
  margin: 32px auto;
}

.header__logo {
  display: flex;
  align-items: stretch;
}

.header__logo__img {
  width: auto;
  max-height: 90px;
  padding-right: 20px;
  border-right: 1px solid #696969;
}

.header__logo__caption {
  margin: auto 0;
  padding-left: 20px;

  font-family: "Oswald", "Arial", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  text-align: start;
}

.header__info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

.header__profile__btn {
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  background: transparent;

  font-family: "Oswald", "Arial", sans-serif;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
}

.header__profile__btn--active {
  color: #ed6862;
}

.header__profile__btn:first-of-type {
  margin-right: 20px;
}

.header__profile__btn:hover {
  color: #ed6862;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s ease-in;
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
  color: #ed6862;
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
</style>
