var express = require("express")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.send("respond with a resource")
})

module.exports = router
