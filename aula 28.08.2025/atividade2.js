let x=1
let media=0
let soma=0
let idade
let y=0

while(x>0){
    y++
    idade = Number(prompt(`digite a ${y} idade`))
    x=idade
    if(x>0){
    soma=soma+idade
    }

}
media=soma/(y-1)
console.log (media)
