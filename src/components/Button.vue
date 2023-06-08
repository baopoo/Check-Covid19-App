<template>
  <a-button
    :disabled = "isDisabled"
    size="large"
    :type="type"
    :htmlType="htmlType"
    @click="onClickButton(name)"
  >
    {{ name }}
  </a-button>
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
    onClickButton(type) {
      this.$emit('onClickButton', type)
    },
  },
}
</script>
<style lang="scss" scoped></style>
