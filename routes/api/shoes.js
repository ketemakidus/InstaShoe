const router = require("express").Router();
const shoesController = require("../../controllers/shoes");

// Matches with "/api/shoes"
router.route("/")
  .get(shoesController.findAll)
  .post(shoesController.create);

// Matches with "/api/shoes/:id"
router
  .route("/:id")
  .get(shoesController.findById)
  .put(shoesController.update)

  // router.route("/api/shoes")
  // .post(shoesController.findAll)

module.exports = router;


