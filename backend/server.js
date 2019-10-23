// BASE SETUP ==========================================================================

// Import the packages we need
const express = require("express"); // call express
const Keycloak = require("keycloak-connect");
const session = require("express-session");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const geds = require("./API/geds/index");
const db = require("./API/dbTest/queries");

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

// Configure session to use memoryStore and Setup keycloak middleware to use the session memoryStore.
var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore });

//session
app.use(
  session({
    secret: "",
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

// ROUTES FOR OUR API ===============================================
const router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api/)
router.get("/", keycloak.protect(), function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

router.get("/getEmployeeInfo/:searchValue", keycloak.protect(), async function(
  req,
  res
) {
  let searchValue = req.params.searchValue;
  const data = await geds.getEmployeeInfo(searchValue);
  res.json(JSON.parse(data.body));
});

router.get("/users", keycloak.protect(), db.getUsers);
router.get("/users/:id", keycloak.protect(), db.getUserById);
router.post("/users", keycloak.protect(), db.createUser);
router.put("/users/:id", keycloak.protect(), db.updateUser);
router.delete("/users/:id", keycloak.protect(), db.deleteUser);
// more routes for our API will happen here

// REGISTER OUR ROUTES ===============================================
// Note: All of our routes will be prefixed with /api

app.use("/api", router);

// Set the logout route to use keycloak middleware to kill session
app.use(keycloak.middleware({ logout: "/" }));

// START THE SERVER ==================================================
app.listen(port);
console.log("Magic happens on port " + port);
