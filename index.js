import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupança } from "./ContaPoupança.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309); 

const contaCorrenteRicardo = new Conta(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);

const contaPoupança = new Conta(50, cliente1, 1001);

console.log(contaCorrenteRicardo);
console.log(contaPoupança);