class HomeController{

    async index(req, res){
        res.send("APP EXPRESS! - JP Resende ");
    }

}

module.exports = new HomeController();