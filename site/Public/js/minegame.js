window.onload = validar();

function validar() {
  var emailVar = sessionStorage.EMAIL_USUARIO;
  if (emailVar == null) {
    window.location = "login_cadastro.html";
  }
}

// variaveis globais
var acertosVar = 0;
var errosVar = 0;
var pontosVar = 0;
var totalVar = 0;
var alvoNovo = 1;
var tempoSave = 0;

function jogarnovamente() {
  acertosVar = 0;
  errosVar = 0;
  pontosVar = 0;
  totalVar = 0;
  tempoSave = 0;
  timer = 0;
  alvoNovo = 1;
  jogar();
}

function jogar() {
  span_agora.innerHTML = `Acertos: ${acertosVar}`;
  span_antes.innerHTML = `Erros: ${errosVar}`;
  span_total.innerHTML = `Total: ${totalVar}`;
  span_tempo.innerHTML = `Tempo: <span id="timer" class="li_ani"></span>`;

  var imagens = "";
  for (var contador = 1; contador < 36; contador++) {
    if (contador == 1) {
      imagens += `<img class='alvoI${contador}  alvoativo'   id='imgAlvo' onclick="acerto()" src="assets/img/alvo.png" alt="alvo" />`;
    } else {
      imagens += `<img class='alvoI${contador}  alvohidden'   id='imgAlvo' onclick="acerto()" src="assets/img/alvo.png" alt="alvo" />`;
    }
  }

  miniGame.innerHTML = `
  <div id="tela" onclick="erro()">
  <div class="alvos">
  <div class="container" id="container_alvos">
  ${imagens}
  </div>
  </div>
  </div>
  `; // 35 img
  tela.style.backgroundColor = "#e79b28";
  playtemp();
}
var timer = 0;

function playtemp() {
  paraTimer = setInterval(mostrarTimer, 1000);
  function mostrarTimer() {
    document.getElementById("timer").innerHTML = timer;
    timer++;
  }
}
function fimJogo() {
  tempoSave += timer;
  // alert("fim de jogo");
  clearInterval(paraTimer);
  acertosVar++;
  miniGame.innerHTML = `     <div id="div_fim card">
  <div id="cont_fim" class="cont-fim">
      <h1 class="titulo cslogo"> <a href="./index.html"> Game - Over</a></h1>
      <img src="assets/img/csgo-dance.gif">
      <div class="formbox">
        
        <p>Voce fez: 35 pontos em ${tempoSave}s</p>
        <button class="btn" onclick="jogarnovamente()">Jogar Novamente</button>
      <a href="tabela.html"><button class="btn">Tabela de Pontos</button></a>
      </div>
  </div>
</div>`;
  cadastraPontos();
}

// function startTimer(duration, display,timerSpan) {
//   var timer = duration,
//   segundos;
//  var paraTimer = setInterval(function () {
//     segundos = parseInt(timer % 61, 10); // <-- analisa um argumento e retorna um inteiro na base especificada.
//     segundos = segundos < 10 ? "0" + segundos : segundos;
//     display.textContent = segundos; // <-- display.textContent e parecido com um prin() do python
//     timerSpan = document.querySelector("#timer").innerHTML;
//     if (--timer < 0) {
//       timer = duration;
//     } else
//     if (timerSpan == 0) {
//       clearInterval(paraTimer);
//       fimJogo();
//     }
//   }, 1000);
// }
// function playtemp() {
//   var timerSpan = 0 // mil anos depois, valor da spam timer
//   var duration = 60; // Converter para segundos // definindo temp nesse caso e 1 min
//   display = document.querySelector("#timer"); // definindo que o display e id time
//   // timer.innerHTML = display
//   startTimer(duration, display,timerSpan); // iniciando função startTime
// }

function acerto() {
  if (acertosVar == 34) {
    fimJogo();
  } else if (acertosVar++ <= 35) {
    var alvoAntigo = alvoNovo;
    numero();
    var alvo = document.querySelector(`.alvoI${alvoAntigo}`);
    desativar(alvo, "alvoativo", "alvohidden");
    var alvo2 = document.querySelector(`.alvoI${alvoNovo}`);
    ativar(alvo2, "alvohidden", "alvoativo");
    totalVar++;
  }
}
function erro() {
  if (acertosVar > pontosVar) {
    pontosVar++;
  } else {
    totalVar++;
    errosVar++;
  }
  // span_antes.innerHTML = `marc: ${marctroca}`;
  span_agora.innerHTML = `Acertos: ${acertosVar}`;
  span_antes.innerHTML = `Erros: ${errosVar}`;
  span_total.innerHTML = `Total: ${totalVar}`;
}

function desativar(elemento, ativo, dativo) {
  elemento.classList.remove(ativo);
  elemento.classList.add(dativo);
}
function ativar(elemento, dativo, ativo) {
  elemento.classList.remove(dativo);
  elemento.classList.add(ativo);
}
function numero() {
  alvoNovo = Math.floor(Math.random() * 35) + 1;
  // console.log = alvoNovo
}

function cadastraPontos() {
  // PARAMETRIZANDO VARIÁVEIS
  var fkJogadorVar = sessionStorage.ID_USUARIO;
  var ptnVar = acertosVar;
  var erroVar = errosVar;
  var tempVar = tempoSave;
  fetch("/usuarios/pontos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fkjogadorServer: fkJogadorVar,
      acertosServer: ptnVar,
      errosServer: erroVar,
      tempoServer: tempVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
      console.log("resposta: foi ****");
      } else {
        throw "Houve um erro ao tentar cadastrar seus pontos!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}
