<template>
  <button class="button py-2 text-normal" @click="onClickButton(name)" :style="[name === 'Back' ? classButtonBack : classButtonNext]">
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
  },
  data() {
    return {
      classButtonBack: {
        color: '#5C6C7F',
        backgroundColor: '#FFFFFF',
        border: '1px solid #BEC6D0'
      },
      classButtonNext: {
        color: '#FFFFFF',
        backgroundColor: '#0062FF',
      },
    }
  },
  methods: {
    onClickButton(type){
        console.log(type);
    }
  }
}
</script>
<style lang="scss" scoped></style>
