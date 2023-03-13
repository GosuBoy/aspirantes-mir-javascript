// escribe la función sum acá

function sum ( $array ) {
    let total_sum = 0 ;
    for ( let i = 0 ; i < $array.length ; i++ ) {
        total_sum += $array[i] ;
    }
    return total_sum ;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0