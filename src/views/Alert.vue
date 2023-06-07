<template>
  <div class="alert">
    <Header></Header>
    <div class="alert-content d-flex flex-column align-items-center fs-normal fc-gray8">
      <template v-if="isSucces">
        <img :style="'margin-top: 116px;'" src="../assets/succesess.png" alt="" />
        <h5 class="fw-500 mb-3">Check-In Successful!</h5>
        <p :style="'width: 250px; margin-bottom: 32px'" class="text-center fw-400 text-normal fc-gray8">
          Thank you for completing. You can now safely enter the office. Please be sure to check-in on each office
          visit. Have a great day!
        </p>
      </template>
      <template v-else>
        <img :style="'margin-top: 50px;'" src="../assets/fail.png" alt="" />
        <h5 class="fw-500 mb-1">Check-In Failed!</h5>
        <p :style="'width: 302px; margin-bottom: 32px'" class="text-center fw-400 text-normal fc-gray8">
          To prevent the possible spread of COVID and ensure the safety of you and your colleagues, you’re not eligible
          to enter our Silicon Stack site at this time.
        </p>
        <p :style="'width: 302px; margin-bottom: 20px'" class="text-center fw-400 text-normal fc-gray9">
          Please call your Silicon Stack Line Manager or Meeting Host immediately to advise.
        </p>
      </template>
      <Button :name="'Done'" :style="'width: 157px'" @onClickButton="onClickButtonDone($event)"></Button>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
export default {
  components: { Header, Button },
  data() {
    return {
      isSucces: true,
    }
  },
  computed: {
    userAnwsers() {
      return this.$store.getters['user/listAnwser']
    },
  },
  created() {
    this.isSucces = this.userAnwsers && !this.userAnwsers.map((item) => item.anwser).includes('Yes')
    if (this.isSucces) {
      this.$confetti.start({
        defaultType: 'heart'
      });
      setTimeout(() => {
        this.$confetti.stop();
      }, 3000);
    }
  },
  methods: {
    onClickButtonDone(type) {
      console.log(type);
      this.$router.push('/')
    },
  },
}
</script>
<style lang="scss" scoped>
.alert {
  &-content {
    min-height: 590px;
    h5 {
      margin-top: 32px;
    }

  }
}

</style>
