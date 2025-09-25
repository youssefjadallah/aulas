
function gerar(){
    let pokemon=[]
    let chance=Math.random
    if(chance<=0.8){
        let nome=bubabosta
        let raridade=comum
        pokemon.push({nome,raridade})
    }
    else if(chance<=0.95 && chance>0.8){
        let nome=buba
        let raridade=raro
        pokemon.push({nome,raridade})
    }
    else{
        let nome="Super buba"
        let raridade=lendario
        pokemon.push({nome,raridade})
    }
}

function captura(){
    
}

function hist(){

}

function menu(){
    let opt=prompt(`
    a) Gerar pokemão - Deve gerar um pokemão normal em 80% da vezes, em 15% um raro e em 5% um lendário. Ao 'gerar pokemão', deve imprimir na tela seu nome, tipo 
    (normal, lendário ou raro).
	b) Taxas de captura - Ao escolher essa opção, deve imprimir na tela a chance de captura do pokemão atual dependendo do tipo de item usado. 
    Existem 2 tipos de items, normais e raros. Itens normais multiplicam a chance de captura por 1.0 para pokemãos do tipo normal e raro e 0.8 para pokemãos lendários. 
    Itens raros multiplicam a chance de captura por 2.0 para pokemãos normais e 1.2 para lendários.
	c) Histórico de pokemãos gerados - devem imprimir os pokemãos gerados até o momento, armazenando-os em um array.
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
