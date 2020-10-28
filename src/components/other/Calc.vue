<template>
  <el-row>
    <el-col span="24">
      <p class="title">Калькулятор</p>
    </el-col>
    <el-col :span="11" :offset="0" :xs="24" :sm="11">
      <div >
        <p style="font-size: 16px; margin: 60px 0 0px; font-weight: bold">Рассчет стоимости билетов</p>
        <p>Введите данные:</p>
        <div class="mydiv">
          <span style="width: 30%; text-align: left">Цена: </span><el-input size="small" class="input" v-model="cost" placeholder="руб"></el-input>
        </div>
        <div class="mydiv">
          <span style="width: 30%; text-align: left">Количество: </span><el-input placeholder="шт" size="small" class="input" v-model="count"></el-input>
        </div>
        <div class="mydiv">
          <span style="width: 30%; text-align: left">Тариф: </span>
          <el-select class="input"  v-model="tarif" placeholder="Выберите тариф" size="small">
            <el-option :key="1" :label="'VIP'" :value="2"></el-option>
            <el-option :key="2" :label="'Comfort'" :value="1.5"></el-option>
            <el-option :key="3" :label="'Light'" :value="1"></el-option>
          </el-select>
        </div>
        <div class="mydiv">
          <span style="width: 30%; text-align: left">Скидка: </span>
          <el-select class="input"  v-model="sale" placeholder="Выберите скидку" size="small">
            <el-option :key="1" :label="'Пенсионеры -30%'" :value="0.7"></el-option>
            <el-option :key="2" :label="'Студенты -20%'" :value="0.8"></el-option>
            <el-option :key="3" :label="'Дети -10%'" :value="0.9"></el-option>
          </el-select>
        </div>
        <el-button type="primary" size="medium" style="width: 100%" @click="calc">Рассчитать</el-button>
        <p>Стоимость билетов: {{result}}</p>

      </div>
    </el-col>
    <el-col :span="11" :offset="2" :xs="{span: 24, offset: 0}" :sm="{span: 11, offset: 2}">
      <div style="margin-bottom: 200px">
        <p style="font-size: 16px; margin: 60px 0 0px; font-weight: bold">Рассчет времени киносеанса</p>
        <p>Введите данные:</p>
        <div class="mydiv">
          <span style="width: 30%; text-align: left">Длительность: </span><el-input placeholder="мин" size="small" class="input" v-model="hours"></el-input>
        </div>
        <div class="mydiv">
          <span style="width: 30%; text-align: left">Реклама: </span>
          <el-select class="input"  v-model="adv" placeholder="Количество" size="small">
            <el-option :key="1" :label="1" :value="1"></el-option>
            <el-option :key="2" :label="2" :value="2"></el-option>
            <el-option :key="3" :label="3" :value="3"></el-option>
            <el-option :key="4" :label="4" :value="4"></el-option>
            <el-option :key="5" :label="5" :value="5"></el-option>
            <el-option :key="6" :label="6" :value="6"></el-option>
          </el-select>
        </div>
        <div class="mydiv">
          <span style="width: 30%; text-align: left">Титры: </span><el-input placeholder="мин" size="small" class="input" v-model="titry"></el-input>
        </div>
        <el-button type="primary" size="medium" style="width: 100%" @click="calc2">Рассчитать</el-button>
        <p>Длительность: {{result2}}</p>

      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {
      cost: null,
      count: null,
      tarif: null,
      sale: null,
      result: null,
      hours: null,
      adv: null,
      titry: null,
      result2: null,
    }
  },
  methods: {
    calc() {
      this.result = Number(this.cost) * Number(this.count) * Number(this.tarif) * Number(this.sale)
    },
    calc2() {
      const min = Number(this.hours) + Number(this.adv) * 10 + Number(this.titry)

      const mins = min % 60
      const hour = (min - mins) / 60
      this.result2 = `${hour} ч. ${mins} мин.`
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  margin: 0 0 0 10px;
  width: 100%;
}
.mydiv {
  display: flex;
  align-items: center;
  margin: 20px 0px;
}
.title {
  margin-top: 80px;
  margin-bottom: 0;
  font-size: 32px;
  font-family: Oswald, Arial, sans-serif;
  font-weight: bold;
}

</style>
