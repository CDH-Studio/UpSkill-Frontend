// BASE SETUP
// =============================================================================

// call the packages we need
const express = require("express"); // call express
const app = express(); // define our app using express
const bodyParser = require("body-parser");
const geds = require("./API/geds/index");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get("/", function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

// router.param("searchValue", function(req, res) {
//     res.json({ message: "hooray! welcome to our api!" });
//   });

router.get("/getEmployeeInfo/:searchValue", async function(req, res) {
  let searchValue = req.params.searchValue;
  const data = await geds.getEmployeeInfo(searchValue);
  // .then(res => {
  //   return res.body.data;
  // })
  // .catch(err => {
  //   res.json(err);
  // });
  res.json(JSON.parse(data.body));
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);
