<template>
  <div class="app-container">
    <NavBar />

    <b-row>
    <b-col cols="2"><Sidebar/></b-col>
    <b-col cols="8"><router-view/></b-col>
    <b-col cols="2"></b-col>
    </b-row>
  </div>
</template>

<script setup>
import NavBar from './components/HeaderComponent/NavBar.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* Ajusta la altura según tus necesidades */
}

.main-container {
  display: flex;
  flex: 1;
}

/* Ajusta el ancho de la barra lateral según tus necesidades */
Sidebar {
  width: 50%;
  /* Puedes ajustar este valor según tus necesidades */
}

/* Estilos adicionales según tu diseño y preferencias */
</style>
