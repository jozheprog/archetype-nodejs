const PersonDao = require('../data/src/personDao');

const searchName = async name => {
    const person = await PersonDao.getByName(name);

    return person[0];
}

module.exports = {
    searchName
};
