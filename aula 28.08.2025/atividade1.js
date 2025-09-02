let x = "sim"
let salario= 0
let adição= 0
let y = 1

while(x=="sim"){
    adição = Number(prompt(`digite o ${y} salario`))
    salario=adição+salario
    y++
    x = prompt("digite sim se deseja continuar")
}
console.log (salario)