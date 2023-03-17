// Añade propiedades al objeto indicado
function addToObject ( $object , $key , $value ) {
    $object[$key] = $value ;
}

// Elimina llaves del objeto indicado
function deleteFromObject ( $object , $key ) {
    delete $object[$key] ; 
} 

// Escribe las propiedades del objeto en la consola : "<llave>: <valor>"
function logObjectProperties ($object) {
    let _object_keys = Object.keys($object) ; 
    for ( let i = 0 ; i < _object_keys.length ; i++ ) {
        console.log(_object_keys[i] + ": " + $object[_object_keys[i]] ) ;
    }    
} 

// 1. En un archivo llamado object1.js Crea una variable llamada pedro de tipo objeto literal con las siguientes llaves y valores:

let pedro = {
    "nombre" : "Pedro Perez" ,
    "edad" : 30 ,
    "activo" : true ,
    "hobies" : ["programar","squash","piano"] 
}

console.log(pedro.edad) ; // 2. Imprime en la consola el valor de la llave edad.

addToObject( pedro , "estatura" ,  1.8 ) ; // 3. Agrega una propiedad con llave estatura y valor 1.8.

deleteFromObject(  pedro , "activo" ) ; // 4. Elimina la propiedad con llave activo.

 // 5. Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).
logObjectProperties(pedro);

// 6. Agregale al objeto una funcion llamada saluda que retorne la frase "Hola, me llamo" seguido del nombre de la persona.
addToObject( pedro , "saluda" , function() { console.log("Hola, me llamo " + pedro.nombre ) } ) 

pedro.saluda() ; // 7. Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.
 

