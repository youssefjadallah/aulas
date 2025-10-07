function aluno() {


    const alunos = [{ nome: "João", nota: 7.3 },
    { nome: "Maria", nota: 9.2 },
    { nome: "Pedro", nota: 9.8 }]


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
    document.body.appendChild(divAluno)

    const divAluno2 = document.createElement("div")
    divAluno2.classList.add("aluno")
    divAluno2.appendChild(elementoNome1)
    divAluno2.appendChild(elementoNota1)
    document.body.appendChild(divAluno2)

    const divAluno3 = document.createElement("div")
    divAluno3.classList.add("aluno")
    divAluno3.appendChild(elementoNome2)
    divAluno3.appendChild(elementoNota2)
    document.body.appendChild(divAluno3)

    
const elemento = document.getElementsByClassName("aluno")
elemento[0].style.border = "1px solid blue"
elemento[1].style.border = "1px solid blue"
elemento[2].style.border = "1px solid blue" 
}

aluno()