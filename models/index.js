var folderLoader = require('../utils/folderLoader');
exports = module.exports = function (app) {
    folderLoader(__dirname).forEach(function (route) {
        route(app);
    });
};