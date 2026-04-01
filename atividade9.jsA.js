let notas =[];

const prompt = require("prompt-sync")();

let nomes = [];
let opcao = '';

while (opcao !== '3') {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Sair");
    opcao = prompt('Opção');

if (opcao === '1') 
        for (let i = 0; i < 3; i++) {
            let nome = prompt('Digite o nome: ');
            let nota = Number(prompt(`Digite a nota: `));

            nomes.push(nome);
            notas.push(nota);
        }

    } else if (opcao === '2') {
        // LISTAR
        if (nomes.length === 0) {
            console.log("Nenhum aluno cadastrado.");
        } else {
            for (let i = 0; i < nomes.length; i++) {
else{
    console.log("O aluno " + nomes[i] + ' esta reprovado');
}

    } 
