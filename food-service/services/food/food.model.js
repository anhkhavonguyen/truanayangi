var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FoodSchema = new Schema({
    number: Number,
    description: String,
    status: String,
    name: String
});

const FoodModel = module.exports = mongoose.model('order', FoodSchema);

module.exports.getById = (value, callback) => {
    FoodModel.findById(value).exec(callback);
}

module.exports.get = (pageNo, pageSize, callback) => {
    var query = {};
    query.skip = pageSize * (pageNo - 1);
    query.take = pageSize;
    FoodModel.count({}, function (err, totalItems) {
        FoodModel.find({}, {}, query, callback);
    });
}

module.exports.add = (newList, callback) => {
    newList.save(callback);
}

module.exports.delete = (id, callback) => {
    let query = { _id: id };
    FoodModel.remove(query, callback);
}

module.exports.update = (updatedOrder, callback) => {
    updatedOrder.save(callback);
}

