const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'zackkymane123@gmail.com', // Replace with your Gmail email address
        pass: 'QWERTY0987', // Replace with your Gmail password or app password
      },
    });

    // Set up email data
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'zackkymane123@gmail.com', // Replace with the email address to receive submissions
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};
