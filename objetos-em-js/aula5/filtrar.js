const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((item) => item.endereco.apartamento && !item.endereco.hasOwnProperty("complemento"));
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);