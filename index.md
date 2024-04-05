fronteditor.dev/nlw-unite
# HTML

*Hypertext*

<h1>Título</h1>
<a href="https://google.com">google.com</a>

*Markup*
- Tag
- Atributos ou propriedades

*Language*

# CSS
Cascading StyleSheet
dentro das {} coloca propriedade e valor

https://fonts.google.com/selection/embed

```CSS
/* declarações */
body {
  background-color: #121214;
  color: #ffffff;
}
```

# JAVASCRIPT
´´´js

// VARIÁVEIS ( maneira de guardar uma informação para usar depois - os dados de uma aplicação - que podem ser de vários tipos)
  const mensagem = "Olá, mundo!"

// TIPOS DE DADOS
  number
  string '' "" ``

// FUNÇÃO (um nome seguido de um par de parenteses  dentro desses você pode passar instruções)
  alert(mensagem)

// OBJETO
  const xxx = {}

// ARRAY (lista)
  xxx = []

// OBJETO JAVASCRIPT
const XXX = {}
---
//uma variável que tem dentro dela uma função
// => arrow
// {} arrow function

const atualizarLista = () => {
  alert("estou dentro da função")
} 
// para execultar a função
  atualizarLista ()
---
// pegar uma informação do HTML
// sempre que chamar uma função e essa função tiver return o que tiver na frente dela vai ser colocado como valor ao invés da função
const criarNovoParticipante = () => {
  return 'alo'
}
const atualizarLista = () => {
  // pegar informação do HTML


  // substituir informação do HTML
  // documento dentro do HTML - objeto dentro do java script que tem funções e propriedades -você pode acessar essas informações colocando o ponto apos o document
  // querySelector - pesquisa pelo seletor - encontra um elemento HTML pelo seletor nesse caso o nome da tag (tbody) e o substitui 
  // innerHTML - substitui o conteúdo interno nesse caso do tbody
  document.querySelector('tbody').innerHTML = criarNovoParticipante()
}
// para funcionar vc precisa chamar a função
atualizarLista()
---
// objeto java script - const xxx = {}
// modelo de objeto
const participante = {
  nome: "Mark Brito",
  email: "mayk@gmail.com",
  dataInscrição: new Date(2024, 2, 22, 19, 28),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

// array
let participantes = [
  {
  nome: "Mark Brito",
  email: "mayk@gmail.com",
  dataInscrição: new Date(2024, 2, 22, 19, 28),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
]
---
  // estrutura de repetição - loop
  for(let participante of participantes){
      // faça alguma coisa
      // enquanto houver pessoas nessa lista
    }

´´´