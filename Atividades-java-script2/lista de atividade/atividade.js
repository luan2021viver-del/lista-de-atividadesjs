let valorCompra = 350.00; // Exemplo
let desconto = 0;

if (valorCompra < 100) {
    desconto = 0;
} else if (valorCompra <= 299.99) {
    desconto = 0.05;
} else if (valorCompra <= 499.99) {
    desconto = 0.10;
} else {
    desconto = 0.15;
}

let valorDesconto = valorCompra * desconto;
let valorFinal = valorCompra - valorDesconto;