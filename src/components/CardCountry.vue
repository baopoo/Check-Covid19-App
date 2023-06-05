<template>
  <div
    @click.stop="onClickSelectedCountry($event, country)"
    class="d-flex flex-column gap-1 bg-layout justify-content-center align-items-center"
  >
    <img alt="" :src="flagCountry" />
    <span class="text-small-12 fc-gray10">{{ country.name }}</span>
  </div>
</template>
<script>
export default {
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  computed: {
    flagCountry() {
      return this.$store.getters['country/listCountryFlag'].filter((flag) => flag.id === this.country.id)[0].imgUrl
    },
  },
  methods: {
    onClickSelectedCountry(e, country) {
      let elems = document.querySelector('.active')
      if (elems !== null) {
        elems.classList.remove('active')
      }
      if (e.target.tagName.toLowerCase() === 'div') {
        e.target.classList.add('active');
      } else {
        e.target.parentNode.classList.add('active')
      }
      this.$store.dispatch('country/fetchListFacility', country.facilityList);
      this.$store.dispatch('country/fetchContryCode', country.code);
      this.$store.dispatch('country/fetchFirstFacility', country.facilityList[0]?.name);
      this.$store.dispatch('country/fetchListQuestion', country.questionList)
    },
  },
}
</script>
<style lang="scss" scoped>
div {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  flex-shrink: 0;
  img {
    width: 47px;
    height: 31px;
    border-radius: 4px;
  }

  &:hover {
    cursor: pointer;
  }
}
.active {
  border: 3px double #0062ff;
}
</style>
