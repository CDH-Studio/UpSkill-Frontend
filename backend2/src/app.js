const path = require("path");
const favicon = require("serve-favicon");
const compress = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("./logger");

const feathers = require("@feathersjs/feathers");
const configuration = require("@feathersjs/configuration");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");

const Keycloak = require("keycloak-connect");
const session = require("express-session");
const expressHbs = require("express-handlebars");
// const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const middleware = require("./middleware");
const services = require("./services");
const appHooks = require("./app.hooks");
const channels = require("./channels");

const sequelize = require("./sequelize");

const app = express(feathers());

// Config() function reads the .env file and sets the environment variables
dotenv.config();

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
    secret: process.env.KEYCLOAK_SECRET,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);

app.use(keycloak.middleware());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get("public"), "favicon.ico")));
// Host the public folder
// app.use("/", keycloak.protect(), express.static(app.get("public")));
app.use("/", express.static(app.get("public")));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(sequelize);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

// Set the logout route to use keycloak middleware to kill session
app.use(keycloak.middleware({ logout: "/" }));

module.exports = app;
