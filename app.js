const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

// to be used
const session = require('express-session');
const cors = require('cors');


// ROUTES FILES
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;

//MONGOOSE CONFIG

mongoose.Promise = global.Promise
mongoose.connect('mongodb://celso:Celsinho211!@ds039431.mlab.com:39431/heroku_9518s1k0', {useNewUrlParser: true})
mongoose.set ('useFindAndModify', false)

// MIDDLEWARE
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if (process.env.NODE_ENV === "production") {
  // console.log('---------test----------');
  app.use(express.static("client/build"));
}

app.use(indexRouter);


app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ERROR HANDLING 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// LISTENING 

const server = app.listen(PORT, function () {
  console.log(`🌎 ==> NOW LISTENING 🎧  ON PORT ${PORT}!`);
});
