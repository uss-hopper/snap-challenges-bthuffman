// let variableOne;



//This establishes that the * operator has precedence over the logical operators. Lowest to highest precedence ||, &&, comparison operators and the rest (arithmetic).
console.log(10 * 10 > 50);
//true
console.log(50 < 10 * 10 );
//true,

console.log(1 + 1 == 2 && 10 * 10 > 50 ? true: false);
//true, arithmetic first, then the logical operators