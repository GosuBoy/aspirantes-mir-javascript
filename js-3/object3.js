// Añade propiedades al objeto indicado
function addToObject ( $object , $key , $value ) {
    $object = $object ;
    $object[$key] = $value ;
    return $object ;
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

//Añade un objeto a un array (este puede estar contenido dentro de otro objeto)
function addObjectToArray ( $array , $object ) {
    let arrayIndex = 0 ; 
    $array.length += 1 ;
    arrayIndex = $array.length - 1 ; 
    $array[arrayIndex] = $object ;

}

// 1.En un archivo llamado object3.js Crear una variable llamada receta e inicialízalo con un objeto literal vacío.
let receta = {} ;

// 2.Agrégale una propiedad nombre con valor “Sandwich”.
addToObject(receta,'nombre','Sandwich');

// 3. Agrégale una propiedad ingredientes con un arreglo vacío.
addToObject(receta,'ingredientes',[]);

// 4. Agrega un objeto al arreglo ingredientes con las siguientes propiedades:
let objetoA = {} ;
addToObject(objetoA,"nombre","pan");
addToObject(objetoA,"cantidad",2);

// Almacenamos el objeto y la llave que tiene el array (objeto.llave) en una variable para acceder a esta mas facilmente. 
let receta_array =  receta[$object_has_array_as_value(receta)] 
addObjectToArray(receta_array,objetoA);

// 5. Agrega otro ingrediente al arreglo con las siguientes propiedades:
let objetoB = {} ;
addToObject(objetoB,"nombre","queso");
addToObject(objetoB,"cantidad",1);
addObjectToArray(receta_array,objetoB);

// 6. Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".
console.log(receta_array[0]['nombre']);

// 7. Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
let suma = 0 ; 
for ( let i = 0 ; i < receta_array.length ; i++ ) {
    suma += receta_array[i]['cantidad']
}
console.log(suma);

