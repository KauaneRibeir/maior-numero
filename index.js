
const prompt = require("prompt-sync")({ sigint: true });
let num = prompt (" Digite um número ")
 num = parseFloat(num.toString().split('')
 .sort((a, b) => b -a).join('')) * Math.sign(num)
 console.log(num)