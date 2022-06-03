var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
    select nickname, pts, erros, temp, dificuldade from usuario join score on fkUsuario = idUsuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarPerfil(fkUsuario) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()",
    fkUsuario
  );
  var instrucao = `
    select nickname, pts, erros, temp, dificuldade from usuario join score on fkUsuario = idUsuario where fkUsuario = ${fkUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ",
    email,
    senha
  );
  var instrucao = `
        SELECT idUsuario,nickname, email,aes_decrypt(senha, 'emterradebiladaquempimbaerei') as senha FROM usuario WHERE email = '${email}' AND senha = aes_encrypt('${senha}','emterradebiladaquempimbaerei');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(nickname, email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nickname,
    email,
    senha
  );
  var instrucao = `
        INSERT INTO usuario (nickname, email, senha) VALUES ('${nickname}', '${email}', aes_encrypt('${senha}','emterradebiladaquempimbaerei'));
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
function pontos(fkUsuario, pts, erros, temp, dificuldade) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontos():",
    fkUsuario,
    pts,
    erros,
    temp
  );
  var instrucao = `
        INSERT INTO score (fkUsuario, pts, erros,temp, dificuldade) VALUES ('${fkUsuario}', '${pts}', '${erros}',${temp},'${dificuldade}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  // cadastrar
  autenticar,
  cadastrar,
  // tabelas
  listar,
  listarPerfil,
  // cadastrar pontos
  pontos,
  // forum
  // listarPorUsuario,
  // publicar
};
