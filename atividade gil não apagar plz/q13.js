let n1= Number(prompt("distancia da viagem em km"));
let n2= Number(prompt("velocidade media da viagem em km/h"));
let n3= Number(prompt("preço do litro de combustivel"));
let n4= Number(prompt("consumo do carro em km/litro"));

let r1=n1/n2
let r2=n1/n4
let r3=n3*r2

console.log("tempo de viagem em horas: "+ r1)
console.log("quantidade de litros consumidos: "+ r2)
console.log("custo estimado da viagem: "+ r3)
