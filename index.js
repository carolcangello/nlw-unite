let participantes = [
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscrição: new Date(2024, 2, 21, 18, 38),
    dataCheckIn: new Date(2024, 2, 26, 23, 00)
  },
  {
    nome: "Mark Brito",
    email: "mayk@gmail.com",
    dataInscrição: new Date(2024, 2, 22, 19, 28),
    dataCheckIn: null
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscrição: new Date(2024, 2, 23, 17, 45),
    dataCheckIn: new Date(2024, 2, 27, 20, 15)
  },
  {
    nome: "Carlos Silva",
    email: "carlos@gmail.com",
    dataInscrição: new Date(2024, 2, 24, 18, 10),
    dataCheckIn: new Date(2024, 2, 28, 21, 30)
  },
  {
    nome: "Maria Oliveira",
    email: "maria@gmail.com",
    dataInscrição: new Date(2024, 2, 25, 20, 20),
    dataCheckIn: null
  },
  {
    nome: "João Santos",
    email: "joao@gmail.com",
    dataInscrição: new Date(2024, 2, 26, 21, 30),
    dataCheckIn: new Date(2024, 3, 1, 18, 50)
  },
  {
    nome: "Mariana Lima",
    email: "mariana@gmail.com",
    dataInscrição: new Date(2024, 2, 27, 22, 15),
    dataCheckIn: new Date(2024, 3, 2, 17, 40)
  },
  {
    nome: "Pedro Costa",
    email: "pedro@gmail.com",
    dataInscrição: new Date(2024, 2, 28, 19, 55),
    dataCheckIn: new Date(2024, 3, 3, 22, 10)
  },
  {
    nome: "Juliana Rocha",
    email: "juliana@gmail.com",
    dataInscrição: new Date(2024, 2, 29, 18, 25),
    dataCheckIn: new Date(2024, 3, 4, 23, 20)
  },
  {
    nome: "Ricardo Mendes",
    email: "ricardo@gmail.com",
    dataInscrição: new Date(2024, 2, 30, 17, 40),
    dataCheckIn: new Date(2024, 3, 5, 20, 30)
  }
]

const criarNovoParticipante = (participante) => {
  const dataInscrição = dayjs(Date.now()).to(participante.dataInscrição)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  // condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button 
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscrição}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}
const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes){
      // faça alguma coisa
      output = output + criarNovoParticipante(participante)
    }

  // substituir informação do HTML
  document.querySelector('tbody').innerHTML = output
}
// para funcionar vc precisa chamar a função
atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscrição: new Date(),
    dataCheckIn: null
  }

  //verificar se o participante existe
  const participanteExiste = participantes.find((p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]

  atualizarLista(participantes)

  // limpar formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

}

const fazerCheckIn = (event) => {
  // confirmar se realmente quer fazer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if(confirm(mensagemConfirmacao) == false) {
    return 
  }
  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)
}

