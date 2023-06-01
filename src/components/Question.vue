<template>
  <div class="question d-flex flex-column bg-question fs-normal text-normal fw-400">
    <span class="fc-gray9">{{ question }}</span>
    <radio-group></radio-group>
  </div>
</template>
<script>
import RadioGroup from './RadioGroup.vue'

export default {
  components: { RadioGroup },
  props: {
    question: {
      type: String,
    },
    answers: {
      type: Array,
    },
  },
  created(){
    
  }
}
</script>
<style lang="scss" scoped>
  div:first-child {
    padding: 16px;
    span {
      margin-bottom: 16px;
    }
  }

</style>
