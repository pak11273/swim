var nodemailer = require("nodemailer")
var micro = require("micro-cors")
const cors = micro()

function api(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }
  var data = req.body

  // node-mailer
  var smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // service: "Gmail",
    // port: 465,
    // auth: {
    //   user: process.env.GMAIL_USERNAME, // "USERNAME"
    //   pass: process.env.GMAIL_PASSWORD, // "PASSWORD"
    // },
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME, // "USERNAME"
      pass: process.env.GMAIL_PASSWORD, // "PASSWORD"
    },
  })

  var mailOptions = {
    from: data.email,
    to: "dppoolserv@gmail.com",
    subject: data.subject,
    html: `<h2>Contact Name: ${data.name}</h2>
          <h2>Phone: ${data.phone}</h2>
          <h4>Subject: ${data.subject}</h4>
          <h4>Email: ${data.email}</h4>
          <h4>Message: ${data.message}</h4>`,
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(`ERROR: ${error}`)
    } else {
      res.json({ email: "Success" })
    }
    smtpTransport.close()
  })
}

export default cors(api)
