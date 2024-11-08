<template>
  <div id="app">
    <AppHeader /> <!-- Debe estar aquí -->
    <div class="main-content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'; // Verifica la ruta
import AppFooter from './components/AppFooter.vue'; // Verifica la ruta

export default {
  name: 'App',
  components: {
    AppHeader, // Verifica el nombre aquí
    AppFooter
  }
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
