let x=1
let soma=0
let numero
let y=0

while(x!=0.0){
    y++
    numero = Number(prompt(`digite o ${y} numero`))
    x=numero
    if(x!=0.0){
    soma=soma+numero
    }

}
console.log (soma)
