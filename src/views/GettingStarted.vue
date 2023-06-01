<template>
  <div class="d-flex flex-column align-items-center fs-normal">
    <img src="../assets/logo.png" alt="" />
    <img src="../assets/protectlogo.png" alt="" />
    <h5 class="fc-gray10">Welcome and thanks for checking in with Silicon Stack!</h5>
    <p class="text-small fc-gray8 fw-400">
      In light of COVID-19 there is a mandatory Check-In System in place, to ensure maximum safety for everyone who
      comes on premise. This check-in system is required for both visitors and employees and you will be required to
      check-in on each visit to the premises.
    </p>
    <button class="button bg-primary6 fc-white text-normal fw-400" @click="onClickGoLocation()">
      Get Started</button>
    <span class="text-small-12 fc-gray6 fc-400">Version 1.0.1</span>
  </div>
</template>
<script>
export default {
  methods: {
    onClickGoLocation(){
      this.$store.dispatch("country/fetchListCountry");
      this.$router.push('/select-location');
      console.log(this.$store);
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  padding: 40px 16px 8px;

  img:first-child {
    margin-bottom: 16px;
  }

  img:nth-child(2) {
    margin-bottom: 45px;
  }
  h5 {
    margin-bottom: 12px;
    font-weight: 500;
  }
  p {
    margin-bottom: 27px;
  }

  button {
    padding: 8px 0;
    width: 100%;
    margin-bottom: 8px;

    &:hover {
      filter: brightness(1.2);
    }
  }
}
</style>
