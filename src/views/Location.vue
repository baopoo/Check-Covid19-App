<template>
  <div class="location">
    <Header></Header>
    <template v-if="facility.length !== 0">
      <div class="fs-normal location-introduce">
        <h5 class="fw-500 fc-primary9">To begin, please select your country and facility location</h5>
        <span class="fw-400 fc-gray9 text-normal">Select your country:</span>
      </div>
      <div class="d-flex gap-3 location-country-group" v-if="countries">
        <card-country
          v-for="(country, index) in countries"
          :key="index"
          :country="country"
          :class="{ active: index === 0 }"
        ></card-country>
      </div>
      <div class="mt-3">
        <Question
          question="Select the facility you are entering:"
          :isChangFacility="true"
          :anwsers="facility"
        ></Question>
      </div>
      <div class="mt-3">
        <Question question="Select the status:" :anwsers="status"></Question>
      </div>
      <div class="location-group-button button-group mt-4">
        <Button 
          type="default"
          @onClickButton="onClickBack()" 
        >Back</Button>
        <Button 
          type="primary"
          @onClickButton="onClickNext()" 
        >Next</Button>
      </div>
    </template>
    <template v-else>
      <Loading height="708px" width="100%"></Loading>
    </template>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import CardCountry from '../components/CardCountry.vue'
import Question from '../components/Question.vue'
import Button from '../components/Button.vue'
import Loading from '../components/Loading.vue'

export default {
  components: { Header, CardCountry, Question, Button, Loading },
  data() {
    return {
      status: [
        { id: 1, name: 'Vistor' },
        { id: 2, name: 'Employee' },
      ],
    }
  },
  computed: {
    countries() {
      return this.$store.getters['country/listCountry']
    },
    facility() {
      return this.$store.getters['country/listFacility']
    },
  },
  beforeCreate() {
    this.$store.dispatch('country/fetchListCountry')
  },
  methods: {
    onClickBack(){
      this.$router.push('/getting-started')
    },
    onClickNext(){
      this.$router.push('/office-guidelines')
    }
  },
}
</script>
<style lang="scss" scoped>
.location {
  position: relative;

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
  &-group-button {
    > button {
      flex: 1;
    }
  }
  h5 {
    margin-bottom: 21px;
  }
}
</style>
