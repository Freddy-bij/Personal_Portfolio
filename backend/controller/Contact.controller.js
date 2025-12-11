const nodemailer = require("nodemailer");

const SendEmailMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // ===== VALIDATION =====
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }

    // Rwanda valid phone validation
    const phoneRegex = /^(\+?250)?0?7[2389]\d{7}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number format (Use valid Rwandan number)"
      });
    }

    // ===== EMAIL SENDER (Gmail recommended settings) =====
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #12e9cc; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          <div style="margin-top: 20px;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!"
    });

  } catch (error) {
    console.log("Error in SendEmailMessage:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error. Please try again later.",
      error: error.message
    });
  }
};

module.exports = SendEmailMessage;

