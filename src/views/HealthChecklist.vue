<template>
  <div class="health-checklist">
    <Header></Header>
    <div class="px-3 mb-4">
      <Step 
        :current-step="'2.Health Checklist'" 
        :current-percent="2" 
        :next-step="'Next: Personal Information'"
      >
      </Step>
    </div>
    <div class="health-checklist-content px-3 pb-4">
      <span class="fw-400 text-normal fc-gray9">Please answer follow questions below:</span>
      <div class="pt-3 d-flex flex-column gap-3">
        <Question
          v-for="question in questionList"
          :key="question.id"
          :anwsers="anwsers"
          :question="question.desc"
          :questionCode="question.code"
          :isYesNoQuestion="true"
          >{{ question.id }}.</Question
        >
      </div>
    </div>
    <div class="health-checklist-button button-group">
      <Button :name="'Back'" @onClickButton="onClickEventButton($event)"></Button>
      <Button
        :name="'Next'"
        :isDisabled="questionList.length !== anwserList.length"
        @onClickButton="onClickEventButton($event)"
      ></Button>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Step from '../components/Step.vue'
import Question from '../components/Question.vue'
import Button from '../components/Button.vue'

export default {
  components: { Header, Step, Question, Button },
  data() {
    return {
      anwsers: [
        { id: 1, name: 'Yes' },
        { id: 2, name: 'No' },
      ],
      isNotChooseValue: true,
      arrAnwsers: [],
    }
  },
  computed: {
    questionList() {
      return this.$store.getters['country/listQuestion']
    },
    anwserList() {
      return this.$store.getters['user/listAnwser']
    },
  },
  methods: {
    onClickEventButton(type){
      if (type === 'Back') {
        this.$router.push('/office-guidelines')
      } else {
        this.$router.push('contact-information')
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.health-checklist {
  &-button {
    > button {
      flex: 1;
    }
  }
}
</style>
