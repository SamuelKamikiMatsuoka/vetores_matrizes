let notas = new Array(4);
let nota;
let mediaNota;
let soma = 0;

for (index = 1; index < 5; index++) {
    nota = prompt(`coloque sua nota ${index}`);
    soma += nota;
    if (isNaN(nota)) {
        alert(" coloque um numero não uma palavra");
        index--;
    } else {
        notas[index] = nota;
    }
}
mediaNota = soma / 4;
console.log(notas);
console.log(mediaNota);
