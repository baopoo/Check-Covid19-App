<template>
  <div
    :style="`height: ${height} ; width: ${width}`"
    class="spin-loading d-flex justify-content-center align-items-center"
  >
    <a-spin :size="'large'" tip="Loading..." />
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.spin-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
}
</style>
