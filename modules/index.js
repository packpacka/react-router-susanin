const ReactRouter = require('ReactRouter');

ReactRouter.createTransitionManager = require('./createTransitionManager');
ReactRouter.extendRoutes = require('./extendRoutes');
ReactRouter.generateReactRoutes = require('./generateReactRoutes');

// reexport react-router with redefines
module.exports = ReactRouter;
