function join ( $array ) {
    let _resultant_string = "" ;
    for ( let i = 0 ; i < $array.length ; i++ ) {
        _resultant_string += $array[i] + " " 
    }
    return _resultant_string ;
}

console.log (join(["HOLA","QUE","TAL"]));
console.log (join([1,2,3,4,5]));
console.log (join(["Hoy","es","13","de","marzo"]))
console.log (join([]));