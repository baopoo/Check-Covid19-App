<template>
  <div class="question d-flex flex-column bg-question fs-normal text-normal fw-400">
    <span :class="['fs-normal text-normal', isYesNoQuestion ? 'fw-500 fc-gray10' : 'fw-400 fc-gray9']"
      ><slot></slot>{{ question }}</span
    >
    <radio-group
      :answerRadios="anwsers"
      :isChangFacility="isChangFacility"
      :isYesNoQuestion="isYesNoQuestion"
      @selectValue="selectAnwser($event)"
    ></radio-group>
  </div>
</template>
<script>
import RadioGroup from './RadioGroup.vue'

export default {
  components: { RadioGroup },
  props: {
    question: {
      type: String,
      required: true,
    },
    anwsers: {
      type: Array,
      required: true,
    },
    isChangFacility: {
      type: Boolean,
      default: false,
    },
    isYesNoQuestion: {
      type: Boolean,
      default: false,
    },
    questionCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    selectAnwser(anwser) {
      let item = { code: this.questionCode, question: this.question, anwser: anwser }
      this.$store.dispatch('user/fetchListAnwser', item);
    },
  },
}
</script>
<style lang="scss" scoped>
.question {
  padding: 16px;
  span {
    margin-bottom: 16px;
  }
}
</style>
