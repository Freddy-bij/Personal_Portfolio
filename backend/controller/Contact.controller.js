const nodemailer = require("nodemailer");

const SendEmailMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }


    const phoneRegex = /^(\+?250)?0?7[2389]\d{7}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number format"
      });
    }



    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, 
    minVersion: "TLSv1.2"
  },
  connectionTimeout: 20000, 
  greetingTimeout: 20000,   
});

    transporter.verify(function (error, success) {
  if (error) {
    console.log("Transporter error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Contact Form Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!"
    });

  } catch (error) {
    console.error("SendEmailMessage Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error. Please try again later.",
      error: error.message
    });
  }
};

module.exports = SendEmailMessage;
