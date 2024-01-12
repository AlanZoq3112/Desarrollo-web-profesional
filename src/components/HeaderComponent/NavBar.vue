<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="inicio">Inicio</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <span style="margin-right: 10px;"><b-icon class="text-center" icon="discord"
                            style="width: 20px; height: 20px;"></b-icon></span>
                    <span style="margin-right: 10px;"><b-icon class="text-center" icon="twitter"
                            style="width: 20px; height: 20px;"></b-icon></span>
                    <span style="margin-right: 10px;"><b-icon class="text-center" icon="github"
                            style="width: 20px; height: 20px;"></b-icon></span>
                    <span style="margin-right: 10px;"><b-icon class="red" icon="twitch"
                            style="width: 20px; height: 20px;"></b-icon></span>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
.logo {
    height: 50px;
    width: 100;
}
</style>