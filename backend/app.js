const app = require('./config/server')
const routes = require('./app/routes/routes')

routes.imobiliariaInserir(app);

routes.chavesListar(app);
routes.chaveInserir(app);

routes.cargosListar(app);
routes.cargoInserir(app);
routes.cargoAtualizar(app);
routes.cargoDeletar(app);