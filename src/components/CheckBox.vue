<template>
  <a-checkbox @change="onChange"></a-checkbox>
</template>
<script>
export default {
  methods: {
    onChange(e) {
      this.$emit('checked', e.target.checked)
    },
  },
}
</script>
<style lang="scss" scoped></style>
