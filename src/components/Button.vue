<template>
  <a-button
    :disabled = "isDisabled"
    size="large"
    :type="type"
    :htmlType="htmlType"
    @click="onClickButton()"
  >
    <slot></slot>
  </a-button>
</template>
<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    htmlType: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    onClickButton() {
      this.$emit('onClickButton')
    },
  },
}
</script>
<style lang="scss" scoped></style>
