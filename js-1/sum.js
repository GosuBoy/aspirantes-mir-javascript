// escribe la función suma acá
function sum ( $number ) {
    var $result = 0 ;
    for ( let i = 1 ; i <= $number ; i++ ){
        $result += i ;
    }
    return $result;     
}
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120