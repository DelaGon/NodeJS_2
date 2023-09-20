const UserController =require('./controllers/UserController')

module.exports = (app) => {
    app.post('/user',UserController.create)
    app.put('/user/:userID',UserController.put)
    app.delete('/user/:userID',UserController.remove)
    app.get('/user/:userID',UserController.show)
    app.get('/users',UserController.index)
}