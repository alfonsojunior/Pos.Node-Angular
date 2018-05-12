const argv = require('yargs').argv

let nums = [1,2,3,4,5,6,7,8,9,10];

function calcula(num) {
    nums.forEach(v => {
        console.log(`${num} x ${v} = ${num*v}`);
    });
}

if (argv.numero) {
    calcula(argv.numero);
} else {
    console.log(`Não foi informado o parâmetro numero, por isso apresento a tabuada de 7`);
    calcula(7);
}
