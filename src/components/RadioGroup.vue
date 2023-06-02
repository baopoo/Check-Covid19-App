<template>
  <a-radio-group @change="onChange" v-model="defaultValue">
    <template>
      <a-radio v-for="anwser in answerRadios" :key="anwser.id" :style="radioStyle" :value="anwser.name">
        {{ anwser.name }}
      </a-radio>
    </template>
  </a-radio-group>
</template>
<script>
export default {
  props: {
    answerRadios: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      radioStyle: {
        display: 'flex',
        marginBottom: '16px',
        gap: '16px',
        alignItems: 'center',
        color: '#272D35',
      },
      defaultValue: ''
    }
  },
  computed: {
  },
  watch: {
    answerRadios(newAnswerRadios) {
      this.defaultValue = newAnswerRadios[0]?.name;
    }
  },
  created(){
    this.defaultValue = this.answerRadios[0]?.name;
  },

  methods: {
    onChange(e) {
      this.defaultValue = e.target.value;
      this.$store.dispatch('country/fetchFirstFacility', e.target.value);
    },
  },
}
</script>

<style lang="scss" scoped></style>
