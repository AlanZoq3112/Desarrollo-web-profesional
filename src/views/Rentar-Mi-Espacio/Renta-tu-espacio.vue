<template>
    <div>
        <b-breadcrumb>
            <b-breadcrumb-item active>
                <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                Arrentador
            </b-breadcrumb-item>
            <b-breadcrumb-item to="info-espacio">Información del espacio</b-breadcrumb-item>
            <b-breadcrumb-item to="ofertar-tu-espacio">Ofertar espacio</b-breadcrumb-item>
        </b-breadcrumb>

        Este apartado es para todos aquellos que quieran rentar su espacio 
    </div>
</template>

<script>
export default {
    name: "renta-tu-espacio",
}

</script>

<style scoped></style>