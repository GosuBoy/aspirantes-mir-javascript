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

// Busca en un objeto la ultima llave que contenga un array y retorna esa llave 
function $object_has_array_as_value ( $object ) {
    let _keys_array = Object.keys($object) ;
    let _has_an_array = false ;
    for ( let i = 0 ; i < _keys_array.length ; i ++ ) {
        if ( Array.isArray($object[_keys_array[i]]) ) {
            _has_an_array = true ;
            _array_key = _keys_array[i] ;
        }
    } 
    if ( _has_an_array ) {
        return _array_key ;
    }   
}
  
// 1. En un archivo llamado object2.js Crea un objeto literal llamado "persona" con las
//    siguientes propiedades: nombre, edad, ciudad y profesión.
let persona = {
    "nombre": "Joe Pino" ,
    "edad" : "Adulto" ,
    "ciudad" : "Santiago de chile" ,
    "profesion" : "Opinologo" ,
}

console.log(persona); // 2. Imprime en la consola el objeto "persona" completo.

// 3. Crea una función llamada "presentacion" que tome el objeto "persona" como argumento
// y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.

function $presentacion ( $object ) {
    
    let _properties_string = '' ;
    let _object_keys = Object.keys($object) ; 
    let $object_copy = {} ;
    _wanted_keys = ['nombre','edad','ciudad'] ;
    
    // Lee el las llaves del objeto , evalua si son las llaves que queremos ('nombre','edad','ciudad')
    // y las añade junto con sus valores respectivos a una copia del objeto 
    for ( let i = 0 ; i < _object_keys.length ; i++ ) {
        for ( let j = 0 ; j < _wanted_keys.length ; j++ ) {
          
            if ( _object_keys[i] === _wanted_keys[j] ) {

                addToObject ( $object_copy , _object_keys[i] , $object[_object_keys[i]] )

            }        

        }
    }   

    // Lee las propiedades de la copia y las añade a un string : ( <llave>: <valor>, <llave>: <valor>, ... ) 
    let $object_copy_keys = Object.keys($object_copy) ;
    
    for ( let i = 0 ; i < $object_copy_keys.length ; i++ ) {
        
        let $properties = $object_copy_keys[i] + ': ' + $object_copy[$object_copy_keys[i]]

        if ( i !== $object_copy_keys.length - 1 ) {
            
            _properties_string += $properties ;
            _properties_string += ', ' ;    

        } else {
        
            _properties_string += $properties

        }
    }

    return _properties_string // retorna ese string
}

// 4. Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
let mensaje = $presentacion(persona); 

// 5. Imprime en la consola el valor de la variable "mensaje".

console.log(mensaje);

// 6. Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.

addToObject(persona,"hobbies",["opinar sobre temas","responder encuestas","cantar"])

// 7. Imprime en la consola la propiedad "hobbies" del objeto "persona".

console.log(persona.hobbies) ;

// 8. Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.

for ( let i = 0 ; i < persona[$object_has_array_as_value(persona)].length ; i++ ) {
    console.log(persona[$object_has_array_as_value(persona)][i]);
}