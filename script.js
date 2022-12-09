//Estas variables contendrán los arrays con los items que tendremos que sorter de forma aleatoria y se mantendrán cosntantes
const who = ['The dog','My grandma','His turtle','My bird'];
const action = ['ate','peed','crushed','broke'];
const what = ['my homework', 'the keys', 'the car', 'the laptop'];
const when = ['before the class','right on time','when I finished','during my lunch'];


//Esta función se activa con un click en el botón y se encarga de generar aleatoriamente las frases que aprecerán dentro del elemento <p> 
//dentro del código html.
function myExcuse() {
//Crearemos las variables que generarán números aleatorios distintos cada vez que se haga click en el botón
let random_number_1 = Math.random();
let random_number_2 = Math.random();
let random_number_3 = Math.random();
let random_number_4 = Math.random();

//Crearemos las condicionales que ayudarán a convertir los números decimales en enteros de acuerdo a rangos, para poder luego seleccionar de 0 a 3 los
//itemos dentro de los arrays del principio. 
let entero_1;
if (random_number_1 <= 0.25) {
    entero_1 = 0;
 } else if (random_number_1 <= 0.5){
    entero_1 = 1;
 } else if (random_number_1 <= 0.75){
    entero_1 = 2;
 } else {
    entero_1 = 3;
 }

let entero_2;
if (random_number_2 <= 0.25) {
    entero_2 = 0;
 } else if (random_number_2 <= 0.5){
    entero_2 = 1;
 } else if (random_number_2 <= 0.75){
    entero_2 = 2;
 } else {
    entero_2 = 3;
 }

let entero_3;
if (random_number_3 <= 0.25) {
    entero_3 = 0;
 } else if (random_number_3 <= 0.5){
    entero_3 = 1;
 } else if (random_number_3 <= 0.75){
    entero_3 = 2;
 } else {
    entero_3 = 3;
 }

let entero_4;
if (random_number_4 <= 0.25) {
   entero_4 = 0;
} else if (random_number_4 <= 0.5){
   entero_4 = 1;
} else if (random_number_4 <= 0.75){
   entero_4 = 2;
} else {
   entero_4 = 3;
}

//Ahora crearemos las variables que ayudarán a extraer aleatoriamente la posición del item resultante dentro del array, tomando cada número aleatorio
//desde las condicionales anteriores 
let excuse_part_1 = who[entero_1];
let excuse_part_2 = action[entero_2];
let excuse_part_3 = what[entero_3];
let excuse_part_4 = when[entero_4];

//Guardaremos en una nueva variable llamada "resultado" cada uno de los items sorteados desde dentro de los arrays, separando espacios.
var resultado = excuse_part_1 + " " + excuse_part_2 + " " +  excuse_part_3 + " " + excuse_part_4;
//console.log(resultado); //Con esto probaremos en consola si es que todo nuestro código hace lo que se supone que debe hacer
//Ahora es momento de añadir el contenido de la variable "resultado" dentro del elemento <p> en nuestro html
document.getElementById("texto_aleatorio").innerHTML = resultado;  
}