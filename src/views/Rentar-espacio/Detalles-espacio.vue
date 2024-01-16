<template>
    <div>
        <b-breadcrumb>
            <b-breadcrumb-item to="rentar-espacio">
                <b-icon icon="person" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                Arrendatario
            </b-breadcrumb-item>
            <b-breadcrumb-item to="catalogo-espacios">Catalogo de espacios</b-breadcrumb-item>
            <b-breadcrumb-item active to="detalles-espacio">Detalles del espacio</b-breadcrumb-item>
        </b-breadcrumb>

        Este apartado es para ver los detalles del espacio
    </div>
</template>

<script>
export default {
    name: "detalles-espacio",
}

</script>

<style scoped></style>