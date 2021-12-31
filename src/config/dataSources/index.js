const usersController = require('../../app/controllers/usersController');
const projectsController = require('../../app/controllers/projectsController');

module.exports = () => ({ usersController, projectsController })