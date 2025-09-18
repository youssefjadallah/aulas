const tipos = [];
const valido = t => /^(A|B|AB|O)[+-]$/i.test(t);
for (let i = 0; i < 10; i++) {
  let t = prompt(`Tipo sanguíneo da pessoa [${i}] (ex.: A+, O-, AB+):`).trim().toUpperCase();
  if (!valido(t)) { alert('Tipo inválido. Use A+/A-/B+/B-/AB+/AB-/O+/O-.'); i--; continue; }
  tipos.push(t);
}
tipos.forEach((t, i) => console.log(`Cadastro ${i}: ${t}`));
