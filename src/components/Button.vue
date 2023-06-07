<template>
  <button
    class="button py-2 text-normal"
    :disabled="isDisabled"
    :style="[name === 'Back' || name === 'Done'? classButtonBack : classButtonNext, isDisabled && classButtonDisabled]"
    :type="name ==='Submit' ? 'submit' : 'button'"
    @click="onClickButton(name)"
  >
    {{ name }}
  </button>
</template>
<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
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
