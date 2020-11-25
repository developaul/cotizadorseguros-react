// Obtiene la diferencia de años
const obtenerDiferenciaYear = year => new Date().getFullYear() - year;

// Calcula el total a pagar segun la marca
const calcularMarca = marca => ( marca === 'europeo' ) ? 1.30 : ( marca === 'americano' ) ? 1.15 : 1.05;

// Calcula el tipo de seguro
const obtenerPlan = plan => ( plan === 'basico' ) ? 1.20 : 1.50;

// Muestra la primer letra en mayuscula
const primerMayuscula = texto => texto.charAt(0).toUpperCase() + texto.slice(1);

export {
    obtenerDiferenciaYear,
    calcularMarca,
    obtenerPlan,
    primerMayuscula
}