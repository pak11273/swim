var nodemailer = require("nodemailer")

module.exports = async (req, res) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*")
  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept"
  //   )
  var data = req.body

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
      res.setHeader("Access-Control-Allow-Origin", "*")
      //   res.setHeader(
      //     "Access-Control-Allow-Headers",
      //     "Origin, X-Requested-With, Content-Type, Accept"
      //   )

      res.json({ email: "Success" })
    }
    smtpTransport.close()
  })
}
