import readlineSync from "readline-sync"
import express from "express"
import chalk from "chalk";
const propriedade = [];
let input = "";

console.log("Escreva as propriedade CSS, ao término, digite 'SAIR' para finalizar.");

while (input.toLowerCase ()!== "sair") {
    input = readlineSync.question("Digite uma propriedade CSS:");
    if (input.toLowerCase() !== "sair"){
        propriedade.push(input);
    }
}

console.log("Lista ordenada de propriedades CSS:")
console.log(chalk.green.bold.bgWhite.underline(propriedade.sort().join("\n")));