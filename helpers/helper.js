exports.randNum = () => {
  return Math.floor(10000 + Math.random() * 90000);

};
exports.reset = async (email, pin) => {
  const transporter = await nodeMail.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: `Reset-Password Verification Code`,
    html: `
    email
     `  };
  try {
    await transporter.sendMail(mailOption);
  } catch (error) {
    return error.message;
  }
};
