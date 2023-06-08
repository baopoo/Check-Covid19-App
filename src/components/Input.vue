<template>
  <div class="form-group">
    <label for="contact-input" v-if="label !==''" class="text-small fw-400 fc-gray9">{{ label }}</label>
    <a-input 
      :placeholder="placeholder" 
      id="contact-input"
      class="form-control fw-400 fc-gray10 text-normal"
      size="large"
      :value="value"
      @change="onInputValue($event)"
    />
    <small v-if="error !== ''" class="fw-400 text-danger fst-italic">{{ error }}</small>
  </div>
</template>
<script>

export default {
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInputValue(e){
      this.$emit('input',e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
input {
    border-radius: 2px;
    padding: 8px 12px;
    
    &:focus{
        border: 1px solid #3381ff;
        box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);

  }
}
::-webkit-input-placeholder { 
    font-size: 14px;
    line-height: 22px;
    font-style: italic;
}
</style>
