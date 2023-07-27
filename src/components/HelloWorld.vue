<template>
  <button @click="handleClick">++</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    handleClick() {
      console.log('!emit');
      this.$emit('bla');
    },
  },
};
</script>
