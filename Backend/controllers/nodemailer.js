const nodemailer = require('nodemailer')

const sender = async (req, res) => {
    const {name,email,message,phone} = req.body
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "yashshiva59@gmail.com",
          pass: "yugr selp hpiv krfm",
        },
      });

      const sendweb = `<h3>Namaste Maleek 🙏 sandesha laya hu!!</h3>
                    <p>User credentials</p>
                    <ul>
                    <li><strong>Name:</strong>${name}</li>
                    <li><strong>Email:</strong>${email}</li>
                     <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
        <li><strong>Message:</strong> ${message || "No message provided"}</li> 
                    </ul>`

      const info = await transporter.sendMail({

        from: `${name} <${email}>`,
        to: "yashshiva59@gmail.com", 
        subject: `Mail from ${name}`, 
        text: "How can i help you iam a phull ctak deviluper", 
        html: sendweb,
      });
  
    const myweb = `<h3>Thank you for visiting my portfolio</h3>
                    <p>Best Regards</p>
                    <p>Yash shiva</p>`

        await transporter.sendMail({
            from:'"Yash shiva" <yashshiva59@gmail.com>',
            to:email,
            subject:"Thankyou for contacting me!.",
            html:myweb
        })

      console.log("Message sent: %s", info.messageId);
      res.send("Mail sent successfully!");
    } catch (error) {
      console.error("Error sending mail:", error);
      res.status(500).send("Error sending mail");
    }
  };
 module.exports = sender  