<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/calculator">Calculadora</router-link></li>
        <li><router-link to="/fetch-data">Fetch Data</router-link></li>
        <li><router-link to="/axios-data">Axios Data</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
/* Estilos para el header */
header {
  background-color: #1abc9c;
  padding: 10px 0;
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: #302f2f;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  transition: background-color 0.3s, color 0.3s;
}

nav a:hover {
  background-color: #16a085;
  color: #ecf0f1;
  border-radius: 5px;
}
</style>