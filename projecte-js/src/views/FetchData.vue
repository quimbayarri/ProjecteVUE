<template>
  <div>
    <h2>Datos con Fetch API</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FetchData',
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
          this.comments = data;
        });
  }
};
</script>
