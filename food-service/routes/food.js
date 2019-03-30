const foodController = require("../services/food/food.controller");
const express = require("express");

const router = express.Router();
router
    .route("/")
    .get(foodController.get)
    .post(foodController.post)

router
    .route("/cancel")
    .post(foodController.cancel)

router
    .route("/angi")
    .post(foodController.angi)

router
    .route("/update/:id")
    .put(foodController.update)

router
    .route("/:id")
    .get(foodController.getBy)
    .delete(foodController.delete)

module.exports = router;


