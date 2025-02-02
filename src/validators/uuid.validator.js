const {validate:uuidValidate} = require("uuid")

const verifyUuid = (id) => {
    return uuidValidate(id);
};

module.exports = verifyUuid;