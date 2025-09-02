let x=10
let numeromaior
let numeromenor
let numero
let y=1

while(y<=10){
    numero = Number(prompt(`digite o ${y} numero`))
    if(numero>numeromaior || (y = 1)){
    numeromaior=numero
    }
    if(numero<numeromenor || (y = 1)){
        numeromenor=numero
    }
    y++
}
console.log (numeromaior)
console.log (numeromenor)