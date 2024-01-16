<template>
    <div>
        <b-breadcrumb>
            <b-breadcrumb-item active>
                <b-icon icon="person" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                Arrendatario
            </b-breadcrumb-item>
            <b-breadcrumb-item to="catalogo-espacios">Catalogo de espacios</b-breadcrumb-item>
            <b-breadcrumb-item to="detalles-espacio">Detalles del espacio</b-breadcrumb-item>
        </b-breadcrumb>

        Este apartado es para rentar algun espacio disponible
    </div>
</template>

<script>
export default {
    name: "rentar-espacio",
}

</script>

<style scoped></style>