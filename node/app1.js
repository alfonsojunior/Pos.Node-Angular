//console.log("Olá");
console.log("inicio");
// Carregando bibliotecas
// const => constante
const fs = require("fs");
const os = require("os");
// let => setar uma variável
let user = os.userInfo();

fs.appendFileSync("texto.txt", "Dados do usuario\n");
fs.appendFileSync("texto.txt", `User Name : ${user.username}\n`);
fs.appendFileSync("texto.txt", `Home Folder: ${user.homedir}\n\n`);

console.log(user);