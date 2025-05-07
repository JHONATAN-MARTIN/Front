var frutas = new Array();
let cores = [];
let cursos = ["java", "python", "javascript", "c++", "c#", "php", "ruby", "swift", "kotlin"];
let pessoas= [{nome: "Fulano"}, {nome: "Ciclano"}, {nome: "Beltrano"}];


cursos.push("React");
cursos.push(1000);
cursos.unshift("HTML");

cursos.sort(); // Ordena o vetor em ordem alfabética
cursos.reverse(); // Inverte a ordem do vetor

cursos.shift(); // Remove o primeiro elemento do vetor
cursos.pop(); // Remove o último elemento do vetor

for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}

const livro = {
    autor: "Laurence",
    pagina: 50,
    linguagem: "Português",
}

console.log(livro.pagina);