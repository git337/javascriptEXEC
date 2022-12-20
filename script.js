/*
var minhaIdade = 22;
var idadeMae = 50

if (minhaIdade > idadeMae) {
  console.log('Verdadeiro')
}
else if (minhaIdade === idadeMae) {
  console.log('é igual')
}

function imc(peso, altura) {
  const imc = peso / (altura * altura)
  console.log(imc);
}
imc(88, 1.73);
console.log(imc(88, 1.73));]

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor preencha um número'
  }
  else if(idade >= 60) {
    return true;
  }
  else {
    return false;
  }
}
console.log(terceiraIdade('oi'))

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`
}

var profissao = 'Designer';

function dados() {
  var nome = 'Gustavo';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());


// Crie uma função para verificar se um valor é Truthy
var idade1 = 20

function idade() {
  if (idade1 = 20) {
    return true;
  }
  else {
    return false
  }
}

function isTruthy(dado) {
  return !!dado;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(){
  var perímetro = '20'
  return perímetro * 4
}
console.log(quadrado())

function perimetroQuadrado(lado) {
  return lado * 4;
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var nome = 'Gustavo'
var sobrenome = 'Oliveira Rocha'

function nomeCompleto(){
  if(nome = 'Gustavo')
  return nome +' ' + sobrenome

}
console.log(nome1())

function nomeCompleto1(nome, sobrenome) {
  return nome + ' ' + sobrenome
}

// Crie uma função que verifica se um número é par

function isEven(numero) {
  var modulo = numero % 2;
if(modulo === 0)
return true
}
else { 
  return false
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado; 
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log('Gustavo')
})
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

var total = 10 + 5 * 2 / 2 + 20

console.log(total)


var soma = 's2' % '1'
console.log(soma)

var soma1 = +'200' + 50
console.log(soma1)

var incremento = 5
console.log(incremento++)
console.log(incremento--)
console.log(incremento)

var numero = '80'
var unidade = 'kg'
var peso =  numero / 2 + unidade
console.log(peso)

// aula 0204

var possuiGraduacao = false
var possuiDoutorado = false
if(possuiDoutorado) {
    console.log('Possui graduação')
}
else if(!possuiGraduacao) {
    console.log('Possui Graduação, porém não possui doutorado')
}
else{
    console.log('não possui')
}

var x = 10
console.log(x == 10)

  // funções

  function areaQuadradro(lado) {
    return lado;
  }

  console.log(areaQuadradro(10))


 

  function corFavorita(cor) {
    if(cor === 'azul') {
        return 'eu gosto do céu'
    }
    else if (cor === 'verde') {
        return 'eu gosto de mato'
    }
    else {
        return 'eu não gosto'
    }
  }

  function mostraConsole() {
    console.log('Oi')
}
addEventListener('click', mostraConsole)

addEventListener('click', function(){ console.log('Oi') })


var nome = 'Gustavo';
nome.length

var nomeMinusculo = nome.toLowerCase
var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log('Clicou')
})

// nomeie 3 propriedades ou métodos de strings
var nome1 = 'Gustavo'
nome1.length
nome1.slice
nome1.charAt
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('btn');
btn.addEventListener
btn.appendChild
btn.animate
btn.getElementsByClassName
btn.getElementsByTagName
console.log(btn)
// busque na web um objeto (método) capaz de interagir com o clipboard, 

// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var videoGames = ['Switch', PS4', 'Xbox'];


var idade = 22
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui Faculdade');
else console.log('Não possui faculdade');

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa);


console.log('Noje.js');
setTimeout(function callback() { console.log('é')}, 0)/
console.log('sensacional')

window.alert('oi');

const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5500/javascrip/vari%C3%A1veis/') {
  console.log('Isso mesmo')
}
const h1Selecionado = document.querySelector('h1');
document.body

h1Selecionado.innerText

h1Selecionado.addEventListener('click', callback)

// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;

console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const h1Selecionado = document.querySelector('h1')
// Retorne a linguagem do navegador

// Retorne a largura da janela 
*/

const animais = document.getElementById('animais');

 const gridSection = document.getElementsByClassName('grid-section')

 const animaisImg = document.querySelectorAll('');
 
 const gridSectionHTML = document.getElementsByClassName('grid-section');
 const gridSectionNode = document.querySelector('grid-section');

 primeraUl.classlist.add('grid-section')

 console.log(gridSectionHTML);
 console.log(gridSectionNode);

 gridSectionNode.forEach(function(item, index) {
console.log(index);
 });

 const arrayGrid = Array.from(gridSectionHTML);


 // Retorne no console todas as imagens do site
 const img = document.querySelectorAll('img');
 console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemsAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemAnimais);
 
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)/
// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);


 
 