<template>
  <div class="office-guideline">
    <Header></Header>
    <div class="px-3">
      <Step 
        :currentPercent="1" :currentStep="'1.Office Guidelines'" 
        :nextStep="'Next: Health Checklist'"
        ></Step>
    </div>
    <div class="office-guideline-content d-flex flex-column mx-auto text-center">
      <span class="fw-400 fc-gray9 text-normal">Read and acknowledge the Office Guidelines</span>
      <a
        @click="isNotOpenPdf = false"
        href="https://assets.kpmg/content/dam/kpmg/ie/pdf/2020/05/6232_COVID19_Return_to_Work_PDF_May_2020.pdf"
        target="_blank"
        class="bg-layout mt-3 d-flex flex-column justify-content-center align-items-center"
      >
        <img src="../assets/iconpdf.png" alt="" />
        <span class="fw-400 text-normal fc-gray8">Tap to open PDF</span>
      </a>
    </div>
    <div class="office-guideline-button button-group">
      <Button :name="'Back'" @onClickButton="onClickEventButton($event)"></Button>
      <Button :name="'Next'" :isDisabled="isNotOpenPdf" @onClickButton="onClickEventButton($event)"></Button>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Step from '../components/Step.vue'
import Button from '../components/Button.vue'

export default {
  components: { Header, Step, Button },
  data() {
    return {
      isNotOpenPdf: true,
    }
  },
  methods: {
    onClickEventButton(type) {
      if (type === 'Back') {
        this.$router.push('/select-location')
      } else {
        this.$router.push('/health-checklist')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.office-guideline {
  &-content {
    max-width: 220px;
    margin-top: 64px;

    > a {
      width: 100%;
      height: 220px;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
        > span {
          text-decoration: underline;
        }
      }
    }
  }

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
  }

  &-button {
    margin-top: 92px;

    > button {
      flex: 1;
    }
  }
}
</style>
