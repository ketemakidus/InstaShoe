const router = require("express").Router();
const bookRoutes = require("./shoes");

// Book routes
router.use("/shoes", bookRoutes);

module.exports = router;