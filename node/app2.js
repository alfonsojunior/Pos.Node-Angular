// Carregando o arquivo notes.js
const notes = require("./notes");

console.log("app2.js");
// Apresentando um valor que está no arquivo notes.js
console.log(`Sua idade é ${notes.idade}`);
// Adicionando valores ao notes
notes.adiciona("Bom dia");
notes.adiciona("Boa tarde");
notes.adiciona("Boa noite");
notes.lista();
// Errado, pois notas não foi exportado em notes.js
console.log(notes.notas);
