<template>
    <div>
        <b-breadcrumb>
            <b-breadcrumb-item to="renta-tu-espacio">
                <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                Arrentador
            </b-breadcrumb-item>
            <b-breadcrumb-item active to="">Información del espacio</b-breadcrumb-item>
            <b-breadcrumb-item to="ofertar-tu-espacio">Ofertar espacio</b-breadcrumb-item>
        </b-breadcrumb>

        Información de tu espacio
    </div>
</template>

<script>
    export default {
        name: "info-espacio"
    }
</script>

<style scoped>

</style>