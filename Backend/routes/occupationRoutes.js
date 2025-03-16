const express = require('express');
const router = express.Router();
const { getOccupations, getOccupation, createOccupation, updateOccupation, deleteOccupation } = require('../controllers/occupationController');

router.route("/").get(getOccupations);

router.route("/").post(createOccupation);

router.route("/:id").get(getOccupation);

router.route("/:id").put(updateOccupation);

router.route("/:id").delete(deleteOccupation);

module.exports = router;