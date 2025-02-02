const { Faqs } = require("../database/postgres/models/faq");
const { getRedisClient } = require("../database/redis");


const deleteFaq = async (id) => {
    const redisClient = await getRedisClient();
    let result;
    try {
        result = await Faqs.destroy({
            where:{
                id:id
            }
        })
        await redisClient.sendCommand(['FLUSHDB']);
        console.log("cache flushed");
        console.log(`deleted rows : ${result}`);
        return result;
    } catch (error) {
        console.log("error in deleteFaq : ",error);
        throw error;
    }  
};

module.exports = deleteFaq;