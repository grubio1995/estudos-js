//expressão da função


// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar());
function apresentar() {
  return "olá";
}

console.log(soma(1,2))
const soma = function(num1, num2){return num1 + num2}
