const prompt = require("prompt-sync")();

let nomes = [];

for (let i = 0; i < 5; i++) {
    let digitadonome = prompt('Digite o nome: ');
    nomes.push(digitadonome);
}

console.log('Os nomes armazenados foram: ' + nomes.join(', '));
