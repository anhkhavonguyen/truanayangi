var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FoodSchema = new Schema({
    number: Number,
    description: String,
    status: String,
    name: String,
    address: String
});

const FoodModel = module.exports = mongoose.model('food', FoodSchema);

module.exports.getById = (value, callback) => {
    FoodModel.findById(value).exec(callback);
}

module.exports.get = (callback) => {
    FoodModel.find(callback);
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

module.exports.count = (callback) => {
    FoodModel.find().count(callback);
}

