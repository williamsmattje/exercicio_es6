// Array de objetos representando os alunos
const alunos = [{
  nome: 'Williams',
  nota: 7
}, {
  nome: 'John Lennon',
  nota: 5
}, {
  nome: 'Paul',
  nota: 8
}, {
  nome: 'Bob Dylan',
  nota: 6
}, {
  nome: 'George',
  nota: 4
}];

// Função para retornar apenas os alunos com nota maior ou igual a 6
function filtrarAlunos(aprovacao, alunos) {
  return alunos.filter(aluno => aluno.nota >= aprovacao);
}

// Chamada da função para retornar os alunos aprovados com nota maior ou igual a 6
const alunosAprovados = filtrarAlunos(6, alunos);

// Exibindo os alunos aprovados
console.log('Alunos aprovados:');
console.log(alunosAprovados);