function renderizar(){
    const dadospesquisados = buscar()
    criarNo(dadospesquisados)
}

function buscar(){
    let computador = {
        marca : "positivo",
        processador : "intel",
        memoria: "8gb",
        hd : "2tb"
    }
    return computador
}

    function criarNo(computador){
    const elementomarca = document.createElement("h1")
    elementomarca.innerText = `${computador.marca}`
    const elementoproc = document.createElement("h2")
    elementoproc.innerText = `${computador.processador}`
    const elementomem = document.createElement("h2")
    elementomem.innerText = `${computador.memoria}`
    const elementohd = document.createElement("h1")
    elementohd.innerText = `${computador.hd}`

    const divpc = document.createElement("div")
    divpc.classList.add("produto")
    divpc.appendChild(elementomarca)
    divpc.appendChild(elementoproc)
    divpc.appendChild(elementomem)
    divpc.appendChild(elementohd)

    document.body.appendChild(divpc)
    }

renderizar()