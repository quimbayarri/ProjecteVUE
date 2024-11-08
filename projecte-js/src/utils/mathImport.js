
// Creamos la función suma
export function suma(a, b) {
    return a + b;
}

// Creamos la función resta
export function resta(a, b) {
    return a - b;
}

// Creamos la función multiplicación
export function multiplicacion(a, b) {
    return a * b;
}

// Creamos la función división
export function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
