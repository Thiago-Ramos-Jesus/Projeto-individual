var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listarPerfil/:idUsuario", function (req, res) {
    usuarioController.listarPerfil(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/pontos", function (req, res) {
    usuarioController.pontos(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    usuarioController.publicar(req, res);
});
router.get("/listarPublicaçao", function (req, res) {
    usuarioController.listarPorUsuario(req, res);
});

module.exports = router;