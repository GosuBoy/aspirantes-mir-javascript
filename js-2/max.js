// escribe la función max 

function max ( $array ) {
    let biggest_number = 0 ;
    if ( $array.length === 0 ) {
        return undefined ; 
    } else {
        for ( let i = 0 ; i < $array.length ; i++ ) {
              if ( biggest_number < $array[i ]) {
                biggest_number = $array[i]
            }
        }
    }
    return biggest_number;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined