// BASE SETUP
// =============================================================================

// call the packages we need
const express = require("express"); // call express
const bodyParser = require("body-parser");
const geds = require("./API/geds/index");
const Keycloak = require("keycloak-connect");
const session = require("express-session");
const expressHbs = require("express-handlebars");

const app = express(); // define our app using express

// Register 'handelbars' extension with The Mustache Express
app.engine(
  "hbs",
  expressHbs({
    extname: "hbs",
    defaultLayout: "layout.hbs",
    relativeTo: __dirname
  })
);
app.set("view engine", "hbs");

var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore });

//session
app.use(
  session({
    secret: "ebb0afe4-4559-480f-bad5-5d19437fb438",
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);

app.use(keycloak.middleware());

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

router.get("/getEmployeeInfo/:searchValue", keycloak.protect(), async function(
  req,
  res
) {
  let searchValue = req.params.searchValue;
  const data = await geds.getEmployeeInfo(searchValue);
  res.json(JSON.parse(data.body));
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

app.use(keycloak.middleware({ logout: "/" }));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);