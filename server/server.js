const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Email sending route
app.post("/send-email", async (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail or another email service
    auth: {
      user: "awaisjarral37@gmail.com", // Replace with your email
      pass: "plor dduu tjlp xsmi", // Replace with your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: "awaisjarral37@gmail.com", // Your email
    subject: `Message from ${name}: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
