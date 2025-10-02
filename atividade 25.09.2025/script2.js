
function gerar(){
    let pokemon=[]
    let chance=Math.random
    let nome
    let raridade

    if(chance<=0.8){
        nome="bubabosta"
        raridade="comum"
        pokemon.push({nome,raridade})
        console.log(`pokemon gerado:${pokemon.nome}`)
    }
    else if(chance<=0.95 && chance>0.8){
        nome="buba"
        raridade="raro"
        pokemon.push({nome,raridade})
        console.log(`pokemon gerado:${pokemon.nome}`)
    }
    else{
        nome="Super buba"
        raridade="lendario"
        pokemon.push({nome,raridade})
        console.log(`pokemon gerado:${pokemon.nome}`)
    }
}

function captura(){
    let item=prompt(`qual item vc vai usar?
        1) item normal
        2) item raro`)
    let chance
    switch(item){
        case "1":
        let x=1
        while(x<=pokemon.lenght){
            if(pokemon.raridade == comum){
                chance="1x"
                console.log(`a chance de captura aumentado é ${chance}`)
            }
        }
    }

}

function hist(){

}

function menu(){
    let opt=prompt(`
    a) Gerar pokemão
	b) Taxas de captura
	c) Histórico de pokemons gerados
	e) Encerrar`).toLowerCase()

    switch(opt){
        case "a":
        gerar()
        break

        case "b":
        captura()
        break

        case "c":
        hist()
        break

        case "e":
        return 0
        
    }
}

let men
do {
    men=menu()
} while (men!=0);
