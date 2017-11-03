var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var enrouten = require("express-enrouten");
var session = require("express-session");
var compress = require('compression');

var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
var options = {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['htm', 'html', 'js'],
    index: false,
    maxAge: 90000,
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
        res.set('Expires', new Date(Date.now() + 90000000));

    }
}
app.use(express.static(path.join(__dirname, "public"), options));
app.use(cookieParser());
app.use(session({
    secret: "react-redux-book",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 1000 }
}));
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    console.log(req.path);
    let ignorePath = [
        "/javascripts/login/index.js",
        "/login",
        "/login/validateUser"
    ]
    if (ignorePath.indexOf(req.path) == -1) {
        console.log(req.session.username);
        if (req.session.username) {
            next();
        } else {
            res.redirect('/login');
        }

    } else {
        next();

    }

});
/// dynamically include controllers
app.use(enrouten({
    directory: "controllers"
}));







// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});


module.exports = app;
