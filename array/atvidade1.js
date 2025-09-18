const precos = [];
for (let i = 0; i < 5; i++) {
  const v = Number(prompt(`Preço do produto [${i}]:`).replace(',', '.'));
  if (Number.isNaN(v) || v < 0) { alert('Valor inválido. Tente de novo.'); i--; continue; }
  precos.push(v);
}
let maxIdx = 0;
for (let i = 1; i < precos.length; i++) if (precos[i] > precos[maxIdx]) maxIdx = i;
console.log(`Índice do produto mais caro: ${maxIdx}`);
console.log(`Preço do produto mais caro: R$ ${precos[maxIdx].toFixed(2)}`);