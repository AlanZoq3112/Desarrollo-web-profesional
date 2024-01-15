<template>
    <div>
        <b-breadcrumb>
            <b-breadcrumb-item to="renta-tu-espacio">
                <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                Arrentador
            </b-breadcrumb-item>
            <b-breadcrumb-item  to="info-espacio">Información del espacio</b-breadcrumb-item>
            <b-breadcrumb-item active to="ofertar-tu-espacio">Ofertar espacio</b-breadcrumb-item>
        </b-breadcrumb>

        Oferta tu espacio
    </div>
</template>

<script>
export default {
    name: "ofertar-tu-espacio",
    data() {
        return {
            items: [
                {
                    text: 'Información de tu espacio',
                    to: { name: "renta-tu-espacio" }
                },
                {
                    text: 'Ofertar espacio',
                    active: true
                },
            ]
        }
    }
}

</script>

<style scoped></style>