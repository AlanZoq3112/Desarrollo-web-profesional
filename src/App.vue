<template>
  <div>
    <!-- Navbar -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">MatRentas</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="inicio">Inicio</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="formulario">Formulario</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Cuernavaca Morelos"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
.links {
  padding-left: 30px;
  padding-top: 10px;
}

.sidebare {
  padding-left: 5px;
  border: 1px solid #ccc;
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
