//mudar tema
function alternarTema() {
  document.body.classList.toggle('tema-escuro');

  // Salva preferência no localStorage
  if (document.body.classList.contains('tema-escuro')) {
    localStorage.setItem('tema', 'escuro');
  } else {
    localStorage.setItem('tema', 'claro');
  }
}

window.onload = function () {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'escuro') {
    document.body.classList.add('tema-escuro');
  }
}

//Abrir div que mostra as salas de chat pré-existentes
function tiposDeChat() {
  let div = document.getElementById("tipos-chat");
  div.style.display = div.style.display === "none" || div.style.display === "" ? "flex" : "none";
}
try {
  document.getElementById('dev-pag').onclick = function () {
    window.location.href = 'chat.html';
  }
  document.getElementById('amigos-pag').onclick = function () {
    window.location.href = 'chat-amigos.html';
  }
} catch (erro) {
  console.error(erro)
}

// Espera o DOM carregar completamente (TENTATIVA DE REDIRECIONAR AO HISTORICO)
document.addEventListener('DOMContentLoaded', function () {
  const botaoHistorico = document.getElementById('historicopag');

botaoHistorico.onclick = function () {
      window.location.href = 'historico.html';
    };
    botaoHistorico.addEventListener('click', function () {
      window.location.href = '/historico.html';
    });
});

//Avisa o usuário que o elemento não serve para nada
function decorativo() {

  const elementos = document.querySelectorAll("#item-decorativo");

  elementos.forEach(elemento => {
    elemento.onclick = function () {
      alert("Isso é um item decorativo.");
    };
  });
}

decorativo();

//Teste configurações
function config() {
  const icone = document.querySelector('.icone-rotaciona');
  icone.classList.toggle('girando');

  const configDiv = document.getElementById('abre-config');
  configDiv.style.display = configDiv.style.display === 'block' ? 'none' : 'block';
}



//Nova sala
function abrirFormularioSala() {
  const form = document.getElementById('nova-sala-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function criarSala() {
  const nomeSala = document.getElementById('nomeSalaInput').value.trim();
  if (!nomeSala) {
    alert('Digite um nome para a sala!');
    return;
  }

  const novaSalaBtn = document.createElement('button');
  novaSalaBtn.innerText = nomeSala;
  novaSalaBtn.onclick = () => {
    window.location.href = `/sala/${encodeURIComponent(nomeSala)}`;
  };


  document.getElementById('tipos-chat').appendChild(novaSalaBtn);
  document.getElementById('nomeSalaInput').value = '';
}

function toggleMenu() {
  document.getElementById("barra-esquerda").classList.toggle("barra-recolhida")
}

document.getElementById("iconMenu").addEventListener("click", toggleMenu)