const router = require("express").Router();
const shoesController = require("../../controllers/shoesController");

// Matches with "/api/shoes"
router.route("/")
  .get(shoesController.findAll)
  .post(shoesController.create);

// Matches with "/api/shoes/:id"
router
  .route("/shoes")
  .get(shoesController.findById)
  .put(shoesController.update)
  .delete(shoesController.remove);

  router.route("/api/shoes")
  .get(shoesController.findAll)

module.exports = router;


