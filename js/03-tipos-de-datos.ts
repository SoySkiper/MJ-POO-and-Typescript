//string
let cadena: string = 'Esto es una variable de cadena';

//number
let numero: number = 3434;

//Booleano
let verdaderoFalso: boolean = true;

//Any
let cualquiera: any = 'Variable que puede cambiar de tipo de dato';

//Array
let lenguajes: Array<string> = ['Javascript', 'PHP', 'Java'];

//Otra manera de definir un array
let personaje: any[] = ['Caballero', 'Mele', 'Terrestre', 26, true];

let algunDato: string | number = 'Sillon';
algunDato = 14;

//En typescript podemos definir un tipo de dato

type alfanumerico = string | number;
let nombreUsuario: alfanumerico = 'SoySkiper79'

console.log(`${cadena}
${numero}
${verdaderoFalso}
${cualquiera}
${lenguajes}
${personaje}
${algunDato}
${nombreUsuario}
`);
