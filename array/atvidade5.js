const filmes = [];
for (let i = 0; i < 6; i++) {
  const nome = prompt(`Nome do filme [${i}]:`).trim();
  let nota = Number(prompt(`Nota do filme [0..10] para "${nome}":`).replace(',', '.'));
  if (!nome || Number.isNaN(nota) || nota < 0 || nota > 10) { alert('Dados inválidos.'); i--; continue; }
  filmes.push({ nome, nota });
}

function imprimirFilme(idx) {
  if (idx < 0 || idx >= filmes.length) { console.log('Índice inválido.'); return; }
  const f = filmes[idx];
  console.log(`[${idx}] "${f.nome}" — nota: ${f.nota.toFixed(2)}`);
}

function avaliarFilme(idx, novaNota) {
  if (idx < 0 || idx >= filmes.length) { console.log('Índice inválido.'); return; }
  if (Number.isNaN(novaNota) || novaNota < 0 || novaNota > 10) { console.log('Nota inválida.'); return; }
  const f = filmes[idx];
  f.nota = (f.nota + novaNota) / 2;
  console.log(`Nova média de "${f.nome}": ${f.nota.toFixed(2)}`);
}

function alterarFilme(idx) {
  if (idx < 0 || idx >= filmes.length) { console.log('Índice inválido.'); return; }
  const f = filmes[idx];
  const novoNome = prompt(`Novo nome (enter p/ manter "${f.nome}"):`).trim();
  const novoNotaStr = prompt(`Nova nota [0..10] (enter p/ manter ${f.nota.toFixed(2)}):`).trim();
  if (novoNome) f.nome = novoNome;
  if (novoNotaStr) {
    const n = Number(novoNotaStr.replace(',', '.'));
    if (!Number.isNaN(n) && n >= 0 && n <= 10) f.nota = n;
    else console.log('Nota ignorada (inválida).');
  }
  console.log('Filme atualizado.');
}

function listarTodos() {
  console.log('=== Filmes cadastrados ===');
  filmes.forEach((_, i) => imprimirFilme(i));
}

while (true) {
  const op = prompt(
`Menu:
a) Imprimir dados de 1 filme
b) Avaliar um filme (média com nova nota)
c) Alterar dados de um filme
d) Finalizar e imprimir todos
Escolha: a/b/c/d`
  )?.trim().toLowerCase();

  if (op === 'a') {
    const idx = Number(prompt('Índice do filme:'));
    imprimirFilme(idx);
  } else if (op === 'b') {
    const idx = Number(prompt('Índice do filme a avaliar:'));
    const nova = Number(prompt('Nova nota [0..10]:').replace(',', '.'));
    avaliarFilme(idx, nova);
  } else if (op === 'c') {
    const idx = Number(prompt('Índice do filme a alterar:'));
    alterarFilme(idx);
  } else if (op === 'd') {
    listarTodos();
    console.log('Programa finalizado.');
    break;
  } else {
    alert('Opção inválida.');
  }
}
