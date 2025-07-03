<script setup lang="ts">
  // COMPONENT
  import MapLeaflet from './MapLeaflet.vue';
</script>

<template>
  <div class="home-page__container">
    <h2>Encontre as informações pelo CEP</h2>

    <input type="text" placeholder="Digite seu cep aqui..." />

    <MapLeaflet />
  </div>
</template>

<style scoped>
.home-page__container h2 {
  text-align: center;
}

.home-page__container input {
  display: block;

  width: 200px;
  padding: 10px;
  margin: 0 auto;

  border: none;
  border-radius: 5px;
}

.home-page__container input:focus {
  outline: none;
  box-shadow: none;
}
</style>
