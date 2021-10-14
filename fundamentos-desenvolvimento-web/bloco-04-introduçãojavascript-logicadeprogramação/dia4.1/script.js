// Exercício 1

const a = 10;
const b = 3;

console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a%b);

// Exercício 2

const c = 10;
const d = 5;

if (c>d) {
  console.log (c);
} else {
console.log (d);
}

// Exercício 3 

const e = 5;
const f = 7;
const g = 9;

if (e > f && e > g) {
  console.log(e);
} else if (f > e && f > g) {
  console.log(f);
} else {
  console.log(g);
};

// Exercício 4

const h = 2;

if (h > 0) {
  console.log("Valor positivo");
} else if (h < 0) {
  console.log("Valor negativo")
} else {
  console.log("Zero");
};

// Exercício 5

const ladoA = 80;
const ladoB = 60;
const ladoC = 40;

if (ladoA + ladoB + ladoC === 180) {
  console.log(true);
} else {
  console.log(false);
};

// Exercício 6

const rei = "-> 1 casa vertical, horizontal e diagonal";
const rainha = "-> várias casas vertical, horizontal e diagonal";
const bispo = "-> várias casas diagonal";
const torre = "-> várias casas horizontal e vertical";
const cavalo = "-> movimentos em L";
const peão = "-> movimentos verticais e para comer outra peça movimento diagonal";

let peçaDeXadrez = rainha 

if (peçaDeXadrez == cavalo) {
  console.log ("Cavalo " + cavalo);
} else if (peçaDeXadrez == rei) {
  console.log ("Rei " + rei);
} else if (peçaDeXadrez == rainha) {
  console.log ("Rainha " + rainha);
} else if (peçaDeXadrez == bispo) {
  console.log ("Bispo " + bispo);
} else if (peçaDeXadrez == torre) {
  console.log ("Torre " + torre);
} else {
  console.log ("Peão " + peão);
};

// Exercício 7

const nota = 67;

if (nota >= 90) {
  console.log ("Nota A");
} else if (nota < 90 && nota >= 80) {
  console.log ("Nota B");
} else if (nota < 80 && nota >= 70) {
  console.log ("Nota C");
} else if (nota < 70 && nota >= 60) {
  console.log ("Nota D");
} else if (nota < 60 && nota >= 50) {
  console.log ("Nota E");
} else {
  console.log ("Nota F");
}

// Exercício 8

const numX = 3;
const numY = 4;
const numZ = 5;

if (numX%2 === 0 || numY%2 === 0 || numZ%2 === 0) {
  console.log ("True");
} else {
  console.log ("False");
}

// Exercício 9 

const numA = 3;
const numB = 4;
const numC = 5;

if (numX%2 !== 0 || numY%2 !== 0 || numZ%2 !== 0) {
  console.log ("True");
} else {
  console.log ("False");
}

// Exercício 10 

const valorCusto = 100;
let impostoSobreOCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
const valorVenda = 200;
let lucro = valorVenda - valorCustoTotal;

if (lucro >= 0) {
  console.log (lucro)
} else {
  console.log ("Prejuizo");
}

// Exercício 11 

const salarioBruto = 40000;
let valorInss;
let impostoDeRenda;

if (salarioBruto <= 1556.94) {
  valorInss = 0.08 * salarioBruto;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  valorInss = 0.09 * salarioBruto;
} else if (salarioBruto >= 2594.93 &&  salarioBruto <= 5189.82) {
  valorInss = 0.11 * salarioBruto;
} else {
  valorInss = 570.88;
}

const salarioDescontado = salarioBruto - valorInss;

if (salarioDescontado <= 1903.98) {
  impostoDeRenda = 0;
} else if (salarioDescontado >= 1903.99 && salarioDescontado <= 2826.65) {
  impostoDeRenda = (salarioDescontado * 0.075) - 142.80;
} else if (salarioDescontado >= 2826.66 && salarioDescontado <= 3751.05) {
  impostoDeRenda = (salarioDescontado * 0.15) - 354.80;
} else if (salarioDescontado >= 3751.06 && salarioDescontado <= 4664.65) {
  impostoDeRenda = (salarioDescontado * 0.225) - 636.13;
} else {
  impostoDeRenda = (salarioDescontado * 0.275) - 869.36
}

let salarioLiquido = salarioDescontado - impostoDeRenda

console.log ("O salário liquido é de: R$" + salarioLiquido)
