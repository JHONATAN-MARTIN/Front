const pessoas = [
    { nome: "Marcio", idade: 30, cidade: "Petropolis" },
    { nome: "Jhon", idade: 28, cidade: "Petropolis" },
    { nome: "Rodrigo", idade: 30, cidade: "Petropolis" },
    { nome: "Caio", idade: 30, cidade: "Petropolis" },

];

pessoas
    .filter((pessoa) => pessoa.cidade === "Petropolis")
    .forEach((pessoa) => console.log(pessoa.nome));
