function aluno (){

    
    const alunos = [{nome: "João", nota: 7.3 },
                    {nome: "Maria", nota: 9.2 },
                    {nome: "Pedro", nota: 9.8 }]
    
        
        const elementoNome0 = document.createElement("h1")
        elementoNome0.innerText = `${alunos[0].nome}`
    
        const elementoNota0 = document.createElement("p")
        elementoNota0.innerText = `${alunos[0].nota}`
    
        const elementoNome1 = document.createElement("h1")
        elementoNome1.innerText = `${alunos[1].nome}`
    
        const elementoNota1 = document.createElement("p")
        elementoNota1.innerText = `${alunos[1].nota}`
    
        const elementoNome2 = document.createElement("h1")
        elementoNome2.innerText = `${alunos[2].nome}`
    
        const elementoNota2 = document.createElement("p")
        elementoNota2.innerText = `${alunos[2].nota}`
    
    
    
        const divAluno = document.createElement("div")
        divAluno.classList.add("aluno")
        divAluno.appendChild(elementoNome0)
        divAluno.appendChild(elementoNota0)
        divAluno.appendChild(elementoNome1)
        divAluno.appendChild(elementoNota1)
        divAluno.appendChild(elementoNome2)
        divAluno.appendChild(elementoNota2)
    
        document.body.appendChild(divAluno)
    }
    
    aluno()