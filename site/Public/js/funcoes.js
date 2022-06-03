function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}
function aguardarCadastro() {
  var divAguardar = document.getElementById("div_aguardar_cadastro");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
    divErrosLogin.innerHTML = texto;
  }
}
function finalizarAguardarCadastro(texto) {
  var divAguardar = document.getElementById("div_aguardar_cadastro");
  divAguardar.style.display = "none";

  var divErrosCadastro = document.getElementById("div_erros_cadastro");
  if (texto) {
    divErrosCadastro.innerHTML = texto;
  }
}
// validar se ja esta logado
function validarLOG() {
  var emailVar = sessionStorage.EMAIL_USUARIO;
  if (emailVar != null) {
    window.location = "gamejs.html";
  } else {
    window.location = "login_cadastro.html";
  }
}
function validarHeader() {
  var emailVar = sessionStorage.EMAIL_USUARIO;
  if (emailVar != null) {
    li_Login.style.display = "none";
    user_btn.style.display = "inline";
  } else {
    li_Login.style.display = "inline";
    user_btn.style.display = "none";
  }
}

// Sair
function limparSessao() {
  sessionStorage.clear();
  window.location = "../index.html";
}

// btn info
function btninfo() {
  cont_info.style.display = "flex";
  info_btn.style.display = "none";
}
function btnFechar() {
  info_btn.style.display = "flex";
  cont_info.style.display = "none";
}
// btn user
function btnuser() {
  cont_user.style.display = "flex";
}
function btnFecharUser() {
  cont_user.style.display = "none";
}
// btn como jogar
function btnFecharcomojogar(){
  cont_comojogar.style.display = "none";
}

function comojogar(){cont_comojogar.style.display = "flex";}

function perfil() {
  window.location = "./perfil.html";
}
function forum() {
  window.location = "./forum.html";
}
function index() {
  window.location = "./index.html";
}
function tabela(){
  window.location = "./tabela.html";
}
// redes sociais
function redeSteam() {
  window.location =
    "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/";
}
function redeTwitter() {
  window.location = "https://twitter.com/csgo";
}
function redeInsta() {
  window.location = "https://www.instagram.com/csgo_dev/";
}
