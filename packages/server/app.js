var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var bodyParser = require("body-parser")
var nodemailer = require("nodemailer")
var cors = require("cors")
var dotenv = require("dotenv")
dotenv.config()

var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")

var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.post("/api/contact", (req, res) => {
  var data = req.body
  console.log(data)

  // node-mailer
  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.GMAIL_USERNAME, // "USERNAME"
      pass: process.env.GMAIL_PASSWORD, // "PASSWORD"
    },
  })

  var mailOptions = {
    from: data.email,
    to: "dppoolserv@gmail.com",
    subject: data.subject,
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`,
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(`ERROR: ${error}`)
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Credentials", "true")
      res.setHeader("Access-Control-Max-Age", "1800")
      res.setHeader("Access-Control-Allow-Headers", "content-type")
      res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
      )
      res.json({ email: "Success" })
    }
    smtpTransport.close()
  })
})
// eof node-mailer

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
