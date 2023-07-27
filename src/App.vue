<template>
  <div id="app">
    {{ count }}
    <hello-world @bla="increment"></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  data() {
    return {
      count: 0,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    increment() {
      console.log('!increment');
      this.count += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
