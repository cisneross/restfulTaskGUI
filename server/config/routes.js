var tasks = require('./../controllers/tasks.js');
module.exports = function(app){
    app.post('/tasks', tasks.create);
    app.get('/tasks', tasks.index);
    app.get('/tasks/:id', tasks.show);
    app.put('/tasks/:id', tasks.update);
    app.delete('/tasks/:id', tasks.delete);
}