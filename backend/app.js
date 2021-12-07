const app = require('./config/server')
const routes = require('./app/routes/routes')

routes.imobiliariasListar(app);
routes.imobiliariaInserir(app);
routes.imobiliariaAtualizar(app);

routes.chavesListar(app);
routes.chaveInserir(app);
routes.chaveAtualizar(app);
routes.chaveSituacao(app);

routes.cargosListar(app);
routes.cargoInserir(app);
routes.cargoAtualizar(app);

routes.loginUsuario(app);
routes.usuariosListar(app);
routes.usuarioInserir(app);
routes.usuarioAtualizar(app);

routes.operacoesListar(app);
routes.operacaoInserir(app);
routes.operacaoAtualizar(app);