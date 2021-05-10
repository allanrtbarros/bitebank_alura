import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupança } from "./ContaPoupança.js";

const cliente1 = new Cliente("Ricardo", 11122233309); 

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const contaPoupança = new ContaPoupança(50, cliente1, 1001);

console.log(contaCorrenteRicardo);
console.log(contaPoupança);