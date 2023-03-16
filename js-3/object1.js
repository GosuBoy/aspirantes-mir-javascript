let pedro = {} // Crea un objeto vacio. 

function addToObject ( $object , $key , $value ) {
    $object[$key] = $value ;
} // Añade propiedades al objeto indicado 

function deleteFromObject ( $object , $key ) {
    delete $object[$key] ; 
} // Elimina llaves del objeto indicado 

function logObjectProperties ($object) {
    var _object_keys = Object.keys($object) ; 
    for ( let i = 0 ; i < _object_keys.length ; i++ ) {
        console.log(_object_keys[i] + ": " + pedro[_object_keys[i]] ) ;
    }    
} // Escribe las propiedades del objeto en la consola : "<llave> : <valor>"


addToObject( pedro , "nombre" , "Pedro Perez" ) ;
addToObject( pedro , "edad" , 30 ) ;
addToObject( pedro , "activo" , true ) ;
addToObject( pedro , "hobies" , ["programar","squash","piano"] ) ;
// Añade al objeto pedro todas las llaves y valores indicadas.


console.log(pedro.edad) ; //Imprime en la consola el valor de la llave edad.

addToObject( pedro , "estatura" ,  1.8 ) ; //Agrega una propiedad con llave estatura y valor 1.8.

deleteFromObject(  pedro , "activo" ) ; //Elimina la propiedad con llave activo.

logObjectProperties(pedro); //Recorre todas las propiedades e imprimelas en consola.

addToObject( pedro , "saluda" , function() { console.log("Hola, me llamo " + pedro.nombre ) } ) //Agregale al objeto una funcion llamada saluda que retorne la frase "Hola, me llamo" seguido del nombre de la persona.

pedro.saluda() ; //Llama a la funcion saluda. 

