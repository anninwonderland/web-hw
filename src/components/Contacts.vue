<template>
  <div class="contacts">
    <p class="contacts__title">Контакты</p>
    <el-row>
      <el-col :span="10">
        <p class="contacts__title contacts__title__xs">Поддержка</p>
        <p style="text-align: left; font-size: 15px">Хотите задать вопрос, исправить ошибку или попасть в&nbsp;команду? Напишите нам!</p>
        <div class="contacts__social__item">
          <img class="img" :src="require(`@/assets/icons/envelope.svg`)">
          <p class="text_bold" style="font-weight: bold">newwave_press@rambler.com</p>
        </div>

        <p class="contacts__title contacts__title__xs" style="margin-top: 40px">Follow us</p>
        <div class="contacts__social">
          <div class="contacts__social__item">
            <img class="img" :src="require(`@/assets/icons/instagram_colored.svg`)">
            <p class="text_bold">@newwave_press</p>
          </div>
          <div class="contacts__social__item">
            <img class="img" :src="require(`@/assets/icons/twitter_colored.svg`)">
            <p class="text_bold">@newwave_press_tw</p>
          </div>
          <div class="contacts__social__item">
            <img class="img" :src="require(`@/assets/icons/facebook_colored.svg`)">
            <p class="text_bold">@newwave_press_fb</p>
          </div>
        </div>
      </el-col>
      <el-col :span="10" :offset="4">
        <p class="contacts__title contacts__title__xs">Новостная рассылка</p>
        <el-form ref="form" :model="form">
          <el-form-item label="Имя">
            <el-input v-model="form.name" placeholder="Жан-Люк Годар" style="width: 100%"></el-input>
          </el-form-item>
          <el-form-item label="Почта">
            <el-input v-model="form.email" placeholder="godar@mail.com" style="width: 100%"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 30px">
            <el-button type="primary" style="width: 100%">Подписаться</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
name: "Contacts",
  data() {
    return {
      form: {
        name: '',
        mail: ''
      }
    }
  },
}
</script>

<style scoped lang="scss">
.contacts {
  margin-bottom: 140px;

  &__title {
    margin-top: 80px;
    font-size: 32px;
    font-family: Oswald, Arial, sans-serif;
    font-weight: bold;
    &__xs {
      margin-top: 10px;
      margin-bottom: 16px;
      font-size: 22px;
    }
  }
  &__social__item {
    display: flex;
    align-items: center;
  }
}

.img {
  width: 26px;
  height: 26px;
}
.text_bold {
  margin-left: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 15px;
  text-align: left;
}

</style>
