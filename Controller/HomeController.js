class HomeController
{
    async index(req, res)
    {
        res.sende("Sistema Rodando....controller");
    }
}

module.exports = new HomeController();