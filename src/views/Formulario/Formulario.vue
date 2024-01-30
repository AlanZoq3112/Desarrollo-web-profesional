<template>
    <div>
        <br>
        <div>
            <b-form @submit.stop.prevent>
                <b-card title="Registrar Usuario" style="max-width: over;" class="mb-2">
                    <b-row>
                        <b-col>
                            <label for="feedback-name">Nombre(s)*</label>
                            <b-form-input required v-model="name" :state="validationName" id="feedback-user"></b-form-input>
                            <b-form-invalid-feedback :state="validationName">
                                No debes dejar el espacio vacio, no puedes colocar espacios al inicio ni al final, debes
                                colocar
                                menos de 50 letras y no se permiten caracteres especiales
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationName">
                                Bien
                            </b-form-valid-feedback>
                        </b-col>
                        <b-col>
                            <label for="feedback-apellido1">Primer apellido*</label>
                            <b-form-input required v-model="Apellido1" :state="validationA1"
                                id="feedback-user"></b-form-input>
                            <b-form-invalid-feedback :state="validationA1">
                                No debes dejar el espacio vacio, no puedes colocar espacios al inicio ni al final, debes
                                colocar
                                menos de 50 letras y no se permiten caracteres especiales
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationA1">
                                Nice
                            </b-form-valid-feedback>
                        </b-col>
                        <b-col>
                            <label for="feedback-apellido2">Segundo apellido</label>
                            <b-form-input v-model="Apellido2" :state="validationA2" id="feedback-user"></b-form-input>
                            <b-form-invalid-feedback :state="validationA2">
                                Este campo es opcional pero no puedes colocar espacios al inicio ni al final, debes colocar
                                menos de 50 letras y no se permiten caracteres especiales
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationA2">
                                Nice
                            </b-form-valid-feedback>
                        </b-col>
                    </b-row>
                    <br>
                    <h5>Direccion</h5>
                    <b-row>
                        <b-col>
                            <label for="feedback-cp">Código Postal*</label>
                            <b-form-input type="number" required v-model="direction.cp" :state="validateCP"></b-form-input>
                            <b-form-invalid-feedback :state="validateCP">
                                El codigo postal debe tener 5 numeros
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validateCP">
                                Nice
                            </b-form-valid-feedback>
                        </b-col>
                        <b-col>
                            <label for="feedback-calle">Calle*</label>
                            <b-form-input required v-model="direction.calle"></b-form-input>
                        </b-col>
                        <b-col>
                            <label for="feedback-numero">Número*</label>
                            <b-form-input type="number" required v-model="direction.numero"></b-form-input>
                        </b-col>
                        <b-col>
                            <label for="feedback-ciudad">Ciudad*</label>
                            <b-form-input required v-model="direction.ciudad"></b-form-input>
                        </b-col>
                    </b-row>
                    <br>

                    <b-row>
                        <b-col>
                            <label for="feedback-fecha-nacimiento">Fecha de Nacimiento*</label>
                            <b-form-input required v-model="fechaNacimiento" type="date" id="feedback-fecha-nacimiento"
                                :state="validationFechaNacimiento"></b-form-input>
                            <b-form-invalid-feedback :state="validationFechaNacimiento">
                                La fecha de nacimiento no puede ser ni presente ni futura, y el usuario debe tener al menos
                                18 años.
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationFechaNacimiento">
                                Fecha de nacimiento válida.
                            </b-form-valid-feedback>
                        </b-col>
                        <b-col>
                            <label for="feedback-correo-electronico">Correo Electrónico*</label>
                            <b-form-input required v-model="correoElectronico" type="email" id="feedback-correo-electronico"
                                :state="validationCorreoElectronico"></b-form-input>
                            <b-form-invalid-feedback :state="validationCorreoElectronico">
                                Ingresa una dirección de correo electrónico válida.
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationCorreoElectronico">
                                Correo electrónico válido.
                            </b-form-valid-feedback>
                        </b-col>
                        <b-col>
                            <label for="feedback-numero-telefono">Número Telefónico*</label>
                            <b-form-input required v-model="numeroTelefono" id="feedback-numero-telefono" :maxlength="10"
                                :state="validationNumeroTelefono"></b-form-input>
                            <b-form-invalid-feedback :state="validationNumeroTelefono">
                                Ingresa un número telefónico válido con la longitud requerida.
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationNumeroTelefono">
                                Número telefónico válido.
                            </b-form-valid-feedback>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            <label for="feedback-foto">Fotografía (PNG)*</label>
                            <b-form-file required v-model="foto" id="feedback-foto" accept=".png"
                                :state="validationFoto"></b-form-file>
                            <b-form-invalid-feedback :state="validationFoto">
                                La fotografía debe ser un archivo PNG y tener un tamaño menor a 3 MB.
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationFoto">
                                Fotografía válida.
                            </b-form-valid-feedback>
                            <br>
                            <center> <b-img :src="fotoPreview" fluid alt="Previsualización de la foto"></b-img>
                            </center>
                        </b-col>
                    </b-row>
                    <center><b-button type="submit" variant="primary" :disabled="disableSubmitButton">Enviar</b-button></center>
                </b-card>


            </b-form>
        </div>
    </div>
</template>

<script>
import { isBefore, subYears } from "date-fns";
export default {
    name: "formulario",
    data() {
        return {
            name: "",
            Apellido1: "",
            Apellido2: "",
            direction: {
                cp: "",
                calle: "",
                numero: "",
                ciudad: ""
            },
            fechaNacimiento: "",
            correoElectronico: "",
            numeroTelefono: "",
            foto: null,
        };
    },
    computed: {
        validationName() {
            return /^[^\s@#$%&](?!.*\s{2})[^\s@#$%&](.*[^\s@#$%&])?$/.test(this.name) && this.name.length > 2 && this.name.length < 50;
        },
        validationA1() {
            return /^[^\s@#$%&](?!.*\s{2})[^\s@#$%&](.*[^\s@#$%&])?$/.test(this.Apellido1) && this.Apellido1.length > 2 && this.Apellido1.length < 50;
        },
        validationA2() {
            return /^[^\s@#$%&](?!.*\s{2})[^\s@#$%&](.*[^\s@#$%&])?$/.test(this.Apellido2) && this.Apellido2.length < 50;
        },
        validateCP() {
            return this.direction.cp.length == 5;
        },
        validationFechaNacimiento() {
            const fechaNacimientoDate = new Date(this.fechaNacimiento);
            const fechaMaxima = subYears(new Date(), 18); // Restar 18 años a la fecha actual

            return (
                isBefore(fechaNacimientoDate, fechaMaxima) &&
                isBefore(fechaNacimientoDate, new Date())
            );
        },
        validationCorreoElectronico() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.correoElectronico);
        },
        validationNumeroTelefono() {
            return /^[0-9]{10}$/.test(this.numeroTelefono);
        },
        validationFoto() {
            if (!this.foto) return false; // No permitir enviar el formulario si no hay foto seleccionada
            return this.foto.size <= 3 * 1024 * 1024 && this.foto.name.toLowerCase().endsWith(".png");
        },
        fotoPreview() {
            return this.foto ? URL.createObjectURL(this.foto) : null;
        },
        disableSubmitButton() {
            return (
                !this.validationName ||
                !this.validationA1 ||
                !this.validationA2 ||
                !this.validateCP ||
                !this.validationFechaNacimiento ||
                !this.validationCorreoElectronico ||
                !this.validationNumeroTelefono ||
                !this.validationFoto
            );
        },
    }

};
</script>
<style></style>
