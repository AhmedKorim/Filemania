const nodemailer = require('nodemailer');
const config = require("./config");
//const User = require("mongoose").model("user");

module.exports = (req, res) => {
    const {email} = req.body;
    /* const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: config.user,
               pass: config.pass
           }
    });
     const mailOptions = {
        from: 'BLOG TEAM', 
        to: email,
        subject: 'change Password', 
        html: `
            <p><strong>Hello ${user.username},</strong></p>
            <p>The following link can be used to change your password and will be available for only next 10 hours.</p>
            <p><a href="${req.headers.origin}/${recoveryRequestNumber}/${user._id}">Change Password</a></p>
            <br />
            <p>Good Luck 😊 , <strong>BLOG TEAM</strong>.</p>
        `
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err || !info) return res.json(false);
        res.json(true);
     }); */
};