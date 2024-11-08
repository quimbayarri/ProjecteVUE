
// Creamos la función suma
function suma(a, b) {
    return a + b;
}

// Creamos la función resta
function resta(a, b) {
    return a - b;
}

// Creamos la función multiplicación
function multiplicacion(a, b) {
    return a * b;
}

// Creamos la función división
function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

// Exportamos las funciones
module.exports = { suma, resta, multiplicacion, division };
