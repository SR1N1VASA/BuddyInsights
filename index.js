const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./models/user');
require('./services/passport');

mongoose
  .connect(keys.mongoURI)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const app = express();
// all api.use calls are middlewares(functions to modify incoming requests before they reach the route handler)
// extract cookie data from the request(cookie stored in req.session)
app.use(
    cookieSession({
        // lasts for 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // key to encrpyt/decrypt the cookie
        keys: [keys.cookieKey]

    })
)

// commands to tell passport to make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);
