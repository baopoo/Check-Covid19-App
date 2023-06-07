<template>
  <a-select :value="defaultValue" style="width: 150px" @change="handleChange">
    <a-select-option v-for="(value, key, index) in contacts" :key="index" :value="key + value"
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
    contacts: {
      type: Object,
      required: true,
      default: {}
    },
  },
  watch: {
    contacts(newContacts){
      this.defaultValue = Object.keys(newContacts)[0] + Object.values(newContacts)[0]
      this.$emit('contactNumber', this.defaultValue.slice(this.defaultValue.indexOf('+') + 1))
    }
  },
  methods: {
    handleChange(value) {
      this.defaultValue = value
      let contactNumber = value.slice(value.indexOf('+') + 1)
      this.$emit('contactNumber', contactNumber)
    },
  },
}
</script>
<style lang="scss" scoped></style>
