const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
   return nota < 10 ? nota + 1 : nota;
});

console.log(notasAtualizadas);