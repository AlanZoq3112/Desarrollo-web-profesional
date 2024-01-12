<template>
    <div>
        <b-row>
            <!-- Sidebar -->
            <b-col class="sidebar">
                <br />
                <b-input-group>
                    <b-form-input placeholder="Buscar..."></b-form-input>
                    <b-input-group-append>
                        <b-button variant="outline-secondary">
                            <b-icon icon="search"></b-icon>
                        </b-button>
                    </b-input-group-append>
                </b-input-group>

                <br />
                <p>Vuelos:</p>
                <b-breadcrumb>
                    <b-breadcrumb-item to="RentaTuEspacio">Renta tu espacio</b-breadcrumb-item>
                    <b-breadcrumb-item to="LineasDeVuelo">Linea de vuelo</b-breadcrumb-item>
                </b-breadcrumb>

                <p>Mis vuelos:</p>
                <b-breadcrumb>
                    <b-breadcrumb-item to="VuelosCancelados">
                        Cancelados
                    </b-breadcrumb-item>
                    <b-breadcrumb-item to="ProximosVuelos">Próximos</b-breadcrumb-item>
                </b-breadcrumb>
                <p>Reservas:</p>
                <b-breadcrumb>
                    <b-breadcrumb-item to="ReservasVuelos">
                        De vuelo
                    </b-breadcrumb-item>
                    <b-breadcrumb-item to="AsientosReservados">Asientos reservados</b-breadcrumb-item>
                </b-breadcrumb>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style scoped>
.sidebar {
    padding-left: 30px;
    border: 1px solid #ccc;
    min-height: 100vh;
    box-sizing: border-box;
}
</style>