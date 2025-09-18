const comp = { 'A':'U', 'U':'A', 'C':'G', 'G':'C' };
const rna = [];
for (let i = 0; i < 10; i++) {
  let b = prompt(`Base RNA [${i}] (A, U, C, G):`).trim().toUpperCase();
  if (!['A','U','C','G'].includes(b)) { alert('Base inválida. Use A, U, C ou G.'); i--; continue; }
  rna.push(b);
}
const complemento = rna.map(b => comp[b]);           
const reversoComplementar = [...complemento].reverse(); 
console.log('Fita original:           ', rna.join(' '));
console.log('Complementar (mesma ordem):', complemento.join(' '));
console.log('Complementar antiparalela: ', reversoComplementar.join(' '));
