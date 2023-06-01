<template>
  <div class="location">
    <Header></Header>
    <div class="fs-normal location-introduce">
      <h5 class="fw-500 fc-primary9">To begin, please select your country and facility location</h5>
      <span class="fw-400 fc-gray9 text-normal">Select your country:</span>
    </div>
    <div class="d-flex gap-3 location-country-group">
      <card-country></card-country>
      <card-country></card-country>
      <card-country></card-country>
      <card-country></card-country>
      <card-country></card-country>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import CardCountry from '../components/CardCountry.vue'

export default {
  components: { Header, CardCountry },
  computed: {

  },
  created(){
    console.log(this.$store.getters.listCountry);
  }
}
</script>
<style lang="scss" scoped>
.location {
  &-introduce {
    padding: 24px 16px 16px;
  }

  &-country-group {
    max-width: 100%;
    padding: 0 15px;
    overflow-x: auto;
    max-width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
