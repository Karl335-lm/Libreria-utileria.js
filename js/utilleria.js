
// 1. Valida el formato de un correo electrónico
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// 2. Valida que el texto solo contenga letras mediante una expresion regular
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto) && texto.trim().length > 0;
}

// 3. Valida que un valor sea numérico 
function validarLongitud(numero, maxLongitud) {
    const numStr = numero.toString().trim();
    const esNumero = /^\d+$/.test(numStr);
    return esNumero && numStr.length <= maxLongitud;
}

// 4. Calcula la edad a partir de una fecha de nacimiento (formato YYYY-MM-DD)
function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    // Ajuste de zona horaria para evitar desfasamiento de días
    const fechaNacLocal = new Date(fechaNac.getTime() + Math.abs(fechaNac.getTimezoneOffset() * 60000));
    const hoy = new Date();
    
    let edad = hoy.getFullYear() - fechaNacLocal.getFullYear();
    const mes = hoy.getMonth() - fechaNacLocal.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacLocal.getDate())) {
        edad--;
    }
    return edad;
}

// 5. Valida que la persona sea mayor de edad
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

// 6. Validacion de contraseña, incluye caracteres especiales
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
// 7. Formatea una cadena de 10 dígitos a un telefono
function formatearTelefonoMX(telefono) {
    const num = telefono.toString().replace(/\D/g, '');
    if (num.length === 10) {
        return num.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    }
    return telefono;
}

// 8. Limpia los espacios extra de un texto
function limpiarTexto(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}