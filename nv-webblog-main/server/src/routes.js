const UserController =require('./controllers/UserController')

module.exports = (app) => {
    app.post('/users',UserController.create)
    app.put('/user/:userID',UserController.put)
    app.delete('/user/:userID',UserController.remove)
    app.get('/user/:userID',UserController.show)
    app.get('/user',UserController.index)
}