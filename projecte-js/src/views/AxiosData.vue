<template>
  <div>
    <h1>Usuarios</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> ({{ user.email }})
      </li>
    </ul>
    <p v-else>Cargando usuarios...</p>
  </div>
</template>

<script>
import axios from 'axios'; // Importa Axios

export default {
  data() {
    return {
      users: [] // Inicializa el array de usuarios
    };
  },
  mounted() {
    this.fetchUsers(); // Llama a la función para obtener usuarios al montar el componente
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://dummyjson.com/users'); // Realiza la solicitud a la API
        this.users = response.data.users; // Almacena los usuarios en la propiedad 'users'
      } catch (error) {
        console.error('Error al obtener los usuarios:', error); // Maneja el error
      }
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para este componente */
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 1em;
}
</style>