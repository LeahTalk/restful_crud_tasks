const controller = require('../controllers/controller.js');

module.exports = function(app) {
    app.get('/tasks', (req, res) => {
        controller.index(req, res);
    });

    app.post('/tasks', (req, res) => {
        controller.add_task(req, res);
    });

    app.delete('/tasks/:id', (req, res) => {
        controller.remove_task(req, res);
    });

    app.put('/tasks/:id/', (req, res) => {
        controller.update_task(req, res);
    });
}