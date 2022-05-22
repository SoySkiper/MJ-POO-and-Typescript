// Se puede definir el tipo de dato que recibe una funcion
//También se define el tipo de dato que regresa la funcion
function getNumero(numeroA) {
    if (numeroA === void 0) { numeroA = 2312; }
    return 'El numero que hay en memoria es' + numeroA;
}
console.log(getNumero());
