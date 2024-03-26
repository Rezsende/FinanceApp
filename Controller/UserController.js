class UserController{

    async Create(req, res){
        res.send("Create users ");
    }

}

module.exports = new UserController();