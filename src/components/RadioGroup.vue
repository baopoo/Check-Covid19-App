<template>
  <a-radio-group v-model="value" size="large" @change="onChange">
    <a-radio :style="radioStyle" size="large" :value="1"> Option A </a-radio>
    <a-radio :style="radioStyle" size="large" :value="2"> Option A </a-radio>
    <a-radio :style="radioStyle" size="large" :value="3"> Option A </a-radio>
  </a-radio-group>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      radioStyle: {
        display: 'flex',
        marginBottom: '16px',
        gap: '16px',
        alignItems: 'center',
        color: '#272D35'
      },
    }
  },
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value)
    },
  },
  props: {
    answers: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
