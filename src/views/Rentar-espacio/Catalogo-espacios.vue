<template>
    <div>
        <b-breadcrumb>
            <b-breadcrumb-item to="rentar-espacio">
                <b-icon icon="person" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                Arrendatario
            </b-breadcrumb-item>
            <b-breadcrumb-item active to="catalogo-espacios">Catalogo de espacios</b-breadcrumb-item>
            <b-breadcrumb-item to="detalles-espacio">Detalles del espacio</b-breadcrumb-item>
        </b-breadcrumb>

        Este apartado es para ver el catalogo de los espacios
    </div>
</template>

<script>
export default {
    name: "catalogo-espacios",
}

</script>

<style scoped></style>