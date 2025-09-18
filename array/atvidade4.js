const disciplinas = [];
for (let i = 0; i < 8; i++) {
  const nome = prompt(`Nome da disciplina [${i}]:`).trim();
  let nota = Number(prompt(`Nota (0 a 100) de ${nome}:`).replace(',', '.'));
  let freq = Number(prompt(`Frequência em % (0 a 100) de ${nome}:`).replace(',', '.'));
  const inval = x => Number.isNaN(x) || x < 0 || x > 100;
  if (!nome || inval(nota) || inval(freq)) { alert('Dados inválidos. Tente novamente.'); i--; continue; }
  disciplinas.push({ nome, nota, freq });
}
const mediaFrequencia = disciplinas.reduce((acc,d)=>acc+d.freq,0) / disciplinas.length;
const acima60 = disciplinas.filter(d => d.nota > 60).length;
console.log(`Média de frequência: ${mediaFrequencia.toFixed(2)}%`);
console.log(`Quantidade de notas acima de 60%: ${acima60}`);
