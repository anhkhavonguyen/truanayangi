const foodModel = require('../food/food.model');
const foodEnum = require('../../enum/food');
const foodService = require('./food.service');

exports.get = function (req, res) {
    var pageNo = parseInt(req.query.pageNo);
    var pageSize = parseInt(req.query.pageSize);

    foodModel.get(pageNo, pageSize, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all orders. Error: ${err}` });
        }
        else {
            if (data) {
                var totalPages = Math.ceil(data.length / pageSize);
            }
            res.write(JSON.stringify({ success: true, data: data, totalPages: totalPages }, null, 2));
            res.end();
        }
    });
};

exports.post = function (req, res) {
    let foodModel = new foodModel({
        number: req.body.number,
        description: req.body.description,
        status: req.body.status,
        name: req.body.name,
        address: req.body.address
    });

    foodModel.add(foodModel, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to create a new Food. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, data: data }, null, 2));
            res.end();
        }
    })
}

exports.delete = function (req, res, next) {
    let id = req.params.id;
    foodModel.delete(id, (err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to delete the list. Error: ${err}` });
        }
        else if (list) {
            res.json({ success: true, message: "Deleted successfully" });
        }
        else
            res.json({ success: false });
    })
};

exports.cancel = function (req, res) {
    foodModel.getById(req.body.id, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Can't find the Order. Error: ${err}` });
        } else {
            if (data) {
                data.status = foodEnum.CANCELED;
                foodModel.update(data);
            }
            res.json({ success: true, message: "Cancel Order successfully." });
        }
    })
}

exports.update = function (req, res) {
    foodModel.getById(req.body.id, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Can't find the Order. Error: ${err}` });
        } else {
            if (data) {
                data.status = req.body.status;
                foodModel.update(data);
            }
            res.json({ success: true, message: "Update Order successfully." });
        }
    })
}

exports.getBy = function (req, res) {
    foodModel.getById(req.params.id, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to get Order. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, data: data.status }, null, 2));
            res.end();
        }
    });
};

exports.angi = function (req, res) {
    let numberStore = foodModel.count();
    result = foodService.angi(numberStore);

    res.write(JSON.stringify({ success: true, data: result }, null, 2));
    res.end();
}