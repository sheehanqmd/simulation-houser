module.exports = {

    gethouse: (req, res) => {
        const dbInstance = req.app.get("db");
        dbInstance
        .get_post(req.params.id)
        .then(response => res.status(200).json(response))
        .catch(error => {
            res.status(500).send(error);
        });
    },
    

    makePost: (req, res) => {
        const dbInstance = req.app.get("db");
        console.log(req.body);
        const {name, address, city, state, zip} = req.body;
        dbInstance
        .make_post([name, address, city, state, zip])
        .then(response => res.status(200).json(response))
        .catch(error => {
            res.status(500).send(error);
        });
    },
    

}