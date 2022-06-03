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
var tempoSave = 0;

function jogarnovamenteDificil() {
  acertosVar = 0;
  errosVar = 0;
  pontosVar = 0;
  totalVar = 0;
  tempoSave = 0;
  timer = 0;
  jogarDificil();
}

function jogarDificil() {
  span_agora.innerHTML = `Acertos: ${acertosVar}`;
  span_antes.innerHTML = `Erros: ${errosVar}`;
  span_total.innerHTML = `Total: ${totalVar}`;
  span_tempo.innerHTML = `Tempo: <span id="timer" class="li_ani"></span>`;

  // <button class='alvoI alvoativo' id='imgAlvo' onclick="acertoDificil()">aqui</button>
  miniGame.innerHTML = `
  <div id="tela" onclick="erro()">
  <div class="alvos">
  <div class="container" id="container_alvos">
  <img class='alvoI' id='imgAlvo' onclick="acertoDificil()" src="assets/img/alvo.png" alt="alvo" />
  </div>
  </div>
  </div>
  `;
  tela.style.backgroundImage = "url(assets/img/bannergame.jpg)";

  playtempDificil();
}
var timer = 0;

function playtempDificil() {
  timer = 60;
  paraTimer = setInterval(mostrarTimer, 1000);
  function mostrarTimer() {
    document.getElementById("timer").innerHTML = timer;
    timer--;
    if (timer < 0) {
      fimJogoDificil();
    }
  }
}
function fimJogoDificil() {
  tempoSave += timer;
  // alert("fim de jogo");
  clearInterval(paraTimer);
  acertosVar++;
  miniGame.innerHTML = `     <div id="div_fim card">
  <div id="cont_fim" class="cont-fim">
      <h1 class="titulo cslogo"> <a href="./index.html"> Game - Over</a></h1>
      <img src="assets/img/csgo-dance.gif">
      <div class="formbox">
        
        <p>Voce fez: ${acertosVar} pontos em 60s</p>
        <button class="btn" onclick="jogarnovamenteDificil()">Jogar Novamente</button>
      <a href="tabela.html"><button class="btn">Tabela de Pontos</button></a>
      </div>
  </div>
</div>`;
  cadastraPontosDificil();
}

function acertoDificil() {
  if (acertosVar == 34) {
    fimJogoDificil();
  } else if (acertosVar++ < 34) {
    numeroDificil();
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

function numeroDificil() {
  var maxY = 533;
  var minY = 97;
  var maxX = 931;
  var minX = 337;

  var Y = Math.floor(Math.random() * (maxY - minY + 1) + minY);

  var X = Math.floor(Math.random() * (maxX - minX + 1) + minX);
  console.log(`X:${X} e Y:${Y}`);

  imgAlvo.style.left = `${X}px`;
  imgAlvo.style.top = `${Y}px`;
}

function cadastraPontosDificil() {
  // PARAMETRIZANDO VARIÁVEIS
  var fkJogadorVar = sessionStorage.ID_USUARIO;
  var ptnVar = acertosVar;
  var erroVar = errosVar;
  var tempVar = 60;
  var dificuldadeVar = "difícil";
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
      dificuldadeServer: dificuldadeVar,
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
