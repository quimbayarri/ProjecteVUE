<template>
  <div class="landing-page">
    <img src="https://vuejs.org/images/logo.png" alt="Vue Logo" class="vue-logo" />
    <h1>Benvingut al meu Projecte VUE</h1>
    <p>Aquesta és la pàgina principal</p>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
};
</script>

<style scoped>
/* Estils per centrar el contingut de la pàgina */
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh; /* Ocupa tota l'altura de la pantalla */
  text-align: center;
  background-color: #f5f5f5; /* Color de fons lleuger */
}

.vue-logo {
  width: 150px; /* Ajusta la mida de la imatge */
  margin-bottom: 20px; /* Espai entre la imatge i el text */
}

h1 {
  color: #42b883; /* Color verd del Vue */
  font-size: 2em;
  margin: 0;
}

p {
  color: #35495e; /* Color gris fosc */
  font-size: 1.2em;
}
</style>
