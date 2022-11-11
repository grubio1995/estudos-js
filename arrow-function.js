function apresentar(nome){
  return `Meu nome é ${nome}`
}
console.log(apresentar('Gabriel'))


// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1 + num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução
const somaNumeroPequenos = (num1 + num2) => {
  if(num1 > 10 || num2 > 10){
    return "Somente numeros de 1 a 9"
  } else {
    return num1 + num2;
  }
}

// Hoisting se comporta como expressão