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

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container>
      <b-row>
        <!--Sidebar-->

        <b-sidebar z-index="-1" id="sidebar" shadow visible no-close-on-route-change no-header-close>
          <div class="sidebare">
            <br>
            <br />
            <b-input-group>
              <b-form-input placeholder="Buscar..."></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-secondary">
                  <b-icon icon="search"></b-icon>
                </b-button>
              </b-input-group-append>
            </b-input-group>
            <br>
            <b-link class="link" to="renta-tu-espacio">Arrentador</b-link>
            <br>
            <b-link class="link" to="inicio">Arrendatario</b-link>
          </div>
        </b-sidebar>
        <router-view></router-view>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
</script>

<style scoped>
.link {
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
