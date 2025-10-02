let venda=[]
let despesa=[]

function menu(){
    let opt=prompt(`
    a) Inserir Valor de uma Venda
    b) Ver status das vendas do dia (numero de vendas e valor total vendido)
	c) Inserir Valor de uma Despesa
	d) Ver total de despesas do dia
	e) Encerrar`).toLowerCase()

    switch(opt){
        case "a":
        let valor=Number(prompt(`digite o valor da venda`))
        venda.push(valor)
        return 1

        case "b":
        let x=0
        let vendasoma=0
        while(x<venda.length){
        vendasoma+=venda[x]
        x++
        }
        window.alert(`
            Numero de vendas:${venda.length}
            valor total vendido:${vendasoma} `)
        return 1

        case "c":
        let valord=prompt(`digite o valor da despesa`)
        despesa.push(valord)
        return 1
        
        case "d":
            let y=0
            let despesasoma=0
            while(y<despesa.length){
            despesasoma=despesasoma+venda[x]
            y++
            }
            console.log(`
            Numero de vendas:${despesa.length}
            valor total vendido:${despesasoma} `)
            break;

        case "e":
        return 0
        
    }
}
let men
do {
    men=menu()
} while (men==1);
