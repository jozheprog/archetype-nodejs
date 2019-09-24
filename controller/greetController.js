const personService = require('../service/personService');

const greetByName = async (req, res, next) => {

    const { name } = req.query;

    const person = await personService.searchName(name);

    res.json({
        "Saludo": `Hola ${person.name}!`
    })

}

module.exports = {
    greetByName
};
