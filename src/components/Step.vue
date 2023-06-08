<template>
  <div class="step d-flex justify-content-between align-items-center">
    <div class="d-flex flex-column">
      <h5 class="fc-primary9 fw-500">{{ currentStep }}</h5>
      <span class="fw-400 fc-gray8 text-small">{{ nextStep }}</span>
    </div>
    <div>
      <a-progress
        type="circle"
        :successPercent="(currentPercent/ 3) * 100"
        :format="(percent) => percent + ' of 3'"
        :percent="currentPercent"
        :width="54"
        strokeColor="#15B982"
        :strokeWidth = "10"
        stroke = "#CDD3DB"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentStep: {
      type: String,
      required: true
    },
    nextStep: {
      type: String,
    },
    currentPercent: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.step {
  margin-top: 24px;
}
</style>
