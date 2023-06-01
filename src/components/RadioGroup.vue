<template>
  <a-radio-group @change="onChange" :default-value="defaultValue">
    <template v-if="defaultValue">
      <a-radio v-for="anwser in answerRadios" :key="anwser.id" :style="radioStyle" :value="anwser.name">
        {{ anwser.name }}
      </a-radio>
    </template>
  </a-radio-group>
</template>
<script>
export default {
  data() {
    return {
      radioStyle: {
        display: 'flex',
        marginBottom: '16px',
        gap: '16px',
        alignItems: 'center',
        color: '#272D35',
      },
    }
  },
  computed: {
    defaultValue(){
      console.log(this.answerRadios[0]?.name);
      return this.answerRadios[0]?.name
    }
  },
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value)
    },
  },
  props: {
    answerRadios: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
