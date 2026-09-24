%Funciones 
%Validar correo
function validarCorreo(correo) {
    const patron =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);   
}

%soloLetras
function soloLetras(texto) {
    const patron =  /^[A-Za-záéíóúÑñúÁÉÍÓÚüÜ]/;
    return patron.test(texto);   
}

%longitud
function validarLongitud(numero, maxLongitud) {
    return String(numero).length <= maxLongitud;
}

%edad
function calcularEdad(fechaNacimiento) {

    const nacimiento = new Date(fechaNacimiento + "T00:00:00");
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
}

%mayoria de edad
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

%validar contraseña
function validarPassword(password) {

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[^A-Za-z0-9]/.test(password);
    const tieneLongitud = password.length >= 8;

    return (
        tieneMayuscula &&
        tieneMinuscula &&
        tieneNumero &&
        tieneEspecial &&
        tieneLongitud
    );
}
