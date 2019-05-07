const router = require("express").Router();
const shoesController = require("../../controllers/shoes");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
var config = require("../../client/src/utils/config");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://lively-waterfall-4245.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: config.auth0.clientID,
  issuer: `https://lively-waterfall-4245.auth0.com/`,
  algorithms: ["RS256"]
});

// Matches with "/api/shoes"
router
  .route("/")
  .get(shoesController.findAll)
  .post(checkJwt, shoesController.create);

// Matches with "/api/shoes/:id"
router
  .route("/")
  .get(shoesController.findById)
  .put(shoesController.update);

// router.route("/api/shoes")
// .post(shoesController.findAll)

module.exports = router;
