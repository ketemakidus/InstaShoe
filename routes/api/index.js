const router = require("express").Router();
const shoesRoutes = require("./shoes");

// shoes routes
router.use("/shoes", shoesRoutes);

module.exports = router;
