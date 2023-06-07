<template>
  <div class="d-flex justify-content-between bg-gray2">
    <img src="../assets/logo.png" alt="" />
    <div class="d-flex flex-column text-small-12 align-items-end">
      <span>{{ countryCode }} - {{ facility }}</span>
      <span>{{ realDay }} {{ realTime }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      realDay: '',
      realTime: '',

    }
  },
  computed: {
    countryCode() {
      return this.$store.getters['country/countryCode']
    },
    facility() {
      return this.$store.getters['country/firstFacility']
    },
  },
  created() {
    this.realTime = this.getRealTime()
    this.realDay = this.getRealDay()
    setInterval(() => {
      this.realTime = this.getRealTime()
      this.realDay = this.getRealDay()
    }, 10000);
  },
  methods: {
    getRealDay() {
      let today = new Date()
      let dd = String(today.getDate()).padStart(2, '0')
      let mm = String(today.getMonth() + 1).padStart(2, '0')
      let yyyy = today.getFullYear()
      return dd + '/' + mm + '/' + yyyy
    },
    getRealTime() {
      let date = new Date()
      let hours = date.getHours()
      let minutes = date.getMinutes()
      let ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12
      hours = hours !== 0 ? hours : 12
      hours = hours < 10 ? '0'+hours : hours
      minutes = minutes < 10 ? '0' + minutes : minutes
      return hours + ':' + minutes + '' + ampm
    },
  },
}
</script>
<style lang="scss" scoped>
div:first-child {
  padding: 10px 16px;

  img {
    width: 100px;
    height: 35px;
  }
}
</style>
