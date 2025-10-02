function menu(){
    let x=1
    let z=1
    let livro=[]
    let nome
    let autor1
    let ano
    let ava
    while(z<2){
    let opt=prompt(`
    a) Inserir dados do livro (Nome Livro, Autor, ano publicação, avaliação)
	b) Imprimir Nomes de todos os livros cadastrados
	c) Imprimir Todos os dados de um livro específico
	d) Imprimir todos os dados dos livros de um autor específico
	e) Encerrar`).toLowerCase()

    switch(opt){
        case "a":
        nome=prompt(`digite o nome do livro`)
        autor1=prompt(`digite o autor do livro`)
        ano=prompt(`digite o ano do livro`)
        ava=prompt(`digite a avaliação do livro`)
        livro.push({nome,autor1,ano,ava})
        break

        case "b":
        x=0
        while(x<livro.length){
        console.log(`${livro[x].nome}`)
        x++
        }
        break

        case "c":
        let valor=prompt(`dados de um livro`)
        console.log(`nome:${livro[valor].nome}
        autor:${livro[valor].autor1}
        ano:${livro[valor].ano}
        avaliação:${livro[valor].ava}
        `)
        break
        
        case "d":
            let y=0
            let autor=prompt(`autor do livro pra busca`)
            let livrosA=[]
            while(y<livro.length){
                if(autor==livro[y].autor1){
                    livrosA.push(livro[y])
                }
                y++
            }
            console.log(`${livrosA.nome}`)
            break;

        case "e":
        return 1
        
        }
    }
}
menu()