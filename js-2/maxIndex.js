// escribe la función maxIndex acá

function maxIndex ( $array ) {
    let Index = -1 ;
    let biggest_number = 0; 
    for ( let i = 0 ; i < $array.length ; i++ ) {
        if ( biggest_number < $array[i] ) {
            biggest_number = $array[i] ;
            Index = i ;
        }
    }
    return Index ;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1