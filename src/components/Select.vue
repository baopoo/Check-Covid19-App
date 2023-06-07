<template>
  <a-select
    show-search
    option-filter-prop="children"
    :filter-option="filterOption"
    :value="defaultValue"
    style="width: 150px"
    @change="handleChange"
  >
    <a-select-option v-for="(value, key, index) in listSelects" :key="index" :value="key + value"
      >{{ key }}: {{ value }}
    </a-select-option>
  </a-select>
</template>
<script>
export default {
  data() {
    return {
      defaultValue: '',
    }
  },
  props: {
    listSelects: {
      type: Object,
      required: true,
      default: {},
    },
  },
  watch: {
    listSelects(newListSelects) {
      this.defaultValue = Object.keys(newListSelects)[0] + Object.values(newListSelects)[0]
      this.$emit('selectedValue', this.defaultValue.slice(this.defaultValue.indexOf('+') + 1))
    },
  },
  methods: {
    handleChange(value) {
      this.defaultValue = value
      let selectedValue = value.slice(value.indexOf('+') + 1)
      this.$emit('selectedValue', selectedValue)
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
  },
}
</script>
<style lang="scss" scoped></style>
