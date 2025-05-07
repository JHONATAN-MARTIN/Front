

function calcular(a, b) {
    return a * b;
}

console.log("O resultado é:", calcular(10, 2), " fim de calculo");

//Templete Literal é só usar as crases ` `
// e colocar ${} para interpolar a variavel

console.log(`O resultado é: ${calcular(10, 2)} fim de calculo ${2 + 5}`);


const numeros = [2, 5, 8, 0, 10];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const numerosMap = numeros.map((n) => n * 2);
console.log(numerosMap);

const numerosForEach = numeros.map((num) => num);

const numerosFilter = numeros.filter((num) => num% 2 === 0);
console.log(numerosFilter);