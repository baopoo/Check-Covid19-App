<template>
  <button
    class="button py-2 text-normal"
    :disabled="isDisabled"
    @click="onClickButton(name)"
    :style="[name === 'Back' || name === 'Done'? classButtonBack : classButtonNext, isDisabled && classButtonDisabled]"
    :type="name ==='Submit' ? 'submit' : 'button'"
  >
    {{ name }}
  </button>
</template>
<script>
export default {
  // { 'background-color': name === 'Back' ? '#FFFFFF' : '#0062FF' }
  props: {
    name: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classButtonBack: {
        color: '#5C6C7F',
        backgroundColor: '#FFFFFF',
        border: '1px solid #BEC6D0',
      },
      classButtonNext: {
        color: '#FFFFFF',
        backgroundColor: '#0062FF',
      },
      classButtonDisabled: {
        backgroundColor: '#EAEDF0',
        color: '#AFB9C5',
        border: '1px solid #BEC6D0',
      },
    }
  },
  methods: {
    onClickButton(type) {
      this.$emit('onClickButton', type)
    },
  },
}
</script>
<style lang="scss" scoped></style>
