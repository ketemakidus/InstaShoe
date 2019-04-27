const router = require("express").Router();
const shoesController = require("../../controllers/shoes");
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://stimpacc.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'ZLCb2Ey0aLiRpsEvdMKs08bAgaiOrCGo',
  issuer: `https://stimpacc.auth0.com/`,
  algorithms: ['RS256']
});

// Matches with "/api/shoes"
router.route("/")
  .get(shoesController.findAll)
  .post(checkJwt, shoesController.create);

// Matches with "/api/shoes/:id"
router.route("/:id")
  .get(shoesController.findById)
  .put(shoesController.update)

  // router.route("/api/shoes")
  // .post(shoesController.findAll)

module.exports = router;


