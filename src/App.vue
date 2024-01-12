<template>
  <!-- Navbar -->
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="inicio">Inicio</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <div class="md-2">
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
            <b-link to="inicio">Espacio</b-link>
            <br>
            <b-link to="inicio">Espacio</b-link>
          </div>
        </b-sidebar>
      </div>

      <div class="">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebare {
  padding-left: 5px;
  border: 1px solid #ccc;
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
